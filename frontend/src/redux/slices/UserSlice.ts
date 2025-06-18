import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types';
import { RootState } from '../store';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const selectCurrentUser = createSelector(
  (state: RootState) => state.user.user,
  (user) => user
);

export const selectIsLoggedIn = createSelector(selectCurrentUser, (user) => user !== null);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
