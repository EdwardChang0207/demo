import React from 'react'
import {Row, Form, Button} from 'react-bootstrap'
import './MainArea.css'
import Logo from '../imgs/logo.png'

function MainArea() {
  return (
    <>
        <Row id='questionType' className='px-2 m-0'>
            <h5><strong>問題類別:</strong></h5>
        </Row>
        <Row id='dropdowns' className='px-2 pb-3 m-0'>
            <Form>
                <Form.Select size='md'>
                    <option>請選擇問題類別</option>
                    <option>商店相關</option>
                    <option>option2</option>
                    <option>option3</option>
                </Form.Select>
                <br />
                <Form.Select size='md'>
                    <option>請選擇問題內容</option>
                    <option>商店付款及配送疑問</option>
                    <option>option2</option>
                    <option>option3</option>
                </Form.Select>
            </Form>
        </Row>
        <Row id='questionText' className='px-2 m-0'>
            <p className='pt-0 pb-2 m-0'><strong>問題內容:</strong></p>
        </Row>
        <Row id='qestion-text' className='px-2 pb-3 m-0'>
            <Form>
                <Form.Control id='question-content' as="textarea" placeholder='請填寫問題內容(限填150字)' rows={7} />
            </Form>
        </Row>
        <Row className='px-3 m-0'>
            <Button style={{backgroundColor:'#FCBA40', border:'none', color:'black', fontSize:'3vmin'}}>送出</Button>
        </Row>
        <Row className='px-3 m-0 py-1' style={{fontSize:'2vmin', color:'gray'}}>
            客服回復的時間依商店公告服務時間為主，如遇例假日或國定假日，客服將於上班日盡快為您服務。
        </Row>
        <Row id='logo-container' className='px-0 py-3 m-0'>
            <img id='logo' className='p-0 m-0' src={Logo} />
        </Row>
    </>
  )
}

export default MainArea
