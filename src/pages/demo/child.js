import React from 'react'
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillMount(){
        console.log("will mount")
    }
    componentDidMount(){
        console.log('Did mount')
    }
    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name)
    }
    shouldComponentUpdate(){
        console.log('should update');
        return true
    }
    render(){
        return (
            <div>
               <p>{this.props.name}</p>
            </div>
        )
    }
}