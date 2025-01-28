import React, { useEffect, useState } from 'react';
import { Movie } from './Fetchlib';
import { Link } from 'react-router-dom';

function Sooon() {


  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const api_key = "5be0d7d8221fec4c8f8f4fc05045eae0"

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=release_date.asc&release_date.gte=2024-12-14&release_date.lte=2025-12-31`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setUpcoming(data.results)
    })
  },[])

  
  const truncate = (text:string, maxlength:number) =>{
    return text.length> maxlength ? `${text.slice(0, maxlength)}...` : text
  }

  const datinga = (datee:string, maxlength:number) =>{
    return datee.length> maxlength ? `${datee.slice(0, maxlength)}` : datee
  }


  // console.log(upcoming)

  return (
    <section className="w-11/12 m-auto">
      <div>
        <h1 className="text-3xl font-light text-gray-100 my-3">Coming Soon</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
              {/* {error && <p className="text-red-500">{error}</p>} */}
              {upcoming.map(movie => (
                  <Link to={`view/${movie.id}`}>
                    <div key={movie.id} className="portait relative overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt="Movie Poster"
                            className="w-full object-cover rounded-lg"
                        />
                        <div className="bg-gray-100/50 backdrop-blur-lg w-30 p-1 flex justify-center rounded-lg font-bold text-gray-100 absolute top-0 right-0 m-2">
                            <p className='font-semibold text-sm'>Coming Soon</p>
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
    </section>
  );
}

export default Sooon;
