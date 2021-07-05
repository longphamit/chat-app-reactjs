import { Col, Collapse, Typography } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const { Panel } = Collapse;
const LinkedStyle = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Collapse
      ghost
      defaultActiveKey={["1"]}
      style={{ backgroundColor: "#fff" }}
    >
      <Panel header="Danh sach phong chat" key="1">
        <LinkedStyle>Room 1</LinkedStyle>
        <LinkedStyle>Room 2</LinkedStyle>
        <LinkedStyle>Room 3</LinkedStyle>
      </Panel>
    </Collapse>
  );
}

export default RoomList;
