import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from '../styles/styles';

import { AppHeader } from '../components/AppHeader';
import { TodoForm } from '../components/AddTodoForm';
import { useJokesApi } from '../hooks/useJokesApi';

export const AddTodo = () => {

    const { setup, punchline } = useJokesApi();

    return (
        <View style={styles.container}>
            <ScrollView>
                <AppHeader />
                <TodoForm />
                <Text>{setup}</Text>
                <Text>{punchline}</Text>
            </ScrollView>
        </View>
    );
};
