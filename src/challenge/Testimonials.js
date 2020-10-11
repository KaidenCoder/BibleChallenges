import React from 'react'
import Footer from '../components/Footer'

const Testimonials = () => {
    return (
        <>
            <div style={{ background: "rgba(255,0,0,0.15)", margin: "0", padding: '40px' }}>
                <h2 style={{ textAlign: "center", paddingBottom: '20px' }}>🙌 Testimonials ❤️</h2>
                <div style={{ background: "rgba(255,255,255,0.8)", padding: '20px', fontFamily: '-moz-initial' }}>
                    <h3 style={{ textAlign: 'center' }}>I loved the challenge specially when I see the members actively posting about their day to day Bible activities. It was encouraging and also motivated me to read the Bible more. Overall, an experience I would love to share with everyone.</h3>
                    <br></br>
                    <p className="text-muted" style={{ textAlign: 'right' }}><i>Khaidem Sandip Singha, 11th October, 2020</i></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Testimonials
