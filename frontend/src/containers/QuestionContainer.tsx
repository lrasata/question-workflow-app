import Question, {QuestionProps} from "../components/Question.tsx";

const QuestionContainer = (question: QuestionProps) => {

    return <Question id={question.id} title={question.title} description={question.description} buttons={question.buttons}/>
}

export default QuestionContainer;