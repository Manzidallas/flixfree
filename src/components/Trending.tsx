import{useState, useEffect } from 'react'
import { Movie } from './Fetchlib';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// import Fetchlib;
function Trending() {


  const [popularmov, setPopularmov] = useState<Movie[]>([]);
  const [loading, setIsloading] = useState(true)
  const api_key = "5be0d7d8221fec4c8f8f4fc05045eae0";

  console.log(popularmov)
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      // console.log(data)
      setPopularmov(data.results)
    })
    setTimeout(()=>{
      setIsloading(false)
    },3000)
      // setIsloading(false)
  },[])


    const truncate = (text:string, maxlength:number) =>{
      return text.length> maxlength ? `${text.slice(0, maxlength)}...` : text
    }

    const datinga = (datee:string, maxlength:number) =>{
      return datee.length> maxlength ? `${datee.slice(0, maxlength)}` : datee
    }
  
  return (
    // backdrop_sizes": [
    //   "w300",
    //   "w780",
    //   "w1280",
    //   "original"
    // ],
    
    <section className="w-11/12 m-auto">
      {loading ? (
        <div>
        <h1 className="text-3xl w-[340px] font-light text-gray-100 my-3"><Skeleton/></h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
          {Array.from({length:12}).map((index)=>(  
                // <Link to={`view/${movie.id}`}>
                  <div key={index} className="portait relative">
                      <Skeleton className='w-full h-[350px] object-cover rounded-lg'/>
                      {/* <img
                          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                          alt="Movie Poster"
                          className="w-full  object-cover rounded-lg"
                      /> */}
                      <div className="bg-gray-100/40 backdrop-blur-lg w-10 flex justify-center rounded-sm font-bold text-gray-100 absolute top-0 right-0 m-2">
                          <p>HD</p>
                      </div>
                      <div className="mt-3 text-white w-40">
                        <Skeleton count={2} className='w-[10px] p-1 mb-2'/>
                          {/* <h3 className="text-sm sm:text-md font-semibold">{truncate(movie.title, 20)}</h3>
                          <p className="text-xs sm:text-sm text-gray-400">{datinga(movie.release_date, 4)}</p> */}
                      </div>
                  </div>
                // </Link>
              ))
            }
        </div>  
      </div>
        
      ) : 
      

        <div>
        <h1 className="text-3xl font-light text-gray-100 my-3">Top Trending Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
            
          {/* {error && <p className="text-red-500">{error}</p>} */}
          {popularmov.map(movie => (
            
            <Link to={`view/${movie.id}`}>
              <div key={movie.id} className="portait relative">

                  <LazyLoadImage
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt="Movie Poster"
                      className="w-full object-cover rounded-lg"
                      effect="blur" // Optional: Adds a blur effect while loading
                      height="400px"
                      width="100%"
                  />
                  <div className="bg-gray-100/40 backdrop-blur-lg w-10 flex justify-center rounded-sm font-bold text-gray-100 absolute top-0 right-0 m-2">
                    <p>HD</p>
                  </div>
                <div className="mt-2 text-white">
                    <h3 className="text-sm sm:text-md font-semibold">{truncate(movie.title, 20)}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{datinga(movie.release_date, 4)}</p>
                </div>
            </div>
            </Link>
          ))
            }
        </div>
        </div>
      }
      
    </section>

  )
}

export default Trending