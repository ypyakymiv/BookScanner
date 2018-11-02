
const initialState = [

];

const ADD = 'ADD';
const UPDATE = 'UPDATE';

const books = (state, action) => {
  switch(action.type) {
    case ADD:
      console.log(state);
      return [...state, action.data];
      break;
    case UPDATE:
      return state.map((item) => {
        if(item.isbn == action.data.isbn)
          return {...item, ...action.data};
        else {
          return item;
        }
      });
      break;
    default:
      return initialState;
  }
};

const insert = (bookData) => {
  return {
    type: ADD,
    data: bookData
  };
}

const addBook = (data, type) => {
  return (dispatch, getState) => {
    navigator.geolocation.getCurrentPosition(
      geoloc => { dispatch(insert({geoloc, isbn: data, type})) },
      failure => { console.log(failure) },
      {timeout: 20000}
    );
  }
};

export {
  addBook
};

export default books;
