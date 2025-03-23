import { createSlice } from '@reduxjs/toolkit';

const initialAnsweredQuestionsState = {answers: []};

const answeredQuestionsSlice = createSlice({
    name: 'answeredQuestions',
    initialState: initialAnsweredQuestionsState,
    reducers: {
        addQuestions(state, action) {
            // @ts-ignore
            state.answers = [...state.answers, action.payload];
        },
    },
});

export const answeredQuestionActions = answeredQuestionsSlice.actions;

export default answeredQuestionsSlice.reducer;