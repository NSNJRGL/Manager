import React from 'react';

export const UserContext = React.createContext({
  currentUser: 0,
  setCurrentUser: () => {},
});
