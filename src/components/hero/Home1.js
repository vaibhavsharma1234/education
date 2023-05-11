import React from 'react'
import './Home.css'

export default function Home1() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h1>
              Hi, I'm<span>Vaibhav Sharma</span>
            </h1>
            <h2>'Solve the Mystery of Chemistry with me'</h2>
          </div>
          <div className="right">
            <div className="right_img">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
