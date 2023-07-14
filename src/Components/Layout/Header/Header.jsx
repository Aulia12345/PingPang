
import { Layout, Menu, Row, Button, Collapse } from "antd";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from '../../../assets/gambar';
import './Header.css'
import { usePathName } from "./useLink";
import { MenuOutlined } from "@ant-design/icons";
import { MENU_ITEM } from "./Constant";

const Header = () => {

    const { Header } = Layout;
    const path = usePathName();
    console.log(path)
    // eslint-disable-next-line no-unused-vars
    const [current, setCurrent] = useState(path);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const onClick = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    return (
        <div>
            <Header
                style={{
                    backgroundColor: isScrolled ? "#fff" : "transparent",
                }}
                className="header"
            >
                <nav className="navbar">
                    <NavLink to="/">
                        <img
                            src={logo} alt=""
                            style={{
                                float: "left",
                                width: 100,
                                height: 50,
                                marginTop: 5
                            }}
                            onClick={() => setCurrent("/")}
                        />
                    </NavLink>
                    <nav className="linknavbar" style={{
                        backgroundColor: isScrolled ? "#fff" : "transparent",
                    }} onClick={() => setCurrent("")}>
                        <NavLink style={navStyles} to={"/"} ><p className="textlink">Beranda</p>
                        </NavLink>
                        <NavLink style={navStyles} to={"/products"} ><p className="textlink">Our Products</p>
                        </NavLink>
                        <NavLink style={navStyles} to={"/profile-company"} ><p className="textlink">Profile Company</p>
                        </NavLink>
                    </nav>
                </nav>

                {/* collapse */}
                <Row style={{
                    backgroundColor: isScrolled ? "#fff" : "transparent"
                }}>
                    <Collapse ghost bordered={false} className="mobileVisible" style={{ width: "100%", backgroundColor: isScrolled ? "#fff" : "transparent" }}>
                        <Collapse.Panel
                            header={
                                <Row justify="space-between" style={{ width: "100%", backgroundColor: isScrolled ? "#fff" : "transparent" }}>
                                    <NavLink to="/">
                                        <Row className="brand">
                                            <img
                                                src={logo}
                                                alt="logo"
                                                className="logo-image"
                                                onClick={() => setCurrent("/")}
                                            />
                                        </Row>
                                    </NavLink>
                                    <Button
                                        type="primary"
                                        icon={<MenuOutlined />}
                                        className="btn-bread"
                                    />
                                </Row>
                            }
                            showArrow={false}
                            style={{ width: "100%" }}
                        >
                            <Menu
                                theme="light"
                                mode="vertical"
                                items={MENU_ITEM}
                                onClick={onClick}
                                selectedKeys={[current]}
                                className="menu-bread"
                            />
                        </Collapse.Panel>
                    </Collapse>
                </Row>
            </Header >
        </div >
    );
}

export default Header;
