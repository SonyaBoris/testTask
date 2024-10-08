import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Comment, CommentsState } from '../types/comments';

const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null,
};

export const fetchComments = createAsyncThunk<Comment[]>(
  'comments/fetchComments',
  async () => {
    const response = await axios.get('https://d42d68e024bf100e.mokky.dev/comments');
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const selectAllComments = (state: { comments: CommentsState }) => state.comments.comments;

export default commentsSlice.reducer;
