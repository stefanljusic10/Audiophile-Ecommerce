import { createSlice } from '@reduxjs/toolkit'

export const toggleCartSlice = createSlice({
  name: 'toggleCart',
  initialState: { toggle: false },
  reducers: {
    openCartPopup: (state) => ({ ...state, toggle: true }),
    closeCartPopup: (state) => ({ ...state, toggle: false }),
  },
})

export const { openCartPopup, closeCartPopup } = toggleCartSlice.actions

export default toggleCartSlice.reducer
