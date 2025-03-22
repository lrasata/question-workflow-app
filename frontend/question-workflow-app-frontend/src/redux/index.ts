import { configureStore } from '@reduxjs/toolkit';
import answeredQuestionsReducer from "./AnsweredQuestions.ts";


const store = configureStore({
    reducer: { answeredQuestions: answeredQuestionsReducer },
});

export default store;