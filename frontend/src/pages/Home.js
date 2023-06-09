import React, { useEffect, useState } from 'react';
import earthVid from '../assets/home-bg-video.mp4';

function Home() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setIsTextVisible(true);
  }, []);

  return (
    <div className="relative">
      <video
        src={earthVid}
        alt="home bg logo"
        className="w-screen h-screen object-cover"
        autoPlay
        loop
        muted
      />
      {isTextVisible && (
        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center z-10">
          <h2 className="flex font-thin font-mono text-8xl text-white">
            <span className="typing-animation">Welcome</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Home;
