import React from 'react'
import Footer from '../components/Footer'
import Reviews from './Reviews'

const Thirty = () => {
    return (
        <React.Fragment>

            <div style={{ background: "rgba(110, 190, 247, 1)", margin: '0', padding: '40px' }}>
                <h2 style={{ textAlign: "center", color: "rgba(0,0,0,0.8)" }}>Honourable Mentions Wall</h2>
                <br />
                <p style={{ textAlign: "center", color: "rgba(0,0,0,1)" }}>The following names who have completed the challenge</p>

                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)", padding: "40px 0px 0 0", borderRadius: "1px" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">Vision Hanse</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Julia Kamei</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Kago Kanya</div></div>
                </div>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">G Sarah Rongmei</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Sohiam</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Jessica Gangmei</div></div>
                </div>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">Khaidem Sandip</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">MT Sungte</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none ">Prescilla Singha</div></div>
                </div>
                <div className="row mx-md-n3" style={{ background: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)", padding: "0 0 40px 0", borderRadius: "1px" }}>
                    <div className="col px-md-5"><div className="p-2 border-none ">G. Elizabeth Rongmei</div></div>
                    <div className="col px-md-5"><div className="p-2 border-none "></div></div>
                    <div className="col px-md-5"><div className="p-2 border-none "></div></div>
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
