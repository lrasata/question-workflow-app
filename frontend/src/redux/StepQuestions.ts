import { createSlice } from '@reduxjs/toolkit';

const initialStepQuestionsState = {stepQuestions: []};

const stepQuestionsSlice = createSlice({
    name: 'stepQuestions',
    initialState: initialStepQuestionsState,
    reducers: {
        saveStepQuestions(state, action) {
            // @ts-ignore
            state.stepQuestions = action.payload;
        },
    },
});

export const stepQuestionActions = stepQuestionsSlice.actions;

export default stepQuestionsSlice.reducer;