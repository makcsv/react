// Core
import { useEffect, useState } from 'react';

// API
import { api } from '../../api';

// Other

export const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        (async () => {
            setTasks(await api.tasks.getAll());
        })();
    }, []);

    return {
        tasks,
    }
};