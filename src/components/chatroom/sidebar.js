import { Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoomList from './roomlist';
import UserInfo from './userinfo';
const SideBarStyle=styled.div`
    background: #3f0e40;
    color: white;
    height:100vh;
`;

function SideBar(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <SideBarStyle>
            <Row>
                <Col span={24}>
                    <UserInfo/>
                </Col>
                <Col span={24}>
                    <RoomList/>
                </Col>
            </Row>
        </SideBarStyle>
    )
}

export default SideBar;