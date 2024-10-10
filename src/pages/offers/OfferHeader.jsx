import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function OfferHeader() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 sm:px-6 lg:px-8 offer-header">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-white mb-6">Exclusive Offers</h1>
                <nav className="flex items-center justify-center" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <div>
                                <Link to="/" className="text-white flex gap-3 hover:text-gray-300">
                                    <HomeIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                    <span>Home</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="flex-shrink-0 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                                <span className="ml-4 text-lg font-medium text-white">Offers</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}
