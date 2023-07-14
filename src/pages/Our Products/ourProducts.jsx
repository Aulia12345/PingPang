// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Space } from 'antd';
import { rasa } from './constant';
import './ourProducts.css'

const OurProducts = () => {
    return (
        <div className='rasa'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                <h1 className='judulrasa'>Let's Meet Our Products</h1>
                <div className='line'></div>
            </div>

            <Row gutter={[0, 30]}>
                {rasa.map((item) => (
                    <Space key={item.key}>
                        <Col className='colrasa' xl={24} xs={24} md={24} >
                            <img className='rasapict' src={item.gambar} alt={item.rasa} />
                            <p className='rasatext'>{item.text}</p>
                        </Col>
                    </Space>
                ))}
            </Row>
        </div>
    );
}

export default OurProducts;
