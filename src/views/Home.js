import React from 'react'
import Header from '../components/Header'
import ControlledCarousel from '../components/ControlledCarousel'
import ItemCard from '../components/ItemCard'
import '../styles/index.css'
import { Col } from 'react-bootstrap'
export default function Home() {
  return (

    <div>
    <Header />
    <ControlledCarousel/>
    <Col className='d-flex'>
    <ItemCard className='card'/>
    <ItemCard className='card'/>
    <ItemCard className='card'/>
    <ItemCard className='card'/>
    </Col>
    </div>
  )
}
