import userSagas from './users';
import {all} from 'redux-saga/effects';

export default function* rootSagas() {
    yield all([
        ...userSagas
    ]);
}