import './app.css'

import {createTheme, ThemeProvider} from "@mui/material";
import QuestionWorkflowContainer from "./containers/QuestionWorkflowContainer.tsx";

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});



function App() {
    return <ThemeProvider theme={theme}>
        <QuestionWorkflowContainer />
    </ThemeProvider>;
}

export default App
