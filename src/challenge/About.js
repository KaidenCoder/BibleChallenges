import React from 'react'
import Footer from '../components/Footer'

const About = () => {
    return (
        <React.Fragment>

            <div style={{ justifyContent: "center", padding: "40px", background: 'rgba(0,0,255,0.4)', margin: '0', fontFamily: "monospace" }}>
                <h2>What's Bible Challenge?</h2>
                <p>The goal is to build a solid reading habit. In a way that's attainable and realistic.</p>

                <h3>How do you do this?</h3>
                <p>Commit to studying your Bible topic for at least 30 minutes a day for 30 consecutive days. Easy-peasy. To keep yourself accountable, and use your community for support, you will journal your daily progress on the Whatsapp group.</p>

                <h3>Why does this work?</h3>
                <p>Studies have shown that for your brain to form and recognize new habits, repetition is key! Usually it takes anywhere from 21-30 days. Of course the more days the better :) Not only will the habit of studying get easier the deeper into your 30 days you get, but also you will reap the rewards of how much progress you make in your 30 days. You can really get a lot done in 30 minutes a day for 30 days.</p>
            </div>
            <div style={{ padding: '30px' }}>
                <h2 style={{ textAlign: "center", fontFamily: "monospace", padding: '30px' }}>💯Challenge Guidelines✅</h2>
                <ul >
                    <li>Study or Medidate the topic of your Bible for at least 30 minutes everyday for 30 days</li>
                    <li>Share daily updates about your challenge in the 30 Days Bible Challenge Whatsapp group noting which day of the challenge you are on. We want to hear how it's going for you! </li>
                    <li>Skipping: One skip day permitted per two weeks. No skipping two days in a row. Skip days don't count towards your 30 days. If you end up missing more than 2 days in a row, make the pledge again and start over. It's an honor code system. The only real person you would be cheating is yourself.</li>
                    <li>Let us know when you successfully finished the challenge <a href="https://forms.gle/AN3YvHmvekZ6CWfJ7">via this completion form here!</a> So your name will go up on the Honorable Mentions Wall!</li>

                </ul>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About
