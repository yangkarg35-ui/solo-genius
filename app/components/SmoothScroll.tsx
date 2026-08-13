'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // 0.1 ကနေ 0.05 ထိ လျှော့ချလိုက်ဖြင့် Bang & Olufsen လိုမျိုး လေးလံပြီး ဇိမ်ခံဆန်တဲ့ smooth scroll ရပါမယ်
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}