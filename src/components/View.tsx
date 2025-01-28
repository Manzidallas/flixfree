import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Recommended from './Recommended'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { Movie } from './Fetchlib'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


function View() {

  const {id} = useParams()

  const api_key = "5be0d7d8221fec4c8f8f4fc05045eae0"

  const [preview, setPreview] = useState<Movie[]>([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos,images,credits`)
    .then(res=>{
      return res.json()
      console.log(res.json())
    })
    .then(data=>{
      setPreview(data)
    })
  },[id])

  // let n = 0

  const [watch, setWatch] = useState(false)

  const Watching = () =>{
    setWatch(true)
  }
  
  console.log(preview)

  return (
    <div className='bg-gradient-to-b from-gray-700 to-black w-full'>
      <div className='absolute z-10 w-full'>
        <Navbar/>
      </div>

      <section className='relative max-sm:h-[60vh] h-[100vh] bg-gradient-to-b from-gray-700 to-black rounded-b-3xl overflow-hidden'>
        <div className='absolute w-full h-full flex items-center justify-center text-white  bg-black/60'>
        {!watch ? <span className="material-symbols-rounded cursor-pointer p-10 text-[100px] animate-pulse font-ligther rounded-full bg- bg-red-500" onClick={Watching}> play_arrow </span> : <iframe className='w-11/12 max-sm:h-[250px] max-sm:mt-4 md:h-[780px] rounded-xl' src={`https://www.youtube.com/embed/${preview.videos.results[1].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        
        {/* {!watch ? (
  <span
    className="material-symbols-rounded cursor-pointer p-10 text-[100px] animate-pulse font-lighter rounded-full bg-red-500" onClick={Watching}> play_arrow</span>) : (
  <iframe
    className="w-11/12 h-[780px] rounded-xl"
    src={
      preview.videos.results.length > 1
        ? `https://www.youtube.com/embed/${preview.videos.results[preview.videos.results.length - 1 > 0 ? preview.videos.results.length -3 : preview.videos.length-2].key}`
        : "https://www.youtube.com/embed/default"
    }
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>)} */}
          
        </div>
        <div className='h-full'>
          {preview && preview.images?.backdrops?.length > 0 ? (
            
            <img src={`https://image.tmdb.org/t/p/original/${preview.images.backdrops[0]?.file_path}`} alt="" className='object-cover h-full w-full'/>) : (<img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="" className='object-cover w-full'/>)
      
          }
          {/* <video src=""></video> */}

        </div>
      </section>

        {/* <section className='flex p-3 w-11/12 gap-4 m-auto shadow-lg bg-gray-300/30 backdrop-blur-lg min-h-screen'>
            <div className='h-full w-1/4'>
                <img src="https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg" className='h-full' alt="" />
            </div>
            <div>

            </div>
        </section> */}

      <div className="w-11/12 m-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 mt-10">
        {/* <!-- Movie Poster --> */}
          
        <div className="md:w-[600px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500/${preview.poster_path}`}
            alt={preview.title}
            title={preview.title}
            className="w-full h-full object-cover"
          />
        </div>


        <div className=''>
          
          <h1 className="text-gray-100 text-5xl font-bold mb-3">{preview.original_title}</h1>
          <p className='text-gray-400'>{preview.release_date}</p>
          
          <div className='mt-[30px] flex flex-col md:flex-row'>
            
          <div>
            <div className="flex flex-wrap gap-2 mt-4">
              {
                preview.genres && preview.genres.map((genres) => (
                  <span key={genres.id} className="bg-gray-800 text-gray-200 rounded-full px-4 py-1 text-sm">
                    {genres.name}
                  </span>
                ))
              }
            </div>
            {/* {
              preview.credits && preview.credits.crew.map((company) => (

              )
            } */}

              <div className="flex items-center gap-6 mt-6 text-gray-400 text-sm">

                <div className="flex items-center gap-1">
                  <span className="bg-yellow-400 text-black px-2 rounded-md font-bold">IMDb</span>
                  <span>7.6 / 10</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="bg-red-400 px-2 rounded-md text-white">PG</span>
                  <span>13 (18+)</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="bg-green-500 px-2 rounded-md text-white">2</span>
                  <span>3h 12m</span>
                </div>

              </div>

              <p className="text-gray-300 md:w-[90%] leading-relaxed mt-10">
                {preview.overview}
              </p>

              <a href="#" className="text-blue-400 flex items-center gap-2 no-underline font-medium mt-6">READ MORE <span className="material-symbols-rounded"> arrow_drop_down </span></a>

              <div className="flex flex-wrap gap-4 mt-6">
                <button className="flex items-center gap-2 bg-red-600/60 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300">WATCH NOW<span className="inline-block w-4 h-4 bg-white rounded-full"></span></button>
                <button className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-lg text-gray-200 px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">TO WATCHLIST +</button>
              </div>
            </div>

            <div className="space-y-4 w-full text-gray-300 text-sm pt-6 md:pt-0 md:pl-6">
              {/* <!-- Director --> */}
              <div className='border-t p-5 bg-gray-200/20 rounded-md backdrop-blur-lg border-gray-700'>
                <h4 className="text-gray-400 uppercase text-sm mb-1">Director</h4>
                <p>James Cameron</p>
              </div>

              {/* <!-- Writers --> */}
              <div className='border-t p-5 bg-gray-200/20 rounded-md backdrop-blur-lg border-gray-700'>
                <h4 className="text-gray-400 uppercase text-sm mb-1">Writers</h4>
                <p>Rick Jaffa · Rick Jaffa · Amanda Silver</p>
              </div>

              {/* <!-- Stars --> */}
              <div className='border-t p-5 bg-gray-200/20 rounded-md backdrop-blur-lg border-gray-700'>
                <h4 className="text-gray-400 uppercase text-sm mb-1">Stars</h4>
                <p>Zoe Saldana · Rick Jaffa · Sigourney Weaver</p>
              </div>
            </div>




          </div>
            {/* <!-- Genre and Info Badges --> */}

        </div>

    </div>

    <div className='text-gray-100 mt-3 p-4 w-11/12 mx-auto overf'>
      <h2 className='text-md'>Top Billed Cast</h2>
      <div className='flex gap-3 overflow-x-scroll text-center my-2'>

        {preview.credits && preview.credits.cast.map((casts)=>(

            <div>
              <div className='w-[200px] overflow-hidden border border-gray-600 h-[200px] bg-slate-400 rounded-full my-2'>
                <img src={`https://image.tmdb.org/t/p/w500/${casts.profile_path}`} className='w-full rounded-full' alt="Actor's image" />
              </div>
              <p key={casts.credit_id} className='text-gray-300'>{casts.name}</p>
            </div>
          // )

          ))

        }
      </div>
    </div>

    <section className='w-11/12 px-4 mx-auto my-10 text-white'>
      <div className='flex gap-5 items-center'>
        <h2 className='text-2xl font-bold my-2'>Media</h2>
        <div>
          <button className='bg-gray-400/30 hover:bg-gray-400/50 rounded-full px-5 py-1 backdrop-blur-lg '>
            Video
          </button>
        </div>
      </div>

      <div className="w-full flex overflow-x-scroll space-x-3">
      {preview.images && preview.images.backdrops.map((image) => (
        <div className="flex-shrink-0 max-w-[800px] w-[800px] h-[450px] my-3 overflow-hidden rounded-md">
           <LazyLoadImage
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={preview.title}
                      className="w-full object-cover rounded-lg"
                      effect="blur" // Optional: Adds a blur effect while loading
                      height="100%"
                      width="100%"
                  />

        </div>
      ))}
</div>


    </section>
    <Recommended/>
    <Footer/>
    </div>
  )
}

export default View