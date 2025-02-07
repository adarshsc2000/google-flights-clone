const SearchButton = () => {
    return (
        <div className="w-full absolute left-0 text-center -bottom-6">
            <div className="border-1 border-transparent rounded-3xl inline-block mb-1.5">
                <button className="custom-search-shadow pr-4 pl-3 py-0 border-0 rounded-3xl h-10 m-0 relative
                text-sm tracking-[0.01] font-medium custom-bg-color-search-button search-button-transition
                inline-flex items-center justify-center min-w-16 align-middle overflow-visible hover:cursor-pointer
                "
                aria-label="Search for flights">
                    <div></div>
                    <span className="w-6 h-6 text-lg mr-2 inline-block relative align-top text-white font-medium">
                        {/* Search Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" fill="currentColor" className="shrink-0">
                            <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
                        </svg>
                    </span>
                    <span className="relative text-white text-sm font-medium">Explore</span>
                </button>
            </div>
        </div>
    );
}

export default SearchButton;