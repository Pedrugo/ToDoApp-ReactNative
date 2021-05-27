import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import { AppHeader } from '../components/AppHeader';
import { TodoForm } from '../components/AddTodoForm';
import { JokeCard } from '../components/JokeCard';
import { useConnected } from '../hooks/useConnected';

export const AddTodo = () => {

    const { connected } = useConnected();

    return (
        <View style={styles.container}>
            <ScrollView>
                <AppHeader />
                <TodoForm />
                {
                    connected && <JokeCard />
                }
            </ScrollView>
        </View>
    );
};
