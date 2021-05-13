import { GET_VIDEOS, BOOKMARK_VIDEO } from "../actions/videosAction";

const initialState = {
  videos: [],
  bookmarks: [],
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return { ...state, videos: action.items };
    case BOOKMARK_VIDEO:
      if (state.bookmarks.some((item) => item.id == action.id)) {
        const bookmarkedVideos = state.bookmarks.filter(
          (item) => item.id != action.id
        );
        return { ...state, bookmarks: bookmarkedVideos };
      } else {
        const video = state.videos.find((item) => item.id == action.id);
        return { ...state, bookmarks: [...state.bookmarks, video] };
      }
    default:
      return state;
  }
};

export default videosReducer;
