import React, { useState } from 'react';
import { Checkbox } from '@fluentui/react';
import {useTaskManagerUpdate} from "../../bus/taskManager/hooks/useTaskManagerUpdate";

export const Task = ({ taskId, label, isComplete }) => {
    const [checked, setChecked] = useState(isComplete);

    const HandleCheckboxChange = () => { setChecked((isComplete = !checked)); useTaskManagerUpdate(taskId, isComplete) };

    return (
        <div>
            <Checkbox
                label={label}
                checked={checked}
                onChange={HandleCheckboxChange}
            />
            <br/>
        </div>
    );
};
