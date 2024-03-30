import React, { useContext } from 'react'
import { context } from './context/context'
import { NavLink } from 'react-router-dom'

const Movies = () => {

  const {movie} = useContext(context)
  return (
   <>
  <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movie?.map((movie, index) => {
         const {imdbID,Title,Poster}= movie
          return (
            <NavLink key={index} to={`movie/${imdbID}`} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="relative">
              <img src={Poster} alt={Title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
                <h2 className="text-white text-center">{Title}</h2>
              </div>
            </div>
          </NavLink>
          )
          
        }
        )}
      </div>
    </div>

    
    </>
  )
}

export default Movies