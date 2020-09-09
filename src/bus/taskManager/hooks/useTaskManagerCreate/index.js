// Core

// API
import { api } from '../../api';
import { TaskManager } from "../../index";
import {useTaskManager} from "../useTaskManager";

// Other

export const useTaskManagerCreate = (title) => {
    return api.tasks.create(title);
};