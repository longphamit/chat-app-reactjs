import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserAddOutlined from "@ant-design/icons/UserAddOutlined";
import Message from "./message";
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 10px 20px;
  align-items: center;
    border-bottom: 1px solid rgb(230,230,230);
  .header {
    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &_title {
      margin: 0;
      font-weight: bold;
    }
    &_description {
      font-size: 12px;
    }
  }
`;
const ContentStyled = styled.div`
  display:flex;
  flex-direction:column;
  padding:11px;
  justify-content:flex-end;
`;
const MessageListStyled= styled.div`
  max-height:100%;
  overflow-y:auto;

`;
const WrapperStyled =styled.div`
  heigh:100vh;
`;
function ChatWindow(props) {
  const [state, setState] = useState("");
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header_info">
          <p className="header_title">Room 1</p>
          <span className="header_description">Day la room 1</span>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <Button icon={<UserAddOutlined />} style={{marginRight:20}}>Add Friend</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
            <Message text="Text" photoURL={null} displayName="Tung" createAt={121212121211}/>
            <Message text="Text" photoURL={null} displayName="Tung" createAt={121212121211}/>
            <Message text="Text" photoURL={null} displayName="Tung" createAt={121212121211}/>
            <Message text="Text" photoURL={null} displayName="Tung" createAt={121212121211}/>
        </MessageListStyled>
        <Form>
            <Form.Item>
                <Input/>
            </Form.Item>
            <Button>Send</Button>
        </Form>

      </ContentStyled>
    </WrapperStyled>
  );
}

export default ChatWindow;
