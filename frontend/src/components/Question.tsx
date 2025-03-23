import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Button from "./Button.tsx";

export interface ButtonProps {
    text: string;
    ariaLabel: string;
}

export interface QuestionProps{
    id: string;
    title: string;
    description?: string;
    buttons?: ButtonProps[];
}

const Question = ({title, description, buttons = []}: QuestionProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return <Box sx={{maxWidth: 800}}>
        <Box sx={{height: '100%', py: 4, px: 4}}>
            <Typography variant="h5" component="div" gutterBottom={true}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{pt: 2}}>
                {description}
            </Typography>
        </Box>
            <Box sx={{ display: 'flex', alignItems: 'center',  margin: 'auto', px: 4, pb: 4 }} width={isMobile ? '100%' : undefined}>
                <Stack spacing={2} direction={isMobile ? 'column' : 'row'} width='100%'>
                    {
                        buttons.map((button: ButtonProps, index) => (
                            <Button
                                variant='outlined'
                                color='primary'
                                ariaLabel={button.ariaLabel}
                                onClick={() => {}}
                                key={`${button.text}-${index}`}
                                fullWidth={isMobile}>
                                {button.text}
                            </Button>
                        ))
                    }
                </Stack>

            </Box>
    </Box>
}

export default Question;