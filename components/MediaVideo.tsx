interface MediaVideoProps {
  url: string;
}

const MediaVideo: React.FC<MediaVideoProps> = ({ url }) => {
  return (
    <iframe
      src={url}
      // frameBorder="0"
      allowFullScreen
      loading="lazy"
      title="Video"
      width="100%" // Adjust according to your layout
      height="400px" // Adjust according to your layout
      className="rounded-xl dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
    />
  );
};

export default MediaVideo;