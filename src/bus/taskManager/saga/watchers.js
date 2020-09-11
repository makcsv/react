import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from "../types";

import { fetchTasks } from './workers';

function* watchFetchTasks() {
    yield takeEvery(types.TASK_MANAGER_FETCH_TASKS_ASYNC, fetchTasks);
}

export function* watchTaskManager() {
    yield all([call(watchFetchTasks)]);
}