// Core

// API
import { api } from '../../api';
import { TaskManager } from "../../index";
import {useTaskManager} from "../useTaskManager";

// Other

export const useTaskManagerDelete = (id) => {
    return api.tasks.delete(id);
};