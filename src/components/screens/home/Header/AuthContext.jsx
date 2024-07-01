let currentUserEmail = null;

export const setCurrentUserEmail = (email) => {
  currentUserEmail = email;
};

export const getCurrentUserEmail = () => {
  return currentUserEmail;
};