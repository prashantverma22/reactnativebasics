import { takeLatest, takeEvery, put, call, select } from 'redux-saga/effects';
import { types } from '../actions/actionType';


//to check whether redux-saga is working or not
function* checkSaga(value) {
    try {
        const json = yield call(() =>
            fetch("https://jsonplaceholder.typicode.com/posts")  //GET API
                .then(response => response.json())
                .then(myJson => myJson)
        );
        console.log('checkSaga', value.payload, json);

        yield put({
            type: types.STORE_API_DATA,
            payload: json
        })
    }
    catch (error) {
        console.log(error)
    }
}

//display API data
function* displayData(value) {
    try {
        const json = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`)  //GET API
                .then(response => response.json())
                .then(myJson => myJson)
        );
        console.log(value.payload, json);

        yield put({
            type: types.SHOW_API_DATA,
            payload: json
        })
    }
    catch (error) {
        console.log(error)
    }
}

//to delete API data
function* deleteData(value) {
    try {
        const res = yield call(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`, {
                method: "DELETE"
            }).then(response => response.json());
        })
        console.log(res, "prashant");

        yield put({
            type: types.DISPLAY_API_DATA,
            payload: value.payload
        })
    }
    catch (error) {
        console.log(error);
    }
}

//to edit & update API data
function* updateData(value) {
    try {
        const { item, editedTitle, editedId } = value.payload

        let body = JSON.stringify({
            id: item.id,
            title: editedTitle,
            body: item.body,
            userId: editedId,
        })
        const res = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: body
                }).then(response => response.json()).
                then(myJson => myJson))

        console.log(res);

        yield put({
            type: types.DISPLAY_API_DATA,
            payload: item.id
        })

    }
    catch (err) {
        console.log(err);
    }
}


export default function* firstSaga() {
    console.log("hello sagas.")
    yield takeLatest(types.CHECK_RED, checkSaga);
    yield takeLatest(types.DISPLAY_API_DATA, displayData);
    yield takeLatest(types.DELETE_API_DATA, deleteData);
    yield takeLatest(types.UPDATE_API_DATA, updateData);
}