import {Alert, Card, CardContent, useMediaQuery, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchData} from "../util/http.ts";
import {useDispatch, useSelector} from "react-redux";
import {stepQuestionActions} from "../redux/StepQuestions.ts";
import HorizontalLinearStepperContainer, {StepProps} from "./HorizontalLinearStepperContainer.tsx";

const QuestionWorkflowContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const dispatch = useDispatch();
    // @ts-ignore
    const stepsSelector = useSelector((state) => state.stepQuestions.stepQuestions);

    const [steps, setSteps] = useState<StepProps[]>([]);

    useEffect(() => {
        fetchData(setSteps)
    }, []);

    useEffect(() => {
        if (steps.length !== 0) {
            dispatch(stepQuestionActions.saveStepQuestions(steps));
        }
    }, [steps]);

    return <Card sx={{minWidth: isMobile ? '300px' : '600px'}}>
        <CardContent>
            {
                stepsSelector.length !== 0 && <HorizontalLinearStepperContainer steps={stepsSelector}/>
            }
            {
                stepsSelector.length === 0 && <Alert severity="warning">No questions fetched from API.</Alert>
            }

        </CardContent>
    </Card>;
}

export default QuestionWorkflowContainer;