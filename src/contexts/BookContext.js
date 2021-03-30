import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();
const initialState = [{
    title: 'duy trung',
    author: 'trung duy', 
    id: uuidv4()
}]
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, initialState);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;