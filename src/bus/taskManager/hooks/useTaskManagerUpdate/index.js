// Core

// API
import { api } from '../../api';

// Other

export const useTaskManagerUpdate = (taskId, isComplete) => {
    return api.tasks.switchStatus(taskId, isComplete);
};