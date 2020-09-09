// Core
import { useEffect, useState } from 'react';

// API
import { api } from '../../api';

// Other

export const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        (async () => {
            setTasks(await api.tasks.getAll());
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (true === flag) {
                setTasks(await api.tasks.getAll());
                setFlag(false);
            }
        })();
    }, [flag]);

    return {
        tasks,
        updateHandler: (g) => {setFlag(g)}
    }
};