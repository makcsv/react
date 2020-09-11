import { combineReducers } from 'redux';

import {
    taskManagerReducer as taskManager
} from '../bus/taskManager/reducer';

export const rootReducer = combineReducers({
    taskManager,
});
