import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		form: {},
	},

	reducers: {
		setData: (state, action) => {
			state.form = { ...state.form, ...action.payload };
		},
	},
});

export const { setData } = formSlice.actions;

export default formSlice.reducer;
