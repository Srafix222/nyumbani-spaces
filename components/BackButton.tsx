import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC<{ className?: string, fallbackUrl?: string }> = ({ className = '', fallbackUrl = '/' }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        // react-router v6 uses browser history. `window.history.state.idx` gives us the index in the history stack.
        // If it's 0 or null, it means this is the first page in the session history.
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            // Otherwise, navigate to the fallback URL. `replace: true` prevents the fallback from being added to history.
            navigate(fallbackUrl, { replace: true });
        }
    };

    return (
        <button
            onClick={handleBackClick}
            // A slightly more button-like appearance that still blends in
            className={`bg-green-100/70 hover:bg-green-200/90 backdrop-blur-sm text-brand-green font-semibold py-2 px-3 sm:px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center group ${className}`}
            aria-label="Go back"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="ml-2 hidden sm:inline">Back</span>
        </button>
    );
};

export default BackButton;