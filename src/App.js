import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';

import { TaskManager } from './bus/taskManager';
import {useTaskManager} from "./bus/taskManager/hooks/useTaskManager";

initializeIcons();

export const App = () => {
    const { tasks, updateHandler } = useTaskManager();

    return (
        <>
            <Text variant="mega">
                App
            </Text>
            <TaskManager tasks={tasks} updateHandler={updateHandler} />
        </>
    );
}
