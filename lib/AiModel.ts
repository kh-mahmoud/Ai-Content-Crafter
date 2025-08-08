import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function AiGenerate(
  prompt: string,
  updateText: (text: string | undefined) => void,
  stream:boolean=false
) {
  if (stream) {
    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-pro",
      contents: prompt,
      //  config: {
      //   thinkingConfig: {
      //     thinkingBudget: 0, // Disables thinking  (model 2.5 pro  thinking can't be disbaled)
      //   },
      // }
    });

    for await (const chunk of response) {
      updateText(chunk?.text);
    }
  }else{
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      //  config: {
      //   thinkingConfig: {
      //     thinkingBudget: 0, // Disables thinking  (model 2.5 pro  thinking can't be disbaled)
      //   },
      // }
    });
    updateText(response?.text);
  }
}
