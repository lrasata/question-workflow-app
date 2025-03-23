import HorizontalLinearStepper, {StepProps} from "../components/HorizontalLinearStepper.tsx";
import {Card, CardContent} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchData} from "../util/http.ts";
import {useDispatch, useSelector} from "react-redux";
import {stepQuestionActions} from "../redux/StepQuestions.ts";

const QuestionWorkflowContainer = () => {
    const dispatch = useDispatch();
    const stepsSelector = useSelector((state) => state.stepQuestions.stepQuestions);

    const [steps, setSteps] = useState<StepProps[]>([]);

    useEffect(() => {
        fetchData(setSteps)
    }, []);

    useEffect(() => {
        if (steps.length !== 0){
            dispatch(stepQuestionActions.saveStepQuestions(steps));
        }
    }, [steps]);

    return <Card>
        <CardContent>
            {
                stepsSelector.length !== 0 && <HorizontalLinearStepper steps={stepsSelector} />
            }

        </CardContent>
    </Card>;
}

export default QuestionWorkflowContainer;