import React, { useEffect, useState } from 'react'
import { Movie } from './Fetchlib'
import { Link } from 'react-router-dom'

function Animation() {

  const [animation, setAnimation] = useState<Movie[]>([])
  const api_key = "5be0d7d8221fec4c8f8f4fc05045eae0"

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=16&sort_by=popularity.desc`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setAnimation(data.results)
    })
  },[])

  console.log(animation)

  const truncate = (text:string, maxlength:number)=>{
    return text.length> maxlength ? `${text.slice(0, maxlength)}...` : text
  }

  const date = (date:string, maxlength:number) =>{
    return date.length>maxlength ? `${date.slice(0, maxlength)}` : date
  }


  return (
    <>

<section className="w-11/12 m-auto">
      <div>
        <h1 className="text-3xl font-light text-gray-100 my-3">Trending Animations</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
              {/* {error && <p className="text-red-500">{error}</p>} */}
              {animation.map(movie => (
                  <Link to={`view/${movie.id}`}>
                    <div key={movie.id} className="portait relative">
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt="Movie Poster"
                            className="w-full  object-cover rounded-lg"
                        />
                        <div className="bg-gray-100/40 backdrop-blur-lg w-10 flex justify-center rounded-sm font-bold text-gray-100 absolute top-0 right-0 m-2">
                            <p>HD</p>
                        </div>
                        <div className="mt-2 text-white">
                            <h3 className="text-sm sm:text-md font-semibold">{truncate(movie.title, 20)}</h3>
                            <p className="text-xs sm:text-sm text-gray-400">{date(movie.release_date, 4)}</p>
                        </div>
                    </div>
                  </Link>
              ))}
          </div>
      </div>
    </section>

      

    </>
  )
}

export default Animation