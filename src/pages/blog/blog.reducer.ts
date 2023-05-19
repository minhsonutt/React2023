import { createAction, createReducer } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface blogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: blogState = {
  postList: initialPostList,
  editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<Post>('blog/startEditingPost')
export const finishEditPost = createAction<Post>('blog/finishEditPost')
export const cancelEditPost = createAction('blog/cancelEditPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.postList.push(action.payload)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const postIndex = state.postList.findIndex((post) => post.id === postId)

      state.postList.splice(postIndex, 1)
    })
    .addCase(startEditingPost, (state, action) => {
      state.editingPost = action.payload
    })
    .addCase(cancelEditPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditPost, (state, action) => {
      state.postList.some((post, index) => {
        if (post.id === action.payload.id) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
    })
})

export default blogReducer
