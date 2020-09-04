import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';

import {TaskManager} from './bus/taskManager';

initializeIcons();

export const App = () => (
  <>
    <Text variant="mega">
        App
    </Text>
    <TaskManager />
  </>
);
