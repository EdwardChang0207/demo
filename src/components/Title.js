import React from 'react'
import {Row, Col, CloseButton} from 'react-bootstrap'
import './Title.css'

function Title() {
  return (
    <Row id='title'>
      <Col >
        <CloseButton />
      </Col>
      <Col ><strong>客服留言</strong></Col>
      <Col />
    </Row>
  )
}

export default Title
