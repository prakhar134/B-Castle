const initialState = {
    users: [],
    user: {},
    price: {}
  };
  const adminState = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_USER':
        console.log(action.payload);
        return {
            ...state,
            users: action.payload
        };
      case 'GET_PRICE':
        return {
          ...state,
          price: action.payload
        };
      case 'GET_USER':
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  };
  
  export default adminState