import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import Animation from '../components/Animation'
import Sooon from '../components/Sooon'
import Footer from '../components/Footer'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


function Homepage() {
  // const bgrr = "background: linear-gradient(to bottom, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 100%), url('https://4kwallpapers.com/images/wallpapers/call-of-duty-modern-3840x2160-12647.jpeg')"

    const [isloading, setiIsloading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setiIsloading(false)
        },3000)
    },[])
  return (
    <>
    <div>
      <div className="absolute top-0 w-full opacity-100 z-10 clear">
        <Navbar />
      </div>
      

      <section className="h-[100vh] w-full overflow-hidden relative" id="bgmovie">
        <div className="bg-black/50 h-full">
          <div className="opacity-50 w-full h-full ">
            <LazyLoadImage
                className="opacity-50 object-cover w-full h-full"
                effect="blur"
                height="100%"
                width="100%"
                src="https://s1.thcdn.com/design-assets/products/13508485/13508485/No%20way%20home%20banner.jpg"
                alt="Venom: The Last Dance movie banner"
              />
            
          </div>
        </div>

        <div className='w-11/12 mx-auto'>
        {!isloading ? (
            <div className="sm:w-full lg:w-1/2 text-white max-sm:pb-10 top-0 absolute flex items-center h-full">
                <div>
                    <h1 className="text-6xl font-bold">Venom: The Last Dance</h1>
                    <p className='md:mt-4 md:w-[70%]'>
                    Written and directed by Kelly Marcel, “Venom: The Last Dance” follows
                    photojournalist Eddie Brock and his symbiote companion Venom (both
                    played by Tom Hardy) trying to avoid the military and an alien monster,
                    as the pair make their way from California to New York City for a
                    much-needed vacation.
                    </p>

                    <div id="buttons" className="flex items-center gap-3 mt-5">
                        <button className="p-3 bg-white text-black shadow-sm rounded-full font-bold  flex items-center"aria-label="Watch now"><span className="material-symbols-rounded mr-2">play_arrow</span> Watch now</button>
                        <button className="p-3 bg-gray-100/30 backdrop-blur text-white shadow-sm rounded-full font-bold  flex justify-center items-center gap-2" aria-label="View details">Details<span className="material-symbols-rounded font-light text-sm">arrow_forward_ios</span></button>
                    </div>
                </div>
            </div>

        ): (
            <div className="w-1/2 text-white top-0 absolute flex items-center h-full">
                <div className='w-full'>

                    <div className='w-[510px]'>
                        <Skeleton className='p-4 mb-4'/>
                    </div>
                    <Skeleton count={3} className='p-1 mt-2'/>

                    <div id="buttons" className="flex items-center gap-3 mt-5">
                        <button className="p-3 bg-white text-black shadow-sm rounded-full font-bold  flex items-center"aria-label="Watch now"><span className="material-symbols-rounded mr-2">play_arrow</span> Watch now</button>
                        <button className="p-3 bg-gray-100/30 backdrop-blur text-white shadow-sm rounded-full font-bold  flex justify-center items-center gap-2" aria-label="View details">Details<span className="material-symbols-rounded font-light text-sm">arrow_forward_ios</span></button>
                    </div>
                </div>
            </div>
        )}
        </div>
      </section>

      <div className='absolute top-1/2 mt-[180px] w-full'>
        <Trending/>
        
        <div className="mt-12">
          <Animation/>
        </div>

        <div className='mt-20 mx-10 rounded-3xl overflow-hidden object-cover h-[400px] card relative'>
          <img src="https://cdn.mos.cms.futurecdn.net/j9cNFVPqdsiSDVTW82iK3C.jpg" alt="Banner image for movie" />
          <div className='card absolute text-white h-full flex items-center justify-center left-0 z-10 top-0'>
            <div className='flex gap-5 px-10 items-center'>

              <div className='portrait'>
                <img className='rounded-lg' src="https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg" alt="" />
              </div>

                <div className=' text-white p-4 rounded-lg'>
                  <p className='text-yellow-400 font-semibold'>7.5 IMDb</p>
                  <h2 className='text-2xl font-bold mt-2'>Spiderman 3</h2>
                  <p className='mt-2 text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit amet beatae et? Eos minima alias labore voluptatibus veniam quaerat eius placeat ea, consequatur laboriosam libero? Aperiam rerum aliquid suscipit cum.</p>
                  <button className='mt-4 bg-gray-50/10 backdrop-blur-lg hover:bg-blue-700 text-white rounded-full p-3 transition duration-300'>Buy Now</button>
                </div>
            </div>

          </div>
        </div>

        <div className="">
          <Sooon/>
        </div>
        <Footer/>
      </div>
    </div>
    
    </>
  )
}

export default Homepage
