function login (id, pwd) {
  return (dispatch, getState) => {
    dispatch({type:'LOGIN_SUCCSESS', payload:{id, pwd}});
  };
}

export const authenticateAction = { login };