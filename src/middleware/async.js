export default ({ dispatch }) => next => action => {
    debugger;
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(response => dispatch({ ...action, payload: response }));
}   
