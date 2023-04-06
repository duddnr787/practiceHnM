let initialState={
  count:0
}; 


function reducer(state=initialState, action){
  if(action.type === 'INCREMENT'){
    return {...state, count: state.count + 1 }; //spread로 복사해줘야 새로운 주소 값을 얻음.
  }
  // switch(action.type){ switch 문으로 하는 법
  //   case 'INCREMENT':
  //     return {...state, count: state.count + 1 };
  //   default :
  //     return { ...state};
  // }
  return {...state};
}


export default reducer;