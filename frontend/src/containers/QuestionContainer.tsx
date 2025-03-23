import Question, {QuestionProps} from "../components/Question.tsx";
import {answeredQuestionActions} from "../redux/AnsweredQuestions.ts";
import {stepQuestionActions} from "../redux/StepQuestions.ts";
import {useDispatch} from "react-redux";

const QuestionContainer = (question: QuestionProps) => {
    const dispatch = useDispatch();

    const handleClick = (optionValue: string) => {
        dispatch(answeredQuestionActions.saveAnsweredQuestions(
            {
                questionId: question.id,
                questionTitle: question.title,
                selectedOption: optionValue
            }
        ));
        dispatch(stepQuestionActions.incrementActiveStep())
    }

    const questionButtonsWithOnClick = question.buttons?.map(
        (button) => ({
            ...button,
            onClick: handleClick,
        })

    )

    return <Question id={question.id} title={question.title} description={question.description} buttons={questionButtonsWithOnClick}/>
}

export default QuestionContainer;