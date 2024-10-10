import { useState } from 'react';
import { gsap } from 'gsap';

export default function OfferCards() {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <OfferCard amount={5} code="5OFF" color="from-orange-400 to-pink-500" />
            <OfferCard amount={6} code="OFF6" color="from-cyan-500 to-indigo-600" />
        </div>
    );
}

function OfferCard({ amount, code, color }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            rotate: 3,
            ease: "bounce.out",
            duration: 0.4
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            rotate: 0,
            ease: "bounce.out",
            duration: 0.4
        });
    };

    return (
        <div
            className={`offer-card rounded-lg overflow-hidden shadow-lg bg-gradient-to-r ${color} transform transition-transform duration-300`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="p-6">
                <div className="text-5xl font-extrabold text-white mb-4">${amount} OFF</div>
            </div>
            <div className="bg-white p-4 flex justify-between items-center shadow-inner">
                <div className="text-xl font-semibold text-gray-700">{code}</div>
                <button
                    onClick={handleCopy}
                    className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
}
