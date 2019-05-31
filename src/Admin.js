import React from "react"
import {Row,Col} from "antd"

export default class Admin extends React.Component{


    render(){
        return (
            <Row>
                <Col span="3">
                    left
                </Col>
                <Col span="21">
                    right
                </Col>
            </Row>
        );
    }
}