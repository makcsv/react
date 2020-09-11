// Core
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Other
import { api } from '../../api';
import { taskManagerActions } from "../../actions";

const mockData = [
    {
        id: 'A-1',
        title: 'Learn Git',
        isComplete: true,
    }
];

export const useTaskManager = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.taskManager);

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        dispatch(taskManagerActions.fetchTasksAsync());
    }, [dispatch]);

    // useEffect(() => {
    //     (async () => {
    //         if (true === flag) {
    //             setTasks(await api.tasks.getAll());
    //             setFlag(false);
    //         }
    //     })();
    // }, [flag]);

    return {
        tasks,
        updateHandler: (g) => {setFlag(g)}
    }
};