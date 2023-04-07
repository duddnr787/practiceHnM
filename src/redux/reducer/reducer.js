let initialState={
  count:0,
  productList:[],
  authenticate:false
}; 


function reducer(state=initialState, action){
  switch(action.type){ //switch 문으로 하는 법
    case 'INCREMENT':
      return {...state, count: state.count + action.payload.num };
    case 'DECREMENT':
      return {...state, count: state.count - action.payload.num};
    case 'PRODUCT':
      return {...state, productList: action.payload.data};
    case 'LOGIN':
      return {...state, authenticate: action.payload};
    case 'LOGOUT':
      return {...state, authenticate: action.payload};
    default :
      return { ...state};
  }

  // if(action.type === 'INCREMENT'){
  //   return {...state, count: state.count + action.payload.num }; //spread로 복사해줘야 새로운 주소 값을 얻음.
  // }
  // return {...state};
}


export default reducer;