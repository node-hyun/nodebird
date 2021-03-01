import React from "react";
import PropTypes from "prop-types";
import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";


const FollowList = ({ header, data }) => {
    console.log("data : ", data);
    return (
        <>
            <h4>{header}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {data.map((v) => {
                    return (
                        <Card style={{ width: "30%" }} actions={[<StopOutlined key="stop" />]}>
                            <Card.Meta description={v.nickname} />
                        </Card>
                    )
                })}
                <Button block>더보기</Button>
                <br /><br />
            </div>
        </>
    );
};

FollowList.propTypes = {
};

export default FollowList;