import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import Button from "./Button.tsx";

export interface ButtonProps {
    text: string;
    ariaLabel: string;
    onClick?: (text: string) => void;
}

export interface QuestionProps {
    id: string;
    title: string;
    description?: string;
    buttons?: ButtonProps[];
}

const Question = ({title, description, buttons = []}: QuestionProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return <Box sx={{maxWidth: '800px', textAlign: "center"}}>
        <Box sx={{height: '100%', py: 3, px: 3}}>
            <Typography variant="h5" component="div" gutterBottom={true}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{pt: 2}}>
                {description}
            </Typography>
        </Box>
        <Box flexDirection={isMobile ? 'column' : 'row'} sx={{px: 4, pb: 4}}>
            {
                buttons.map((button: ButtonProps, index) => (
                        <Button
                            key={`${button.text}-${index}`}
                            variant='outlined'
                            color='primary'
                            ariaLabel={button.ariaLabel}
                            onClick={() => button.onClick && button.onClick(button.text)}
                            fullWidth={isMobile}
                            margin={1}>
                            {button.text}
                        </Button>
                ))
            }
        </Box>
    </Box>
}

export default Question;