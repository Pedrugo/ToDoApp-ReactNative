import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useJokesApi } from '../hooks/useJokeApi';
import { styles } from '../styles/styles';

export const JokeCard = () => {

    const { setup, punchline, isLoading } = useJokesApi();

    return (
        <View style={styles.jokeContainer}>
            {
                isLoading ?
                    (
                        <View style={{
                            alignContent: 'center',
                            flex: 1,
                            justifyContent: 'center',

                        }}>
                            <ActivityIndicator color='white' size={20} />
                        </View>
                    )
                    :
                    (
                        <>
                            <Text style={styles.jokeText}>{setup}</Text>
                            <Text style={styles.jokeText}>{punchline}</Text>
                        </>
                    )
            }

        </View>
    );
};
