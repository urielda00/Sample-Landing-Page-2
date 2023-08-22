import { configureStore } from '@reduxjs/toolkit';
import  TabSlice  from '../features/Tabs';

export const store = configureStore({
  reducer: {
    tab: TabSlice
  }
});