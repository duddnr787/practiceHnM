import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  count: 0,
  productList: [],
  selectedItem : null
};

//리듀서는 순수 함수여야한다.
//Reducer 함수는 기존의 state를 직접 변경하지 않고,  새.로.운 state object(객체)를 작성해서 return해야한다.
// function reducer(state = initialState, action) {
//   let {type, payload} = action;
//   switch (type) { //switch 문으로 하는 법
//     case 'INCREMENT':
//       return { ...state, count: state.count + payload.num };
//     case 'DECREMENT':
//       return { ...state, count: state.count - payload.num };
//     case 'PRODUCT':
//       return { ...state, productList: payload.data };
//     case 'PRODUCT_DETAIL' : 
//       return { ...state, selectedItem: payload.data};
//     default:
//       return { ...state };
//   }
// }

const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers: { //함수가 들어있어야한다.
    increment(state, action){
      state.count = state.count + action.payload.num
    },
    decrement(state, action){
      state.count = state.count - action.payload.num
    },
    getAllproducts(state, action){ //action으로 온 것을 state를 바꾼다.
      state.productList = action.payload.data
    },
    getProductDetail(state, action){
      state.selectedItem = action.payload.data
    }
  }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;