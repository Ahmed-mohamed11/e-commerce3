import { useEffect } from 'react';
import { gsap } from 'gsap';
import OfferHeader from './OfferHeader';
import OfferCards from './OfferCards';

export default function Offers() {
  useEffect(() => {
    gsap.from('.offer-header', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.offer-card', { opacity: 0, stagger: 0.2, duration: 1.5 });
  }, []);

  return (
    <div className="min-h-screen mt-5 bg-gray-100">
      <OfferHeader />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <OfferCards />
      </div>
    </div>
  );
}
