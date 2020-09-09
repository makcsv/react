import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';
import { useTaskManagerCreate } from "../../bus/taskManager/hooks/useTaskManagerCreate";

export const NewTaskForm = ({ updateHandler }) => {
    const [title, setTitle] = useState('');

    const HandleSubmit = () => {
        const result = useTaskManagerCreate(title);

        result.then(
            ({ status }) => {
                if ('ok' === status) {
                    setTitle('');
                    updateHandler(true);
                }
            }
        );
    };

    const styles = { fieldGroup: { width: 200, float: 'left' } };

    return (
        <div>
            <TextField
                label='Task title'
                styles={styles}
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <PrimaryButton
                styles={styles}
                onClick={HandleSubmit}
            >
                Create
            </PrimaryButton>
            <br/><br/>
        </div>
    );
};
