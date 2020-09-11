// Core

// API
import { api } from '../../api';

// Other

export const useTaskManagerDelete = (id) => {
    return api.tasks.delete(id);
};