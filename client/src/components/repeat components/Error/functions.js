export const MyError = {
  clearError(field, error, setError) {
    const objError = { ...error };
    delete objError[field];
    setError(objError);
  },
};
