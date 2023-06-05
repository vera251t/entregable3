import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)
  
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])

  return (
    <div className='app'>
      <img className='banner__img' src="../banner.png" alt="banner" />
      <h1 className='main__title'>Rick and Morty App</h1>
      <FormSearch setIdLocation={setIdLocation}/>
      {
        hasError
          ? <h2 className='title__error'>Hey! you must provide an id from 1 to 126 😭</h2>
          : (
            <>
              <LocationInfo 
                location={location}/>
              <div className='resident'>
                {
                  location?.residents.map(url => (
                    <ResidentCard 
                      url={url}
                      key={url}
                    />
                  ))
                }
              </div>
          </>
          )
      }
      <footer className='footer'>
        <p>All rights reserved ©2023</p>
      </footer>
    </div>
  )
}

export default App
