export const GET_VIDEOS = "GET_VIDEOS";
export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const BOOKMARK_VIDEO = "BOOKMARK_VIDEO";

export const fetchVideos = () => {
  return { type: FETCH_VIDEOS };
};

export const getVideos = (videos) => {
  return { type: GET_VIDEOS, items: videos };
};

export const bookmarkVideo = (videoId) => {
  return { type: BOOKMARK_VIDEO, id: videoId };
};
