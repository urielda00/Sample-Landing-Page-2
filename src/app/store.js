import TabSlice from '../features/Tabs';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		tab: TabSlice,
	},
});
