"use client";

import React, { useEffect, useRef } from "react";

type AutoplayVideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

const AutoplayVideo = ({
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  children,
  ...props
}: AutoplayVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;

    if (!video) {
      return;
    }

    const attemptPlay = async () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      try {
        await video.play();
      } catch {
        // Safari can reject early autoplay attempts until enough data has loaded.
      }
    };

    void attemptPlay();
    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);

    return () => {
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
    };
  }, [props.src]);

  return (
    <video
      ref={ref}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="auto"
      {...props}
    >
      {children}
    </video>
  );
};

export default AutoplayVideo;
