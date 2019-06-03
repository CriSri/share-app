import React from "react";
import "./index.less";
import {Divider} from "antd";
export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                Built with 
                <a href="">React</a> 
                <Divider type="vertical" />
                <a href="l">Babel</a> 
                <Divider type="vertical" />
                <a href="">antd</a> 
                <div>
                    CriSri(推荐使用google Chrome)以保证体验
                </div>
            </div>

        )
    }
}