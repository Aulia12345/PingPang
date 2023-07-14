// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Col, Row } from 'antd'
import { visimisi } from './constant';
import './profilCompany.css'

const ProfilCompany = () => {
    return (
        <div className='BODY'>
            <div className='vismis'>
                <h2 className='judulvismis'><b>Visi Misi PingPang</b></h2>
                <div className='line'></div>
                <div>
                    <Row className='cardvismis' justify={'center'} >
                        {visimisi.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <Col span={10} xs={24} sm={24} md={24} lg={8} xl={8}>
                                <Card className='card' key={item.key}>
                                    <p className='judul5'>{item.title}</p>
                                    <p className='text'>{item.text}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ProfilCompany;
