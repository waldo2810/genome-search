import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookmarkState = {
  bookmarkedUsers: User[];
};

const initialState = {
  bookmarkedUsers: [],
} as BookmarkState;

export const bookmarks = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    reset: () => initialState,
    bookmarkUser(state, action: PayloadAction<User>) {
      state.bookmarkedUsers.push(action.payload);
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.bookmarkedUsers = state.bookmarkedUsers
        .map((item) => {
          if (item.ggId === action.payload && item.isBookmark === true) {
            return {
              ...item,
              isBookmark: false,
            };
          }
          return item;
        })
        .filter((item) => item.isBookmark === true);
    },
    clearBookmarks(state) {
      state.bookmarkedUsers = [];
    },
  },
});

export const { bookmarkUser, removeBookmark, clearBookmarks } =
  bookmarks.actions;
export default bookmarks.reducer;
