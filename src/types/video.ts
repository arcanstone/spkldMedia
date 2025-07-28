export type Video = {
  id: string;  // Unique identifier for the video   
    title: string; // Title of the video
    thumbnail?: string; // Optional thumbnail image URL
    src: string; // URL of the video file (HLS/MP4)
    featured?: boolean; // Optional flag to mark as featured video
};