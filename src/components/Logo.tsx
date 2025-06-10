import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#7C3AED', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#A855F7', stopOpacity:1}} />
          </linearGradient>
        </defs>
        
        {/* M shape */}
        <path d="M4 8 L4 24 L6 24 L6 12 L10 20 L12 20 L16 12 L16 24 L18 24 L18 8 L15 8 L11 18 L7 8 Z" fill="url(#logoGradient)"/>
        
        {/* AI letters integrated */}
        <path d="M22 8 L20 8 L20 24 L22 24 L22 18 L26 18 L26 24 L28 24 L28 8 L26 8 L26 16 L22 16 Z" fill="url(#logoGradient)"/>
        <circle cx="24" cy="12" r="1" fill="url(#logoGradient)"/>
      </svg>
    </div>
  );
}