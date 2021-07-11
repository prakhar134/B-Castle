const initialState = {
  isAuthenticated: false,
  user: null,
  msg: null,
};
const authState = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        isAuthenticated: true,
        user: action.payload,
        msg: 'User Signed in Successfully!!',
      };
    case 'USER_FETCHED':
      return {
        isAuthenticated: true,
        user: action.payload,
        msg: 'User is Signed In!!',
      };
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false, 
        user: null, 
        msg: 'User Logged Out !!'
      }
    case 'SIGNED_UP':
      return {
        isAuthenticated: true,
        user: action.payload,
        msg: 'User Registered Successfully!!',
      };
    case 'ERROR':
      return { isAuthenticated: false, user: null, msg: 'Invalid Request' };
    default:
      return state;
  }
};

export default authState