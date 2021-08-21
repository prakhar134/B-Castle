const initialState = {
    users: [],
    user: {},
    price: {},
    investment: 0,
    current: 0,
    profit: 0,
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
      case 'GET_INVESTMENT':
        return {
          ...state,
          investment: state.investment + action.payload
        };
      case 'GET_PROFIT':
        console.log(action.payload);
        return {
          ...state,
          profit: state.profit + action.payload
        };
      case 'GET_CURRENT':
        return {
          ...state,
          current: state.current+ action.payload
        };
      default:
        return state;
    }
  };
  
  export default adminState