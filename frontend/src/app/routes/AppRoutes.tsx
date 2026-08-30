import { Routes, Route } from "react-router-dom"
import Chatbot from "@/app/pages/Chatbot"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Chatbot />} />

        </Routes>
    )
}
export default AppRoutes