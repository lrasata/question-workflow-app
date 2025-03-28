import { createSlice } from '@reduxjs/toolkit';

const initialAnsweredQuestionsState = {answers: []};

const answeredQuestionsSlice = createSlice({
    name: 'answeredQuestions',
    initialState: initialAnsweredQuestionsState,
    reducers: {
        saveAnsweredQuestions(state, action) {
            // @ts-ignore
            state.answers = [...state.answers, {
                questionId: action.payload.questionId,
                questionTitle: action.payload.questionTitle,
                selectedOption: action.payload.selectedOption
            }];
        },
    },
});

export const answeredQuestionActions = answeredQuestionsSlice.actions;

export default answeredQuestionsSlice.reducer;