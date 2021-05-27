import { useEffect, useState } from 'react';
import jokesApi from '../api/jokesApi';
import { Joke } from '../interfaces/joke';

export const useJokesApi = () => {

    const [joke, setJoke] = useState<Joke>({
        id: 0,
        type: '',
        setup: '',
        punchline: '',
        isLoading: true,
    });

    const getJoke = async () => {
        const response = await jokesApi.get<Joke>('/jokes/random');

        setJoke({
            id: response.data.id,
            type: response.data.type,
            setup: response.data.setup,
            punchline: response.data.punchline,
            isLoading: false
        });
    };

    useEffect(() => {
        getJoke();
    }, []);

    return {
        ...joke
    };
};
