import React, { useEffect } from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import{data} from '../../Data/data'
const Main = () => {
    useEffect(()=>{
      Aos.init({duration:2000})
    } , [])
  return (
    <section className='main container section'style={{marginBottom:'1rem'}}>

      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">
          Most Visited deatinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          data.map((item , index) =>{
            return(
              <div key={index} data-aos="fade-up" className="singleDestination">

                <div className="imgDiv">
                  <img src={item.imgscr} alt={item.title}/>
                </div>

                <div className="cardInfo">
                  <h4 className="Title">{item.title} </h4>
                  <span className="Continet flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{item.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{item.grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{item.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{item.discription}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className='icon'/>
                  </button>


                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main