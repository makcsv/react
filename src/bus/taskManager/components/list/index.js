// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';

export const List = ({ items }) => {
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
        />
    ))

    return (
        <>
            {listJSX}
        </>
    );
}