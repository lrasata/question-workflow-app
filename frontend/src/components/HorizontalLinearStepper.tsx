import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import {QuestionProps} from "./Question.tsx";
import QuestionContainer from "../containers/QuestionContainer.tsx";
import {StepLabel} from "@mui/material";
import {useSelector} from "react-redux";

export interface StepProps {
    question: QuestionProps;
    step: number;
    stepLabel: string;
}

interface props {
    steps: StepProps[];
}

interface AnswerProps {
    questionId: string;
    questionTitle: string;
    selectedOption: string;
}

/***
 *  Inspired from : https://mui.com/material-ui/react-stepper/?srsltid=AfmBOopK1BrmO-uWfPkp7N2bobB42FxYr_H7baDFn-YGQ34Hgl6LBkJc#horizontal-stepper
 **/
const HorizontalLinearStepper = ({steps}: props) => {
    // @ts-ignore
    const activeStepSelector = useSelector((state) => state.stepQuestions.activeStep);
    // @ts-ignore
    const answersSelector = useSelector((state) => state.answeredQuestions.answers);

    return (
        <Box sx={{width: '100%'}}>
            <Stepper activeStep={activeStepSelector}>
                {steps.map((step) => {
                    const stepProps: { completed?: boolean } = {};
                    return (
                        <Step key={step.question.id} {...stepProps} >
                            <StepLabel>{step.stepLabel}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStepSelector === steps.length ? (
                <>
                    <Typography variant='h5' sx={{mt: 4, mb: 4}}>
                        All steps completed
                    </Typography>
                    {
                        answersSelector.length > 0 &&
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            {
                                answersSelector.map((answer: AnswerProps) => {
                                    return <Box key={answer.questionId} mb={2}>
                                        <Typography variant='subtitle2'>
                                            {answer.questionTitle}
                                        </Typography>
                                        <Typography variant='body1'>
                                            {answer.selectedOption}
                                        </Typography>
                                    </Box>

                                })
                            }
                        </Box>
                    }
                </>
            ) : (
                <>
                    <QuestionContainer {...steps[activeStepSelector].question} />
                </>
            )}
        </Box>
    );
}

export default HorizontalLinearStepper;
