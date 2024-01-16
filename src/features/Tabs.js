import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tabValue: 'upperView',
};

export const TabSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		IsSection: (state, action) => {
			const isSection = action.payload;
			state.tabValue = isSection;
		},
	},
});

export const { IsSection } = TabSlice.actions;

export default TabSlice.reducer;
