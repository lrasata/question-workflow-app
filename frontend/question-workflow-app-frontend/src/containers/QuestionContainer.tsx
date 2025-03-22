import Question, {QuestionProps} from "../components/Question.tsx";
import {useEffect, useState} from "react";
import {fetchData} from "../util/http.ts";

const QuestionContainer = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);

    useEffect(() => {
        fetchData(setQuestions)
    }, []);

    return <>
        {
            questions.map((question: QuestionProps, index) => (
            <Question key={`${question.title}-${index}`} title={question.title} description={question.description} buttons={question.buttons} />
        ))}

    </>
}

export default QuestionContainer;