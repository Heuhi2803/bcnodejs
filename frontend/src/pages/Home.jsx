import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Newletter } from '../components/Newletter'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newletter/>
            <Footer/>
        </div>
    )
}
export default Home;