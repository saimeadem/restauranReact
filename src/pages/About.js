import React from 'react'
import BannerImage from '../assest/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p> Ürünlerimizin hiçbirinde Domuz eti ve katkısı bulunmamaktadır.Tarifler tarafımızca tescillidir telif hakkı içerir</p>
        </div>
        
    </div>
  )
}

export default About