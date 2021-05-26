import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from '../styles/styles';

import { AppHeader } from '../components/AppHeader';
import { TodoForm } from '../components/AddTodoForm';
import { useJokesApi } from '../hooks/useJokeApi';

export const AddTodo = () => {

    const { setup, punchline } = useJokesApi();

    return (
        <View style={styles.container}>
            <ScrollView>
                <AppHeader />
                <TodoForm />
                <View style={styles.jokeContainer}>
                    <Text style={styles.jokeText}>{setup}</Text>
                    <Text style={styles.jokeText}>{punchline}</Text>
                </View>
            </ScrollView>
        </View>
    );
};
