export const pendingReducer = (state) => {
  state.isLoading = true;
};

export const fulfilledReducer = (state, { payload }) => {
  state.bookData = payload;
  state.isLoading = false;
};

export const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  alert(payload);
};
