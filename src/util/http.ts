import {SetStateAction} from "react";
import {StepProps} from "../containers/HorizontalLinearStepperContainer.tsx";

interface APIResponseType {
    questionId: string;
    question: string;
    order: number;
    additionalText?: string;
    label: string;
    options: {
        id: number;
        value: string;
    }[]
}

export const transformResponse = (response: APIResponseType[]): StepProps[] => {
    return response.map((response: APIResponseType) => {
        return {
            question: {
                id: response.questionId,
                title: response.question,
                description: response.additionalText,
                label: response.label,
                buttons: response.options.map((option) => {
                    return {
                        text: option.value,
                        ariaLabel: option.value
                    }
                })
            },
            step: response.order,
            stepLabel: response.label,
        }
    });
}

export const fetchData = async (setFunc: { (value: SetStateAction<StepProps[]>): void; (arg0: StepProps[]): void; }) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}?sort=order&populate=*`;
    const key = import.meta.env.VITE_BACKEND_API_KEY;


    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        }
    }

    fetch(url, options)
        .then((res) => {
            return res.json();
        })
        .then(({data}) => {
            setFunc(transformResponse(data));
        });
}