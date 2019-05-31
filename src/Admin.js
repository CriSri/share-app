import React from "react"
import {Row,Col} from "antd"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Navleft from "./components/nav-left"
export default class Admin extends React.Component{


    render(){
        return (
            <Row>
                <Col span="3">
                    <Navleft></Navleft>
                </Col>
                <Col span="21">
                    <Header></Header>
                    <Row></Row> 
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}