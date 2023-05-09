//미들웨어 함수 만드는 곳
function getProducts(search) {
  return async (dispatch, getState) => {
    await fetch(`https://my-json-server.typicode.com/duddnr787/practiceHnM/products?q=${search}`)
    .then (res => res.json())
    .then (data => dispatch({type:'PRODUCT', payload: {data} }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    await fetch(`https://my-json-server.typicode.com/duddnr787/practiceHnM/products/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type:'PRODUCT_DETAIL', payload: {data} }));
  }
}
export const productAction={getProducts, getProductDetail}