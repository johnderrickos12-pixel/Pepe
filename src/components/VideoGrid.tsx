import React from 'react';
import { VideoCard } from './VideoCard';

const videos = [
  // Mock data - replace with actual data from an API
  {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '12:34',
    title: 'Hot College Girl Anal Cream Pie',
    views: '1.2M',
    rating: '92%',
    author: 'Some Random Dude',
    isHD: true,
    isPremium: false,
  },
  {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '08:15',
    title: 'PAWG gets her ass filled with cum',
    views: '890K',
    rating: '95%',
    author: 'Another Dude',
    isHD: true,
    isPremium: true,
  },
    {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '25:01',
    title: 'Big Tit MILF gets fucked by the pool boy',
    views: '2.5M',
    rating: '98%',
    author: 'MILF Lover',
    isHD: true,
    isPremium: false,
  },
  {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '15:42',
    title: 'Cute Teen gets a facial',
    views: '980K',
    rating: '89%',
    author: 'Teen Dreams',
    isHD: false,
    isPremium: false,
  },
    {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '18:59',
    title: 'Horny Stepsis stuck in the washing machine',
    views: '3.1M',
    rating: '94%',
    author: 'Family Strokes',
    isHD: true,
    isPremium: true,
  },
    {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '11:11',
    title: 'Public agent bangs a redhead',
    views: '750K',
    rating: '91%',
    author: 'Public Fun',
    isHD: true,
    isPremium: false,
  },
    {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '14:08',
    title: 'Japanese office lady gets a surprise',
    views: '1.8M',
    rating: '96%',
    author: 'JAV Lover',
    isHD: true,
    isPremium: false,
  },
    {
    thumbnail: 'https://via.placeholder.com/320x180/000000/FFFFFF?text=Video+Thumbnail',
    duration: '09:30',
    title: 'Ebony Queen takes a huge BBC',
    views: '2.2M',
    rating: '97%',
    author: 'BBC World',
    isHD: true,
    isPremium: false,
  },
];

export const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};
