import './app.css'

import {createTheme, ThemeProvider} from "@mui/material";
import QuestionContainer from "./containers/QuestionContainer.tsx";

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
        <QuestionContainer />
    </ThemeProvider>;
}

export default App
