import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY1 } from "./constants";
import { GEMINI_KEY2 } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINI_KEY1 });

export default ai;