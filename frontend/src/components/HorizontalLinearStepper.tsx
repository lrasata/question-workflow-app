import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {QuestionProps} from "./Question.tsx";
import QuestionContainer from "../containers/QuestionContainer.tsx";
import {StepLabel} from "@mui/material";

export interface StepProps {
    question: QuestionProps;
    step: number;
}

interface props {
    steps: StepProps[];
}

/***
 *  Inspired from : https://mui.com/material-ui/react-stepper/?srsltid=AfmBOopK1BrmO-uWfPkp7N2bobB42FxYr_H7baDFn-YGQ34Hgl6LBkJc#horizontal-stepper
 **/
const HorizontalLinearStepper = ( {steps} : props ) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Stepper activeStep={activeStep}>
                {steps.map((step) => {
                    const stepProps: { completed?: boolean } = {};
                    return (
                        <Step key={step.question.id} {...stepProps} >
                            <StepLabel>{step.question.title}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{mt: 2, mb: 1}}>
                        All steps completed - you&apos;re finished
                    </Typography>
                </>
            ) : (
                <>
                    <QuestionContainer {...steps[activeStep].question} />

                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{flex: '1 1 auto'}} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default HorizontalLinearStepper;
