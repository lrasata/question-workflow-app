import { createSlice } from '@reduxjs/toolkit';

const initialStepQuestionsState = {stepQuestions: [], activeStep: 0};

const stepQuestionsSlice = createSlice({
    name: 'stepQuestions',
    initialState: initialStepQuestionsState,
    reducers: {
        saveStepQuestions(state, action) {
            // @ts-ignore
            state.stepQuestions = action.payload;
        },
        incrementActiveStep(state) {
            state.activeStep += 1;
        }
    },
});

export const stepQuestionActions = stepQuestionsSlice.actions;

export default stepQuestionsSlice.reducer;