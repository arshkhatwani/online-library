export const fulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.books = payload;
};

export const pendingReducer = (state) => {
  state.isLoading = true;
};

export const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  alert(payload);
};
