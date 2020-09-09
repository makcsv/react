// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { Form } from './components/form';
import { List } from './components/list';

export const TaskManager = ({ tasks, updateHandler }) => {
    return (
        <div>
            <Text variant="xLarge">
                Task Manager
            </Text>
            <Form updateHandler={updateHandler} />
            <List items={tasks} updateHandler={updateHandler} />
        </div>
    );
};