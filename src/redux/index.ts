import { configureStore } from '@reduxjs/toolkit';
import answeredQuestionsReducer from "./AnsweredQuestions.ts";
import stepQuestionsReducer from "./StepQuestions.ts";


const store = configureStore({
    reducer: { answeredQuestions: answeredQuestionsReducer, stepQuestions: stepQuestionsReducer },
});

export default store;