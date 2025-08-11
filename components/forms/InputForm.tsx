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
import { AiGenerate } from "@/lib/AiModel";

type InputFormProps={
  templateType:TemplateType
  setResult:React.Dispatch<React.SetStateAction<string>>
  setFormValues:(values: Record<string, string>) => void;
  loading:boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputForm = ({ templateType,setResult ,setFormValues,loading,setLoading }:InputFormProps) => {
  const formSchema = generateSchemaFromTemplate(templateType.form);

  const initialeValues = templateType.form.reduce<Record<string, string>>(
    (acc, item) => {
      acc[item.name] = "";
      return acc;
    },
    {}
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialeValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setResult("")
    setLoading(true)
    const prompt = templateType.aiPrompt;
    const finalePrompt = JSON.stringify(values) + "," + prompt;
    const AiOptions={prompt:finalePrompt,updateText: (text:string ) => {setResult((prev) => (prev || "") + (text || ""))},stream:true}
    //@ts-ignore
    setFormValues(values);
    const response = await AiGenerate(AiOptions);
    if(response.status === "success") setLoading(false)
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <Button disabled={loading} type="submit" className="p-4 w-full">
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
