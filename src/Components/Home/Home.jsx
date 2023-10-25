import React, { useEffect }  from 'react'
import './Home.css'
import video1 from'../../Assets/video-1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram} from 'react-icons/ai'
import{RiTwitterXFill} from 'react-icons/ri'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  } , [])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packeges
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>


        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destnationInput">
            <label htmlFor="city">
              Search Your destination:
            </label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here.......' />
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">
              Search Your destination:
            </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className='lable_Total flex'>
            <label htmlFor='price'>Max Price: </label>
            <h3 className='total'>$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000}/>
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className='icon'/>
            <span>More Filters</span>
          </div>

        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <RiTwitterXFill className='icon'/>
          </div>
          <div className="leftIcons">
            <BsListUl className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home