import { Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import ChatWindow from './chatwindow';
import SideBar from './sidebar';
function ChatRoom(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <Row>
          <Col span={6}>
                <SideBar></SideBar>
            </Col>
            <Col span={18}>
                <ChatWindow></ChatWindow>
            </Col>
        </Row>
    )
}

export default ChatRoom;