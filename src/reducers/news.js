const initialState = {
    news: [],
    current: {}
  };
  const newsState = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_NEWS':
        return {
            news: action.payload
        };
      case 'ADD_NEWS':
        return {
            ...state,
            news: [...state.news, action.payload]
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
  
  export default newsState