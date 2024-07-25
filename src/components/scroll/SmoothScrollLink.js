'use client'
import Link from 'next/link';
import { useEffect } from 'react';

const SmoothScrollLink = ({ href, children, ...props }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'auto';
      }
    };
  }, []);

  const handleClick = (e) => {
    const targetId = href.split('#')[1];
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      <p>{children}</p>
    </Link>
  );
};

export default SmoothScrollLink;