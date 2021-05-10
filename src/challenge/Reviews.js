import React, { useState } from 'react'
import './rev.css'
import secreview from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Reviews = () => {
    const [index, setIndex] = useState(7)

    const { name, text, date } = secreview[index]

    const checkNumber = (number) => {
        if (number > secreview.length - 1) {
            return 0
        }
        if (number < 0) {
            return secreview.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIdx = index + 1
            return checkNumber(newIdx)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIdx = index - 1
            return checkNumber(newIdx)
        })
    }

    const randomPerson = () => {
        let rand = Math.floor(Math.random() * secreview.length)
        if (rand === index) {
            rand = index + 1
        }
        setIndex(checkNumber(rand))
    }

    return (
        <section className="container">
            <div className="title">
                <h2 >Reviews</h2>
                <div className="underline" style={{ marginBottom: 20 }}></div>

                <article className="review">
                    <h5 className="author">
                        {name}
                    </h5>
                    <p className="job">{date}</p>
                    <p className="info"><FaQuoteRight /> {text}</p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight />
                        </button>
                    </div>
                    <button className="random-btn" onClick={randomPerson}>
                        Surprise me
            </button>

                </article>
            </div>
        </section>

    )
}

export default Reviews
