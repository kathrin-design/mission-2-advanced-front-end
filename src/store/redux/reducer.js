const initialState = [];

const apiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_DATA':
      return action.payload;
    case 'ADD_API_DATA':
      return [...state, action.payload];
    case 'EDIT_API_DATA':
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    case 'DELETE_API_DATA':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default apiDataReducer;