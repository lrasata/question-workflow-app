import {describe, expect, test} from "vitest";
import {transformResponse} from "../util/http";

const API_RESPONSE_DATA = [
    {
        "questionId": "question1",
        "question": "What is your range of age ?",
        "additionalText": "Select an option",
        "order": 1,
        "label": "Age",
        "options": [
            {
                "id": 88,
                "value": "less than 18 years old"
            },
            {
                "id": 89,
                "value": "between 18-30"
            }
        ]
    }
]

describe('http functions', () => {
    test('transform API response to correct format', () => {
        const expectedResponse = [
            {
                question: {
                    id: "question1",
                    title: "What is your range of age ?",
                    description: "Select an option",
                    label: "Age",
                    buttons: [
                        {
                            text: "less than 18 years old", ariaLabel: "less than 18 years old"
                        },
                        {
                            text: "between 18-30", ariaLabel: "between 18-30"
                        }
                    ]
                },
                step: 1,
                stepLabel: "Age",
            }
        ]

        const result = transformResponse(API_RESPONSE_DATA)
        expect(result).toStrictEqual(expectedResponse);
    });
})