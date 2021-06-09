import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {AppHeader} from '../components/AppHeader';
import {styles} from '../styles/styles';
import {TodoCard} from '../components/TodoCard';
import {getAllTodos} from '../redux/actions/todo';
import {Todo} from '../interfaces/todo';

export const TodoDone = () => {
  const dispatch = useDispatch();
  const {TodoReducer} = useSelector((store): any => store);
  const {todoList} = TodoReducer;

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <>
      <AppHeader />
      <ScrollView style={styles.container}>
        {todoList.map(
          (todo: Todo) => todo.done && <TodoCard key={todo.uuid} todo={todo} />,
        )}
      </ScrollView>
    </>
  );
};
