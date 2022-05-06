import React from 'react';

interface ProjectProps {
  image: string;
  title: string;
  meta: string;
  url: string;
}

export default function ({ image, title, meta, url }: ProjectProps) {
  return (
    <a
      href={url}
      rel="nofollow"
      target="_blank"
      className="w-full rounded-xl hover:scale-105 transition-all">
      <article
        className="bg-cover w-full h-96 bg-center relative flex justify-center items-end rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-shade opacity-20 transition-all hover:opacity-95 bg-gradient-to-b hover:from-accent to-brand"></div>
        <div className="text-center text-white font-heading tracking-wider pb-10 relative">
          <p className="uppercase text-sm mb-2">{meta}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </article>
    </a>
  );
}
