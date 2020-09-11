// Core

// API
import { api } from '../../api';

// Other

export const useTaskManagerCreate = (title) => {
    return api.tasks.create(title);
};