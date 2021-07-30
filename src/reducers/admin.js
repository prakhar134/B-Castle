const initialState = {
    users: [],
    user: {},
  };
  const adminState = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_USER':
        console.log(action.payload);
        return {
            ...state,
            users: action.payload
        };
      case 'CURRENT_NEWS':
        return {
            ...state,
            current: action.payload
        };
      case 'REMOVE_CURRENT':
        return {
          ...state,
          current: {}
        }
      default:
        return state;
    }
  };
  
  export default adminState