import React, { useEffect, useState } from 'react'
import Follower from './Follower'
import { useFetch } from './useFetch'


const App = () => {

  const { loading, data } = useFetch()
  const [followers, setFollowers] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    if(loading) return
    setFollowers(data[page])
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }

  const previousPage = () => {
    setPage(oldPage => {
      let previousPage = oldPage - 1
      if(previousPage < 0) {
        previousPage = data.length - 1
      }
      return previousPage
    })
  }

  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1
      if(nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  
  return (
    <>
      <h1 className="title">
        {loading ? "Loading..." : "Pagination"}
      </h1>
      <div className="underline"></div>
      <main className="main-container">
        {
            followers.map(item => {
              return <Follower key={item.id} {...item} />
            })
        }
      </main>
      {
        (!loading) && (
          <div className="buttons-container">
            <button className="change-page previous" onClick={previousPage}>Previous</button>
            {
              data.map((_, index) => {
                return (
                  <button 
                    key={index} 
                    className={(index === page) ? "page-buttons active-button" : "page-buttons"} 
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                )
              })
            }
            <button className="change-page next" onClick={nextPage}>Next</button>
          </div>
        )
      }
    </>
  )
  
}


export default App

