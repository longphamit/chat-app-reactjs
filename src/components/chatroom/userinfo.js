import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {auth, db} from "../../firebase/config"
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  .username {
    color: #fff;
    margin-left: 5px;
  }
`;

function UserInfo(props) {
  const [state, setState] = useState("");
  useEffect(()=>{
    db.collection('user').onSnapshot((snapshot)=>{
      const data= snapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
      }))
      console.log({data,snapshot,docs: snapshot.docs})
    })
  },[])
  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button ghost onClick={()=>{auth.signOut()}}>Đăng Xuất</Button>
    </WrapperStyled>
  );
}

export default UserInfo;
