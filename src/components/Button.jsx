// import React from 'react'

export default function Button({ children }) {
    return (
        <div>
            <button className="px-5 py-2 text-white bg-sky-500 rounded-lg hover:opacity-75 transition-all duration-300">
                {children}
            </button>

        </div>
    )
}
