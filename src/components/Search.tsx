import React, { useState } from 'react';
import { Movie } from './Fetchlib';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Movie[]>([]);
    const [error, setError] = useState(null);

    const truncate = (text:string, maxlength:number) =>{
        return text.length> maxlength ? `${text.slice(0, maxlength)}...` : text
      }
  
      const datinga = (datee:string, maxlength:number) =>{
        return datee.length> maxlength ? `${datee.slice(0, maxlength)}` : datee
      }

    const handleSubmit = async () => {
        if (!search) {
            alert('Please enter a movie name!');
            return;
        }

        const API_KEY = "5be0d7d8221fec4c8f8f4fc05045eae0";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setResults(data.results || []);
            setError(null);
        } catch (err) {
            setError('Unable to fetch search results. Please try again.');
            setResults([]);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />
            <div className="w-11/12 mx-auto text-white">
                {/* Responsive Search Bar */}
                <div className="relative flex z-10 items-center gap-3 sm:gap-0 sm:w-3/4 lg:w-1/2 mx-auto mt-5 bg-gray-100/10 backdrop-blur-lg rounded-full overflow-hidden">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Type a movie name..."
                        className="w-full px-4 py-2 sm:py-3 text-white bg-transparent focus:outline-none"
                    />
                    <div className='p-2'>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 w-full sm:w-auto bg-gray-200/30 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                        >
                            Search
                        </button>
                    </div>
                </div>
    
                {/* Search Result Header */}
                <div className="mt-6 text-center">
                    <p className="text-xl sm:text-2xl">
                        {search.length === 0 ? "Start Searching" : `Search Results for: "${search}"`}
                    </p>
                </div>
    
                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-2 py-5">
                    {["All Popular", "Action", "Animation", "Adventure", "Horror", "Documentary", "Romance", "Kids", "Comedy"].map((category, index) => (
                        <button
                            // onClick={}
                            key={index}
                            className={`px-4 py-2 rounded-full ${
                                category === "All Popular"
                                    ? "bg-white text-black"
                                    : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                            } font-medium focus:outline-none`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
    
                {/* Movie Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
                    {error && <p className="text-red-500">{error}</p>}
                    {results.map((movie) => (
                        <Link to={`view/${movie.id}`}>
                            <div key={movie.id} className="relative">
                                <div className='portait max-h-[400px] rounded-lg overflow-hidden '>
                                    <img
                                        src={movie.poster_path ? (`https://image.tmdb.org/t/p/w300/${movie.poster_path}`) : ('https://w0.peakpx.com/wallpaper/384/624/HD-wallpaper-netflix-logo-black-logo-netflix-pro-red-thumbnail.jpg')}
                                        alt="Movie Poster"
                                        className="w-full h-full object-cover "
                                    />

                                </div>
                                <div className="bg-gray-100/40 backdrop-blur-lg w-10 flex justify-center rounded-sm font-bold text-gray-100 absolute top-0 right-0 m-2">
                                    <p>HD</p>
                                </div>
                                <div className="mt-2 text-white">
                                    <h3 className="text-sm sm:text-md font-semibold">{truncate(movie.title, 20)}</h3>
                                    <p className="text-xs sm:text-sm text-gray-400">{datinga(movie.release_date, 4)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Search
