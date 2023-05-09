function login (id, pwd) {
  return (dispatch, getState) => {
    dispatch({type:'LOGIN_SUCCSESS', payload:{id, pwd}});
  };
}

function logout (){
  return (dispatch, getState) => {
    dispatch({type : "LOGOUT"})
  }
}
export const authenticateAction = { login, logout };