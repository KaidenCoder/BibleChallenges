import React from 'react'
import Footer from '../components/Footer'
import Reviews from './Reviews'

const Thirty = () => {
    return (
        <React.Fragment>
            <div style={{ background: "#6EBEF7", margin: '0', padding: '40px' }}>
                <h2 style={{ textAlign: "center", color: "rgba(0,0,0,0.8)" }}>The #30DaysBibleChallenge Honorable Mentions Wall</h2>
                <br />
                <p style={{ textAlign: "center", color: "rgba(0,0,0,0.8)" }}>The following names who have completed the challenge</p>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,0.8)", color: "rgba(0,0,0,0.7)" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">Khaidem Sandip</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Julia Kamei</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Prescilla Singha</div></div>
                </div>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,0.8)", color: "rgba(0,0,0,0.7)" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">Vision Hanse</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">MT Sungte</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Kago Kanya</div></div>
                </div>
            </div>
            <Reviews />

            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Completed the challenge, but don't see your name above?</p>
                <a href="https://forms.gle/AN3YvHmvekZ6CWfJ7">Submit a completion form!</a>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Thirty
