import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { format } from 'date-fns';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { View, TouchableOpacity, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { styles } from '../styles/styles';
import { Todo } from '../interfaces/todo';
import { addNewTodo, getAllTodos } from '../redux/actions/todo';
import { setOpenDataPicker, setSelectedDate } from '../redux/actions/datePicker';

export const TodoForm = () => {

    const dispatch = useDispatch();
    const { DatePickerReducer } = useSelector((store): any => store);
    const { isOpen, selectedDate } = DatePickerReducer;

    const handleChangeDatePicker = (date: string) => {
        dispatch(setSelectedDate(date));
    };

    const handleTodoSubmit = (values: Todo) => {
        dispatch(addNewTodo(values));
        dispatch(setSelectedDate(''));
        dispatch(getAllTodos());
    };

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                deadline: format(new Date(), 'dd/MM/yyyy'),
                phrase: '',
                modificationDate: ''
            }}
            onSubmit={
                (values) => handleTodoSubmit(
                    {
                        ...values,
                        uuid: uuidv4(),
                        creationDate: format(new Date(), 'dd/MM/yyyy'),
                        deadline: selectedDate ? selectedDate : values.deadline,
                        done: false,
                    }
                )
            }
        >
            {({ values, handleChange, handleSubmit }) => (

                <View style={styles.formContainer}>

                    <Input
                        style={styles.input}
                        placeholder="Todo Title"
                        maxLength={40}
                        value={values.title}
                        onChangeText={handleChange('title')}
                    />
                    <Input
                        style={styles.input}
                        placeholder="Todo Description"
                        multiline maxLength={120}
                        numberOfLines={4}
                        value={values.description}
                        onChangeText={handleChange('description')}
                    />

                    <Text style={styles.textOnInput}>Deadline</Text>

                    <Input
                        style={styles.input}
                        placeholder="End Date"
                        disabled
                        rightIcon={
                            <TouchableOpacity
                                onPress={() => dispatch(setOpenDataPicker(true))}
                            >
                                <Icon name={'event'} size={40} color={'#2196f3'} />
                            </TouchableOpacity>
                        }
                        value={selectedDate === '' ? values.deadline : selectedDate}
                    />

                    {
                        isOpen && (
                            <DateTimePickerModal
                                testID="dateTimePicker"
                                isVisible={isOpen}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onConfirm={(date) => handleChangeDatePicker(format(date, 'dd/MM/yyyy'))}
                                onCancel={() => dispatch(setOpenDataPicker(false))}
                            />
                        )

                    }

                    <Button
                        buttonStyle={styles.formButton}
                        title="Add Todo"
                        onPress={handleSubmit}
                    />

                </View>
            )}
        </Formik>
    )
}
