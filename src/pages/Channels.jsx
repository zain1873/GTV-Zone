import React from 'react'
import ChannelsList from '../components/Channelslist/Channelslist'
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';

function Channels() {
  return (
    <div>
      <Navbar/>
      <ChannelsList/>
      <Footer/>
    </div>
  )
}

export default Channels
