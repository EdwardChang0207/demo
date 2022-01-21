import React from 'react'
import { useState,useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import './Content.css'
import MainArea from './MainArea'

function Content() {
    const [process ,setProcess] = useState('cs') //cs=客服 qa=問答
    const colors = ['black', 'white', 'gray', '#FEE5B8']
    const [section1 ,setSection1] = useState([colors[0], colors[1]])
    const [section2 ,setSection2] = useState([colors[2], colors[3]])

    useEffect(()=>{
        if (process === 'cs' && section1[0] === colors[2]){
            setSection1([colors[0], colors[1]])
            setSection2([colors[2], colors[3]])            
        }else if(process === 'qa' && section1[0] === colors[0]){
            setSection2([colors[0], colors[1]])
            setSection1([colors[2], colors[3]])  
        }
    },[process])

    const setToCS = ()=>{
        setProcess('cs')
    }

    const setToQA = ()=>{
        setProcess('qa')
    }
    
  return (
    <Row id='content-container'>
      <Row id='process-container' className='p-0 m-0'>
          <Col className='content-center p-0' style={{backgroundColor: section1[0]}}></Col>
          <Col className='content-center p-0' style={{backgroundColor: section2[0]}}></Col>
      </Row>
      <Row id='section-container' className='px-0 m-0'>
          <Col className='content-center px-0'><button className='section-btn' style={{backgroundColor: section1[1]}} onClick={setToCS}><strong>客服留言</strong></button></Col>
          <Col className='content-center px-0'><button className='section-btn' style={{backgroundColor: section2[1]}} onClick={setToQA}><strong>問答紀錄</strong></button></Col>
      </Row>
    <MainArea />

    </Row>
  )
}

export default Content
