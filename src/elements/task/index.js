import React, { useState } from 'react';
import { Checkbox, DefaultButton } from '@fluentui/react';
import { useTaskManagerUpdate } from "../../bus/taskManager/hooks/useTaskManagerUpdate";
import { useTaskManagerDelete } from "../../bus/taskManager/hooks/useTaskManagerDelete";

export const Task = ({ taskId, label, isComplete, updateHandler }) => {
    const [checked, setChecked] = useState(isComplete);

    const HandleCheckboxChange = () => {
        setChecked((isComplete = !checked));
        const result = useTaskManagerUpdate(taskId, isComplete);
        result.then(
            ({ status }) => {
                if ('ok' !== status) {
                    setChecked((isComplete = !isComplete));
                }
            }
        );
    };

    const HandleDelete = (id) => {
        const result = useTaskManagerDelete(id);

        result.then(
            ({ status }) => {
                if ('ok' === status) {
                    updateHandler(true);
                }
            }
        );
    }

    const stylesContainer = { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15 };
    const stylesCheckbox = { width: 200, float: 'left' };

    return (
        <div style={stylesContainer}>
            <div style={stylesCheckbox}>
                <Checkbox
                    label={label}
                    checked={checked}
                    onChange={HandleCheckboxChange}
                />
            </div>
            <DefaultButton
                onClick={() => HandleDelete(taskId)}
            >
                X
            </DefaultButton>
            <br/>
        </div>
    );
};
