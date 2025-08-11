import { AiGenerateOptions } from "@/types";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function AiGenerate({
  model = "gemini-2.5-pro",
  prompt,
  updateText,
  stream = false,
}: AiGenerateOptions): Promise<{ status: string; result: string }> {
  if (model == "gemini-2.5-pro") {
    if (stream) {
      if (!updateText) {
        throw new Error("updateText callback is required when streaming.");
      }
      const response = await ai.models.generateContentStream({
        model,
        contents: prompt,
      });

      let finalText = "";
      for await (const chunk of response) {
        chunk.text && updateText(chunk?.text);
        finalText += chunk?.text || "";
      }
      return { status: "success", result: finalText || "" };
    } else {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      return { status: "success", result: response.text || "" };
    }
  } else {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          thinkingConfig: {
            thinkingBudget: 0, // Disables thinking
          },
        },
      });
      return { status: "success", result: response.text || "" };
  }
}
