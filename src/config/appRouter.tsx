import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllQuestion } from "../pages/AllQuestion"
import  AskQuestion  from "../pages/AskQuestion"
import  Question  from "../pages/Question"

export const Router = () => {

    return<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllQuestion/>} />
                <Route path="/askquestion" element={<AskQuestion/>} />
                <Route path="/question:id" element={<Question/>} />
            </Routes>
        </BrowserRouter>
    </>
}