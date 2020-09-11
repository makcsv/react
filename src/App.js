import React from 'react';
import { Provider } from 'react-redux';
import { initializeIcons } from '@fluentui/react';

import { store } from "./init/store";

import { TaskManager } from './bus/taskManager';
import { useTaskManager } from "./bus/taskManager/hooks/useTaskManager";

initializeIcons();

export const App = () => {
    return (
        <Provider store={store}>
            <TaskManager />
        </Provider>
    );
}
