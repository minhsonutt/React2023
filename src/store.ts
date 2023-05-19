import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.reducer'

// sử dụng ở index.tsx
export const store = configureStore({
  reducer: { blog: blogReducer }
})

//
export type RootState = ReturnType<typeof store.getState>

export type AppDispath = typeof store.dispatch
