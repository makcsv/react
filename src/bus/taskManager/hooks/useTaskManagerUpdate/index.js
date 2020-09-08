// Core

// API
import { api } from '../../api';

// Other

export const useTaskManagerUpdate = (taskId, isComplete) => {
    api.tasks.switchStatus(taskId, isComplete);
};