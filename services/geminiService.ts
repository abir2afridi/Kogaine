import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedPosterData } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const posterSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    headline: {
      type: Type.STRING,
      description: "A short, punchy, vintage-style headline (1-3 words). All uppercase.",
    },
    subhead: {
      type: Type.STRING,
      description: "A secondary line describing the business (e.g., 'AUTOMOTIVE REPAIR' or 'CLAY CERAMIC STUDIO').",
    },
    establishedDate: {
      type: Type.STRING,
      description: "A fictional founding year (e.g., 'ESTD 1927').",
    },
    tagline: {
      type: Type.STRING,
      description: "A short, catchy slogan (e.g., 'Solve it all with us!').",
    },
    description: {
      type: Type.STRING,
      description: "A short paragraph (20-30 words) of marketing copy in a vintage tone.",
    },
    layoutStyle: {
      type: Type.STRING,
      enum: ['automotive', 'minimal', 'typography', 'retro', 'art-deco'],
      description: "The best layout style for this type of business.",
    }
  },
  required: ["headline", "subhead", "establishedDate", "tagline", "description", "layoutStyle"],
};

export const generatePosterContent = async (brandName: string, brandType: string, style?: string): Promise<GeneratedPosterData> => {
  try {
    const styleInstruction = style ? `The layout style MUST be "${style}".` : "Choose the best layout style from the available options.";
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create vintage poster content for a brand named "${brandName}" which is a "${brandType}". 
      The tone should be retro, industrial, and utilitarian, similar to 1920s-1950s advertising.
      ${styleInstruction}
      Be creative but keep it concise suitable for a poster.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: posterSchema,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedPosterData;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data if API fails or key is missing
    return {
      headline: brandName.toUpperCase(),
      subhead: brandType.toUpperCase(),
      establishedDate: "ESTD 2024",
      tagline: "QUALITY GOODS FOR QUALITY FOLKS",
      description: "We provide the finest services in the region. Trusted by locals for over a century, our commitment to excellence is unwavering.",
      layoutStyle: (style as any) || 'typography'
    };
  }
};