import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabValue: 'zero'
}

export const TabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    Is0: (state) => {
      state.tabValue = 'zero'
    },
    Is1: (state) => {
     
      state.tabValue = 'one'
    },
    Is2: (state) => {
      state.tabValue = 'two'
    },
    Is3: (state) => {
      state.tabValue = 'three'
    }
  }
});

export const { Is0, Is1, Is2, Is3} = TabSlice.actions

export default TabSlice.reducer