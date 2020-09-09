// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Elements
import { Task } from '../../../../elements/task';

export const List = ({ items, updateHandler }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isComplete
        }
    ) => (
        <Task
            key={id}
            taskId={id}
            label={title}
            isComplete={isComplete}
            updateHandler={updateHandler}
        />
    ))

    return (
        <div>
            <Text variant={"large"}>
                Tasks
            </Text>
            {listJSX}
        </div>
    );
}