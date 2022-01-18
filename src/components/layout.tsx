import React from 'react';

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
function clickOutside(ref: any, onClickOutside: () => void) {
    React.useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        // Bind
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // dispose
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside]);
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const wrapperRef = React.createRef<HTMLDivElement>();
    clickOutside(wrapperRef, () => {
        if (open) setOpen(false);
    });

    return (
        <div className="w-full" ref={wrapperRef}>
            <nav className="bg-white shadow-lg">
                <div className="md:flex items-center justify-between py-4 px-8 md:px-12">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-light text-gray-800 md:text-3xl">
                            <a href="#">Oefentherapie Cesar Tiel</a>
                        </div>
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                        <a
                            href="#"
                            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            <aside
                className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 drop-shadow-lg ${
                    open ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col py-3 px-2">
                    <a
                        href="#"
                        className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                    >
                        Contact
                    </a>
                </div>
            </aside>

            <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
                {children}
            </div>
        </div>
    );
}
