import React from 'react'
import {Card , Button, Radio} from "antd"
import "./ui.less"
export default class Login extends React.Component{
    state = {
        loading: true,
        size: 'default'
    }
    handleClick = ()=>{
        this.setState({
            loading: !this.state.loading
        })    
    }
    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render(){
        return (
            <div>
               <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Oop!</Button>
                    <Button>Oop!</Button>
                    <Button type="dashed">Oop!</Button>
                    <Button type="danger">Oop!</Button>
                    <Button disabled>Oop!</Button>
               </Card>
               <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search">搜索</Button>
                    <Button type="primary" shape="circle" icon="search"></Button>
                    <Button type="primary" icon="download">下载</Button>
               </Card>
               <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" shape="circle" icon="search"></Button>
                    <Button type="primary"  onClick={this.handleClick}>关闭</Button>
               </Card>
               <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
               </Card>
               <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group onChange={this.handleSizeChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Oop!</Button>
                    <Button type="dashed" size={this.state.size}>Oop!</Button>
                    <Button type="danger" size={this.state.size}>Oop!</Button>  
                </Card>
            </div>
        );
    }
}