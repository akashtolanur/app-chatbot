import { useState } from "react";
import { PromptService } from "@/api/prompt.service";

export default function Prompt() {
    const [reply, setReply] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
            
        try {
            const formData = new FormData(event.currentTarget);
            const prompt = formData.get("prompt") as string;
            const replyFromAi = await PromptService.givePrompt({ prompt })
            setReply(replyFromAi?.reply)
        } catch (error: any) {
            console.error(error.message || error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    {isLoading && (
                        <p className="text-2xl text-center mt-12">
                            Loading...
                        </p>
                    )}
                    <p>{reply}</p>
                    <div className="absolute flex gap-3 top-140 left-50">
                        <input className="w-full border border-gray-400 rounded" type="text" name="prompt" />
                        <button className="border bg-blue-600 text-white cursor-pointer rounded px-3 py-1" type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}