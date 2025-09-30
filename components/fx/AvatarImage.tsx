"use client";
import Image from 'next/image';
import { useState } from 'react';

interface AvatarImageProps {
  src: string;
  alt: string;
  name: string;
  width: number;
  height: number;
  className?: string;
  quality?: number;
  sizes?: string;
}

export default function AvatarImage({ 
  src, 
  alt, 
  name, 
  width, 
  height, 
  className = '', 
  quality = 90,
  sizes 
}: AvatarImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Generate initials from name
  const getInitials = (fullName: string) => {
    const names = fullName.split(' ');
    if (names.length >= 2) {
      return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
    }
    return fullName.charAt(0).toUpperCase();
  };

  // Generate a consistent color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-purple-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  if (imageError || !src) {
    // Fallback to initials avatar
    return (
      <div 
        className={`${className} ${getAvatarColor(name)} flex items-center justify-center text-white font-bold`}
        style={{ width, height, fontSize: width * 0.4 }}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={quality}
      sizes={sizes}
      onError={() => setImageError(true)}
      onLoad={() => setImageError(false)}
    />
  );
}