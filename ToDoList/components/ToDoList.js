import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './ AddTask';

const ToDoList = ({ values }) => {

    const [tasks, setTasks] = useState(values.map((task) => ({ id: uuidv4(), title: task })));

    const addToDo = (newTitle) => {
        const newTask = { id: uuidv4(), title: newTitle };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    const removeToDo = (id) => {
        setTasks(tasks.filter((task) => task.id != id));
    }


    return (
        // tasks.map(((task) => {
        // <View style={styles.todoListContainer} key={task.id}>
        //     <Text>{task.title}</Text>
        //     <Button title="remove" onPress={() => removeToDo(task.id)}/>
        //     <AddTask onAddTask={addToDo}></AddTask>
        // </View>}))
        <View style={styles.todoListContainer}>
            {tasks.map((task) => (
                <View style={styles.todoItem} key={task.id}>
                    <Text style={styles.text}>Task Title: {task.title}</Text>
                    <Button title="remove" onPress={() => removeToDo(task.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    );
};

ToDoList.defaultProps = {
    tasks: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});



export default ToDoList;