// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LandingPage.css';
import { logo, produk, wave, coral, teripang } from '../../assets/gambar';
import { Card, Collapse, Row } from 'antd';
import { Manfaat } from './constant';

const LandingPage = () => {

    const { Panel } = Collapse;

    return (
        <div className='BODY'>
            <div className='cover'>
                <div className='subcover'>
                    <div className='judul'>
                        <img className='logojudul' src={logo} alt="logo pingpang" />
                        <p className='judul1'>Otot Teripang <br /> <span className='judul2'>Snack sensasi lautan</span> </p>
                    </div>
                    <div className='produkk'>
                        <div className='bubble'></div>
                        <img className='produk' src={produk} alt="product" />
                    </div>
                </div>
                <img className='coral' src={coral} alt="" />
                <img className='wave' src={wave} alt="" />
            </div>

            <div className='description' style={{ display: 'flex', justifyContent: 'space-between', gap: 40 }}>
                <div className='PRODDESC'>
                    <img className='produkdesc' src={produk} alt="produk" />
                    <div className='bubble2'></div>
                </div>
                <div className='descc' style={{ display: 'flex', flexDirection: "column" }}>
                    <p className='desc'>Usaha PingPang berdiri sejak tahun 2022, kami berupaya untuk mengenalkan jenis olahan laut kepada masyarakat. Selain itu, kami ingin memperkenalkan kepada masyarakat beberapa inovasi baru yang kami ciptakan sebagai langkah awal kami dalam membantu perekonomian para nelayan lokal di sekitar pesisir kenjeran. Produk ini memiliki banyak varian rasa, antara lain BBQ, Spicy, dan Seaweed.</p>
                    <div className='line'></div>
                    <div className='bubble3'></div>
                    <div className='bubble4'></div>
                </div>
            </div>

            <div className='manfaat'>
                <p className='judulmanfaat'>Manfaat Teripang Bagi Kesehatan</p>
                <img className='coralicon' src={coral} alt="" />
                <div className='line2' style={{ width: 900 }}></div>
                <img className='teripang' src={teripang} alt="teripang" />
                <div className='bubble3' style={{ marginTop: -100, marginRight: -910, width: 200, height: 200, zIndex: 0 }}></div>
                <div className='bubble4' style={{ width: 50, height: 50, marginTop: -80, marginRight: -570 }}></div>
                <div className='Collapse'>
                    <Collapse className='collapse' bordered={false} defaultActiveKey={['1']}>
                        {Manfaat.map((item) => (
                            <Panel header={item.label} key={item.key}>
                                <img className='health' src={item.health} alt="" />
                                <p className='textdesc'>{item.text}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </div>

                <div className='CARD'>
                    <Row gutter={[0, 20]}>

                        {Manfaat.map((item) => (
                            <Card bordered={false} style={{ width: 300 }} title={item.label} key={item.key}>
                                <img className='health' src={item.health} alt="" />
                                <p className='textdesc'>{item.text}</p>
                            </Card>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
