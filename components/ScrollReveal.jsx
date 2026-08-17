'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page's DOM render before observing
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.visible)');
      if (!('IntersectionObserver' in window) || !els.length) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        return;
      }
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        }),
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      els.forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // re-run on every route change

  return null;
}
