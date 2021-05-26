import React from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { Overlay, Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { setOpenOverlay } from '../redux/actions/overlay';
import { styles } from '../styles/styles';
import { setOpenDataPicker, setSelectedDate } from '../redux/actions/datePicker';
import { Todo } from '../interfaces/todo';
import { getAllTodos, updateTodo } from '../redux/actions/todo';

export const EditTodoForm = () => {

    const dispatch = useDispatch();
    const { OverlayReducer, DatePickerReducer } = useSelector((store): any => store);
    const { openOverlay, todo } = OverlayReducer;
    const { isOpen, selectedDate } = DatePickerReducer;

    const handleTodoEditedSubmit = (todo: Todo) => {
        dispatch(updateTodo(todo));
        dispatch(setOpenOverlay(false));
        dispatch(getAllTodos());
    };

    const handleEditDatePicker = (date: string) => {
        dispatch(setSelectedDate(date));
    };

    return (
        <ScrollView>
            <Overlay
                overlayStyle={styles.overlay}
                isVisible={openOverlay}
                onBackdropPress={() => {
                    dispatch(setOpenOverlay(false));
                    dispatch(setSelectedDate(''));
                }}
            >
                <Formik
                    initialValues={{
                        uuid: `${todo.uuid}`,
                        title: `${todo.title}`,
                        description: `${todo.description}`,
                        deadline: `${todo.deadline}`,
                        phrase: '',
                    }}
                    onSubmit={
                        (values) => handleTodoEditedSubmit(
                            {
                                ...todo,
                                ...values,
                                deadline: selectedDate ? selectedDate : values.deadline,
                                modificationDate: format(new Date(), 'dd/MM/yyyy')
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
                                value={selectedDate ? selectedDate : values.deadline}
                            />

                            {
                                isOpen && (
                                    <DateTimePickerModal
                                        testID="dateTimePicker"
                                        isVisible={isOpen}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onConfirm={(date) => handleEditDatePicker(format(date, 'dd/MM/yyyy'))}
                                        onCancel={() => dispatch(setOpenDataPicker(false))}
                                    />
                                )

                            }

                            <Button
                                buttonStyle={styles.formButton}
                                title="Save"
                                onPress={handleSubmit}
                            />

                        </View>
                    )}
                </Formik>
            </Overlay>
        </ScrollView>
    );
};
