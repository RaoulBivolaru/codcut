import Image from 'components/Image';
import React from 'react';

export default function () {
  return (
    <section
      className="h-screen flex items-center justify-between font-heading p-10 relative"
      id="home">
      <div className="absolute inset-0">
        <Image
          src="https://cdn.99images.com/photos/wallpapers/animals-birds/cat%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-ubvlc.jpg"
          alt="profile"
          isFull
        />
      </div>
      <div className="flex w-full flex-col relative">
        <span className="text-white uppercase tracking-widest font-light text-xl mb-5 opacity-80">
          Fullstack digital freelancer
        </span>
        <h1 className="text-white font-extrabold text-5xl md:text-7xl">
          Hello, I'm <span className="text-accent">Raoul</span>
          <span className="text-yellow">.</span>
          <br />
          <span className="mt-2 block">
            Let's digitise your
            <br /> business!
          </span>
        </h1>
      </div>
    </section>
  );
}
