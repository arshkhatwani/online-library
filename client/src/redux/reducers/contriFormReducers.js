export const setFormDataReducer = (state, { payload }) => {
  state.formData = payload;
};

export const pendingReducer = (state) => {};

export const fulfilledReducer = (state, { payload }) => {
  alert("Book Added!");
};

export const rejectedReducer = (state, { payload }) => {
  alert(payload);
};
