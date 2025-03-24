import { render, screen} from "@testing-library/react";
import { describe, expect, test } from 'vitest'
import Question from "../components/Question";


describe('Question component', () => {
    test('renders Question component with correct information', () => {
        render(<Question
            title="question title"
            description="question description"
            buttons={[{ text: "button 1", ariaLabel: "aria label 1"}]}
            id="question-1"
        />);

        const questionTitleElement = screen.getByText('question title');
        expect(questionTitleElement).toBeTruthy();

        const descriptionElement = screen.getByText('question description');
        expect(descriptionElement).toBeTruthy();

        const buttonElement = screen.getByText('button 1');
        expect(buttonElement).toBeTruthy();
    });
})