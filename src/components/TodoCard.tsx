import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { styles } from '../styles/styles';
import { getAllTodos, removeTodo, updateStatus } from '../redux/actions/todo';
import { setOpenOverlay } from '../redux/actions/overlay';

export const TodoCard = ({ todo }: any) => {

    const dispatch = useDispatch();

    const handleRemoveTodo = (uuid: string) => {
        dispatch(removeTodo(uuid));
        dispatch(getAllTodos());
    };

    const handleChangeStatus = (uuid: string) => {
        dispatch(updateStatus(uuid));
        dispatch(getAllTodos());
    };

    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>{todo.title}</Card.Title>

            <Card.FeaturedSubtitle style={{ color: 'black' }}>Creation date: {todo.creationDate} </Card.FeaturedSubtitle>
            <Card.FeaturedSubtitle style={{ color: 'black' }}>Deadline: {todo.deadline}</Card.FeaturedSubtitle>
            <Card.FeaturedSubtitle style={{ color: 'black' }}>Modification date: {todo.modificationDate}</Card.FeaturedSubtitle>


            <Card.Divider />
            <View>
                <Text style={styles.cardText}>{todo.description}</Text>
            </View>

            <View style={styles.cardButtonContainer}>
                {
                    !todo.done &&
                    <>
                        <Button
                            title="Done"
                            buttonStyle={{ ...styles.cardButton, backgroundColor: '#2196f3' }}
                            onPress={() => handleChangeStatus(todo.uuid)}
                        />

                        <Button
                            title="Edit"
                            buttonStyle={{ ...styles.cardButton, backgroundColor: '#ffc400' }}
                            onPress={() => dispatch(setOpenOverlay(true, todo))}
                        />
                    </>
                }

                <Button
                    title="Delete"
                    buttonStyle={{ ...styles.cardButton, backgroundColor: '#ff5722' }}
                    onPress={() => handleRemoveTodo(todo.uuid)}
                />
            </View>
        </Card>
    )
}
