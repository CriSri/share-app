import React from "react";
import {Menu,Icon} from "antd";
import MenuConfig from "./../../resource/menuConfig"
import "./index.less"
const SubMenu = Menu.SubMenu;

export default class Navleft extends React.Component{
    componentWillMount(){
        const   menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //通过递归来实现对数据的遍历生成  如果子菜单为嵌套结构 则继续遍历
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
               return (
                   <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                   </SubMenu>
                  
                ) 
            } 
            return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
        })
    }
    
    render(){
      
        return (
            <div>
               <div className="logo">
                   <img src="/assets/logo-ant.svg" alt=""/>
                   <h1>SS MS</h1>
               </div>
               <Menu theme="dark">
                    {this.state.menuTreeNode}
               </Menu>
            </div>
        )
    }
}