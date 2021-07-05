import { Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const WrapperStyled=styled.div`
    margin-bottom:10px;
    .author {
        margin-left: 5px;
        font-weight: bold;
    }
    .date{
        margin-left: 5px;
        font-size: 11px;
        color:#a7a7a7;
    }
    .content {
        margin-left: 30px;
    }
`;
function Message({text,displayName,createAt,photoURL}) {
    const [state, setState] = useState('');

    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>A</Avatar>
                <Typography.Text className="author">{displayName}</Typography.Text>
                <Typography.Text className="date">{createAt}</Typography.Text>
            </div>
            <div>
            <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </WrapperStyled>
    )
}

export default Message;