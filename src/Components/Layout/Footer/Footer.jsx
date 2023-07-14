// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    PhoneOutlined,
    MailOutlined,
    FacebookOutlined,
    InstagramOutlined
} from "@ant-design/icons";
import {
    Button,
    Space,
    Col,
    Row
} from "antd";
import { logo } from '../../../assets/gambar';
import tiktok from '../../../assets/tiktok.png';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <section id="contact" className="CONTACT">
                <Row justify="center" align="middle">
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="cont-container"
                    >
                        <Space direction="horizontal">
                            <Row gutter={[12, 32]} justify="center">
                                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                    <Space direction="vertical" className="container-col-contact">
                                        <img src={logo} alt="logo" className="contact-logo" />
                                        <span className="text-experience">
                                            Jl. Jenggolo I Blok. B, No. 11, Pucang, Kec. Sidoarjo, <br /> Kabupaten Sidoarjo, Jawa Timur
                                        </span>
                                        <span className="cont-us">Contact Us</span>
                                        <div className="divider-cont-us" />
                                        <Row justify="start" align="middle">
                                            <div className="icon-container">
                                                <PhoneOutlined
                                                    style={{
                                                        fontSize: "25px",
                                                        transform: "rotate(90deg)",
                                                        color: '#eb620f'
                                                    }}
                                                />
                                            </div>
                                            <span className="phone-mail">+6285336212930</span>
                                        </Row>
                                        <Row justify="start" align="middle">
                                            <div className="icon-container">
                                                <MailOutlined
                                                    style={{
                                                        fontSize: "25px",
                                                        color: '#eb620f'
                                                    }}
                                                />
                                            </div>
                                            <span className="phone-mail">pingpangnetwork@gmail.com</span>
                                        </Row>
                                    </Space>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                    <Space direction="vertical" className="container-col-contact">
                                        <Row gutter={12}>

                                            <span className='textfollow'>Yuk Follow akun media sosial kami untuk mendapatkan informasi terbaru dan menarik</span>
                                            <Col span={16}>
                                                <ul style={{ paddingLeft: "0px" }}>
                                                    <li className="list-btn-contact">
                                                        <Space
                                                            wrap
                                                            direction="horizontal"
                                                            className="container-btn-social"
                                                        >


                                                            <Button
                                                                className="btn-social"
                                                                icon={
                                                                    <InstagramOutlined className="icon-social" />
                                                                }
                                                                href='https://www.instagram.com/pingpang.id'
                                                                rel='noopener noreferrer'
                                                                target='_blank'
                                                            />
                                                            <Button
                                                                className="btn-social"
                                                                icon={
                                                                    <FacebookOutlined className="icon-social" />
                                                                }
                                                                href='https://mobile.facebook.com/PingPang.id'
                                                                rel='noopener noreferrer'
                                                                target='_blank'
                                                            />
                                                            <Button
                                                                className="btn-social"
                                                                icon={<PhoneOutlined className="icon-social" />}
                                                                href='https://wa.me/085336212930'
                                                                rel='noopener noreferrer'
                                                                target='_blank'
                                                            />
                                                            <Button
                                                                className="btn-social"
                                                                icon={<img src={tiktok} className='icon-social tiktok' />}
                                                                href='https://www.tiktok.com/@pingpang.id'
                                                                rel='noopener noreferrer'
                                                                target='_blank'
                                                            />
                                                        </Space>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default Footer;
