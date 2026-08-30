import { useState } from "react";

export default function Prompt() {
    const [reply, setReply] = useState("")

    const backendApi = import.meta.env.VITE_APP_BACKEND_HOST;

    async function handleSubmit(event: any) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const prompt = formData.get("prompt")
        const res = await fetch(`${backendApi}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        })
        const data = await res.json()
        const replyFromAi = data;
        setReply(replyFromAi?.reply)
        console.log(replyFromAi.reply);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "200px", alignItems: "center", justifyContent: "center" }}>
                    <input style={{}} type="text" name="prompt" />
                    <button type="submit">Send Prompt to backend</button>
                </div>
                <p>{reply}</p>
            </form>
        </div>
    )
}