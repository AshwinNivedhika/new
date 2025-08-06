import React from 'react';

interface VideoProps {
  url: string;
  caption?: string;
  heading?: string;
}

const Video: React.FC<VideoProps> = ({ url, caption, heading }) => {
  const getVideoId = (videoUrl: string): string | null => {
    try {
      const parsedUrl = new URL(videoUrl);
      const hostname = parsedUrl.hostname;

      if (hostname.includes('youtube.com')) {
        return parsedUrl.searchParams.get('v');
      }

      if (hostname.includes('youtu.be')) {
        return parsedUrl.pathname.split('/')[1];
      }

      return null;
    } catch (error) {
      console.error('Invalid YouTube URL:', videoUrl);
      return null;
    }
  };

  const videoId = getVideoId(url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <section className="flex flex-col gap-6 my-12 w-full">
      {/* Left-aligned heading */}
      {heading && (
        <div className="w-full mb-6">
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-cyan-800 md:text-4xl sm:text-3xl text-left">
            {heading}
          </h2>
        </div>
      )}

      {/* Center-aligned video */}
      {embedUrl ? (
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title={caption ?? 'YouTube video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          />
        </div>
      ) : (
        <p className="text-red-600">⚠️ Video could not be loaded. Please check the URL format.</p>
      )}

      {/* Optional caption */}
      {caption && (
        <p className="mt-2 text-sm text-gray-600 text-center">{caption}</p>
      )}
    </section>
  );
};

export default Video;