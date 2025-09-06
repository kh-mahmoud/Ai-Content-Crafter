"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldType, TemplateType } from "@/types";
import { generateSchemaFromTemplate } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type InputFormProps = {
  templateType: TemplateType; // Defines the structure of the form (fields + AI prompt)
  setResult: React.Dispatch<React.SetStateAction<string>>; // Updates AI output in the parent component
  setFormValues: (values: Record<string, string>) => void; // Stores submitted values
  loading: boolean; // Whether the AI is generating or not
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; // Updates loading state
};

const InputForm = ({
  templateType,
  setResult,
  setFormValues,
  loading,
  setLoading,
}: InputFormProps) => {
  // Generate Zod validation schema dynamically based on template
  const formSchema = generateSchemaFromTemplate(templateType.form);

  // Initialize empty values for each form field
  const initialeValues = templateType.form.reduce<Record<string, string>>(
    (acc, item) => {
      acc[item.name] = "";
      return acc;
    },
    {}
  );

  // Setup react-hook-form with schema validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialeValues,
  });

  /**
   * Handles form submission:
   * - Shows loading toast
   * - Sends values + AI prompt to backend
   * - Streams AI response into the result state
   */
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Generating Content ...", { id: "generate" });
    setResult(""); // reset previous result
    setLoading(true);

    const prompt = templateType.aiPrompt;
    const finalePrompt = JSON.stringify(values) + "," + prompt;

    //@ts-ignore - store submitted form values for reuse
    setFormValues(values);

    // Call backend API (Cloudflare Worker) with prompt + stream flag
    const response = await fetch(process.env.NEXT_PUBLIC_WORKER!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: finalePrompt, stream: true }),
    });


    // If backend failed to return a stream
    if (!response.body) {
      toast.error("Something went wrong");
      return;
    }

    // Read the streamed response chunk by chunk
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      setResult((prev) => prev + chunk); // append each chunk to result
    }

    setLoading(false);
    toast.dismiss("generate"); // remove loading toast
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Dynamically render form fields based on templateType */}
          {templateType.form.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>
                    {item.field === FieldType.INPUT ? (
                      <Input
                        placeholder="Type here"
                        {...field}
                        value={field.value as string}
                        className=" !focus:border-0"
                      />
                    ) : (
                      <Textarea
                        placeholder="Type here "
                        className="resize-none !focus:border-0"
                        {...field}
                        value={field.value as string}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Submit button */}
          <Button disabled={loading} type="submit" className="p-4 w-full">
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
