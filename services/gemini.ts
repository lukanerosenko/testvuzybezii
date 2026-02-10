
import { GoogleGenAI } from "@google/genai";
// Fixed: CATEGORY_MAPPINGS is in constants.ts, not types.ts
import { CategoryType } from "../types";
import { CATEGORY_MAPPINGS } from "../constants";

export async function getCareerAdvice(topCategories: CategoryType[], scores: Record<CategoryType, number>) {
  // Always create a new instance before use to ensure the latest process.env.API_KEY is utilized
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const categoriesStr = topCategories.map(cat => CATEGORY_MAPPINGS.find(m => m.letter === cat)?.label).join(", ");
  
  const prompt = `Пользователь прошел профориентационный тест. 
  Его сильные стороны и интересы (категории): ${categoriesStr}.
  Результаты баллов: ${JSON.stringify(scores)}.
  Напиши краткое вдохновляющее напутствие (2-3 предложения), объясняющее почему эти направления ему подходят и какие навыки стоит развивать в первую очередь. 
  Отвечай вежливо и профессионально на русском языке.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
          temperature: 0.7,
      }
    });
    // Use the .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Твои интересы показывают большой потенциал в выбранных сферах. Продолжай исследовать свои таланты!";
  }
}
