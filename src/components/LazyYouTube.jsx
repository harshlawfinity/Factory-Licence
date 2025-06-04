import { useState } from "react";

const LazyYouTube = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden bg-black">
      {!showVideo ? (
        <button
          onClick={() => setShowVideo(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-lg bg-black/60 z-10"
          aria-label="Play video"
        >
          ▶ Play Video
        </button>
      ) : null}

      {!showVideo ? (
        <img
          src="https://img.youtube.com/vi/uaSlyiFVhSw/hqdefault.jpg"
          alt="Video thumbnail"
            loading="lazy"

          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/uaSlyiFVhSw?autoplay=1&mute=1&controls=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LazyYouTube;
