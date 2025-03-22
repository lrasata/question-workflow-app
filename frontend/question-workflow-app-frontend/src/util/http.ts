import { SetStateAction } from "react";
import {QuestionProps} from "../components/Question.tsx";

interface APIResponseType {
    questionId: string;
    question: string;
    additionalText?: string;
    options: {
        id: number;
        value: string;
    }[]
}

const transformResponse = (response: APIResponseType[]) => {
    console.log(response);
    const transformedResponse: QuestionProps[] = response.map((response: APIResponseType) => {
        return {
            title: response.question,
            description: response.additionalText,
            buttons: response.options.map((option) => {
                return {
                    text: option.value,
                    ariaLabel: option.value
                }
            })
        }
    })

    return transformedResponse;
}

export const fetchData = async (setFunc: { (value: SetStateAction<QuestionProps[]>): void; (arg0: QuestionProps[]): void; }) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}?populate=*`;
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