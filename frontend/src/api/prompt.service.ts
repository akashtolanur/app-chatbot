const api = import.meta.env.VITE_APP_BACKEND_HOST;

export const PromptService = {
    
    async givePrompt(data:{prompt:string}) {
        const res = await fetch(`${api}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await res.json();
        return result
    }

}