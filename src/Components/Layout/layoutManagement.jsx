// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Layout } from "antd";
import HeaderComponent from "./Header/Header";
import FooterComponent from './Footer/Footer'
import "./layoutManagement.css";
import Credit from './Footer/Credit';

// eslint-disable-next-line react/prop-types
const layoutManagement = ({ children }) => {
    const { Content } = Layout;

    return (
        <>
            <Layout>
                {/* Header */}
                <HeaderComponent />

                {/* Content */}
                <Content
                    className="site-layout"
                    style={{
                        padding: "0px",
                    }}
                >
                    <div
                        style={{
                            padding: 0,

                        }}>
                        {children}

                    </div>
                </Content>

                {/* Footer  */}
                <FooterComponent />
                <Credit />
            </Layout>
        </>
    );
}

export default layoutManagement;