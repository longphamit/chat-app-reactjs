import { Button, Col, Row } from 'antd';
import Column from 'antd/lib/table/Column';
import Title from 'antd/lib/typography/Title';
import React, { useState, useEffect } from 'react';
import firebase,{auth,db} from "../../firebase/config"
import { addDocument } from '../../firebase/service';
function Login(props) {
    const [state, setState] = useState('');
    const fbProvider=new firebase.auth.FacebookAuthProvider()

    const loginByFacebook=async ()=>{
        const {additionalUserInfo,user}=await auth.signInWithPopup(fbProvider)
        if(additionalUserInfo?.isNewUser){
            addDocument('user',{
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
                uid:user.displayName,
                providerId: additionalUserInfo.providerId
            })
        }
    
    }

    return (
        <div>
            <Row justify="center" style={{height:800}}>
                <Col span={8}>
                    <Title style={{textAlign: 'center'}}level={3}>Chat VN</Title>
                    <Button style={{width:'100%',marginBottom:5}}>
                        Đăng nhập bằng GOOGLE
                    </Button>
                    <Button onClick={()=>loginByFacebook()} style={{width:'100%',marginBottom:5}} >
                        Đăng nhập bằng FACEBOOK
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
