// Core
import React from 'react';

// Elements
import { NewTaskForm } from '../../../../elements/newTaskForm';

export const Form = ({ updateHandler }) => {
    return (
        <>
            <NewTaskForm updateHandler={updateHandler} />
        </>
    );
}