import { render, screen} from "@testing-library/react";
import Button from "../components/Button";
import { describe, expect, test } from 'vitest'


describe('Button component', () => {
    test('renders Button component with correct text', () => {
        render(<Button>Button text</Button>);

        const textElement = screen.getByText('Button text');
        expect(textElement).toBeTruthy();
    });
})