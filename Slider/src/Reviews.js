import React, {useState, useEffect} from "react"
import {FaPeopleCarry, FaQuoteRight} from "react-icons/fa"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"


const Reviews = ({people}) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1
        if(index < 0) {
            setIndex(lastIndex)
        }
        if(index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className="reviews-container">
            {
                people.map((person, personIndex) => {
                    const {id, image, name, job, text} = person
                    let position = "next"
                    if(personIndex === index) {
                        position = "active"
                    }
                    if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = "last"
                    }
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-image" />
                            <h4>{name}</h4>
                            <p className="title">{job}</p>
                            <p className="text">{text}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    )
                })
            }
            <button 
                className="previous-button"
                onClick={() => setIndex(index - 1)}
            >
                <FiChevronLeft />
            </button>
            <button 
                className="next-button"
                onClick={() => setIndex(index + 1)}
            >
                <FiChevronRight />
            </button>
        </section>
    )

}


export default Reviews
