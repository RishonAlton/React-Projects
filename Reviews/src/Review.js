import React from "react"
import reviews from "./data"
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from "react-icons/fa"


const Review = () => {

    const [index, setIndex] = React.useState(0)
    const {name, job, image, text} = reviews[index]
  
    const checkIndex = (number) => {
      if(number < 0) {
        return reviews.length - 1 
      }
      if(number > reviews.length - 1) {
        return 0
      }
      return number
    }
    
    const prevReview = () => {
      setIndex(index => {
        let newIndex = index - 1;
        return checkIndex(newIndex)
      })
    }
    
    const nextReview = () => {
      setIndex(index => {
        let newIndex = index + 1;
        return checkIndex(newIndex)
      })
    }
    
    const randomReview = () => {
      let randomIndex = Math.floor(Math.random() * reviews.length)
      if(randomIndex === index) {
        randomIndex = index + 1
      }
      setIndex(checkIndex(randomIndex))
    } 
    
    return (
      <article className="review-container">
        <div className="image-container">
          <img src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="name">{name}</h3> 
        <h5 className="job">{job}</h5>
        <p className="description">{text}</p>
        <div className="arrow-buttons">
          <button className="arrow" onClick={prevReview}><FaChevronLeft /></button>
          <button className="arrow" onClick={nextReview}><FaChevronRight /></button>
        </div>
        <button className="surprise-me" onClick={randomReview}>Surprise Me</button>
      </article>
    )

  }


  export default Review