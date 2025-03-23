import { createSlice } from '@reduxjs/toolkit';

const initialAnsweredQuestionsState = {questions: []};

const answeredQuestionsSlice = createSlice({
    name: 'answeredQuestions',
    initialState: initialAnsweredQuestionsState,
    reducers: {
        addQuestions(state, action) {
            // @ts-ignore
            state.questions = [...state.questions, action.payload];
        },
    },
});

export const answeredQuestionActions = answeredQuestionsSlice.actions;

export default answeredQuestionsSlice.reducer;