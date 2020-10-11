import React from 'react'
import Footer from '../components/Footer'
import Testimonials from './Testimonials'

const Thirty = () => {
    return (
        <React.Fragment>
            <div style={{ background: "rgba(0,0,255,0.4)", margin: '0', padding: '40px' }}>
                <h2 style={{ textAlign: "center" }}>🌟The #30DaysBibleChallenge Honorable Mentions Wall🌟</h2>
                <br />
                <p style={{ textAlign: "center" }}>The following names who have completed the challenge🌟</p>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">Khaidem Sandip</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none "></div></div>

                </div>
            </div>

            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Completed the challenge, but don't see your name above?</p>
                <a href="https://forms.gle/AN3YvHmvekZ6CWfJ7">Submit a completion form!</a>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Thirty
