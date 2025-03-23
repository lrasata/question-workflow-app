export const questionWorkflowConfig = {
    steps: [
        {
            stepId: 1,
            questionId: "id-question-a",
            entryPoint: true
        },
        {
            stepId: 2,
            questionId: "id-question-b",
            entryPoint: false
        },
        {
            stepId: 3,
            questionId: "id-question-c",
            entryPoint: false
        }
    ],
    connections: [
        {
            source: 1,
            target: 2,
            condition: {
                optionValueEquals: ["answer 1", "answer 2"]
            }
        },
        {
            source: 1,
            target: 3,
            condition: {
                optionValueEquals: ["answer 4", "answer 5"]
            }
        },
        {
            source: 1,
            target: null,
            condition: {
                optionValueEquals: ["answer 3"]
            }
        }
    ]
}