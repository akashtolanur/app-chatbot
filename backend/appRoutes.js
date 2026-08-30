import { Router } from "express";
const router = Router()
import dotenv from "dotenv"
dotenv.config()
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

// async function checkModels() {
//   try {
//     const models = await ai.models.list();
//     console.log("Available Models:");
//     for await (const model of models) {
//       if (model.name.includes("flash")) {
//         console.log(" -", model.name);
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// checkModels();

router.post("/chat", async (req, res) => {
    try {
        const data = req.body;
        const { prompt } = data; 
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required in the body" })
        }
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        })
        const replyText = response.text;
        res.json({ reply: replyText });
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Something went wrong generation content." });
    }
});

export default router