import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TODO_REQUEST, LOAD_TODO_SUCCESS, LOAD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../modules/todos';

////////// Todo 로드 ///////// 
// function loadTodoAPI() {

// }

function* loadTodo() {
    try {
        yield delay(1000);
        yield put({
            type: LOAD_TODO_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LOAD_TODO_FAILURE,
            error: e,
        });
    }
}

function* watchLoadTodo() {
  yield takeLatest(LOAD_TODO_REQUEST , loadTodo);
}



//////////// Todo 등록 ///////// 
// function addTodoAPI() {

// }

function* addTodo(action : any) {
    try {
        // yield delay(2000);
        // console.log(action.data.value)
        yield put({
            type: ADD_TODO_SUCCESS,
            data : action.data.value
        });
    } catch (e) {
        yield put({
            type: ADD_TODO_FAILURE,
            error: e,
        });
    }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO_REQUEST , addTodo);
}





export default function* todoSaga() {
    yield all([
        fork(watchLoadTodo),
        fork(watchAddTodo),
    ]);
}