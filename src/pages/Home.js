import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assest/banner.jpg';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }} >
      <div className='headerContainer'>
        <h1>Burger 26</h1>
        <p>Lezzet Ödüllü Hamburger<br />Üstün lezzet ödüllü sosları</p>
        <Link to="/menu"> <button>Menu</button> </Link>

      </div>
    </div>
  )
}

export default Home