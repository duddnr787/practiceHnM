let initialState = {
  id : '',
  pwd : '',
  authenticate : false
};

function authenticateReducer(state=initialState, action){
  let {type, payload} = action;
  switch(type){
    case "LOGIN_SUCCSESS" :
      return {...state, id : payload.id, pwd : payload.pwd, authenticate:true};
    default :
      return { ...state };
  }
}

export default authenticateReducer