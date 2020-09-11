import { put, call, delay } from 'redux-saga/effects';

import { taskManagerActions } from "../../actions";
import { api } from "../../api";

export function* fetchTasks() {
    try {
        // enable spinner
        const response = yield call(api.tasks.getAll);
        const tasks = yield call([response, response.json]);

        if (200 !== response.status) {
            throw new Error('Some error');
        }

        yield delay(2000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
        console.log(error);
        // write error to redux
    } finally {
        // disable spinner
    }
}