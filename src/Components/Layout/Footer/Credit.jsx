// eslint-disable-next-line no-unused-vars
import React from "react";
import { Layout, Row, Col, Space } from "antd";
import "./Footer.css";


const Credit = () => {
    const { Footer } = Layout;
    return (
        <Footer
            style={{
                textAlign: "center",
                background: "#004aad",
            }}
            className="footerpart"
        >

            <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Space direction="vertical">
                        <span className="footer-text">© PingPangSda</span>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};

export default Credit;
