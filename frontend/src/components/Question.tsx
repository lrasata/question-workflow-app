import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Button from "./Button.tsx";
import {useDispatch} from "react-redux";
import {answeredQuestionActions} from "../redux/AnsweredQuestions.ts";
import {stepQuestionActions} from "../redux/StepQuestions.ts";

export interface ButtonProps {
    text: string;
    ariaLabel: string;
    onClick?: () => void;
}

export interface QuestionProps {
    id: string;
    title: string;
    description?: string;
    buttons?: ButtonProps[];
}

const Question = ({id, title, description, buttons = []}: QuestionProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const dispatch = useDispatch();

    const handleClick = (optionValue: string) => {
        dispatch(answeredQuestionActions.saveAnsweredQuestions(
            {
                questionId: id,
                questionTitle: title,
                selectedOption: optionValue
            }
        ));
        dispatch(stepQuestionActions.incrementActiveStep())
    }

    return <Box sx={{maxWidth: 800}}>
        <Box sx={{height: '100%', py: 4, px: 4}}>
            <Typography variant="h5" component="div" gutterBottom={true}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{pt: 2}}>
                {description}
            </Typography>
        </Box>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'}
               sx={{px: 4, pb: 4, justifyContent: 'center'}}>
            {
                buttons.map((button: ButtonProps, index) => (
                    <Button
                        variant='outlined'
                        color='primary'
                        ariaLabel={button.ariaLabel}
                        onClick={() => handleClick(button.text)}
                        key={`${button.text}-${index}`}
                        fullWidth={isMobile}>
                        {button.text}
                    </Button>
                ))
            }
        </Stack>
    </Box>
}

export default Question;