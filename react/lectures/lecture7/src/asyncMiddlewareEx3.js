const asyncMiddleware = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        //делаем запрос к API
        fetch('https://..')
        .then(response => response.json())
        .then(data => {store.dispatch({type: 'FETCH_DATA_SUCCESS', payload: data})})
        .catch(error => store.dispatch({type: 'FETCH_DATA_ERROR', payload: error.toString()}));
      action(store.dispatch, store.getState);
    }
 
  return next(action);
};
export default asyncMiddleware;