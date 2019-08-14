import React ,{ Component } from 'react';

class Todoitem extends Component{

    constructor(props){
        super(props);

        this.handleClickItem = this.handleClickItem.bind(this);
    }

    render(){
        return <div onClick={this.handleClickItem}>{this.props.content}</div>
    }

    handleClickItem(){
        this.props.deleteItem(this.props.index)
    }
}

export default Todoitem