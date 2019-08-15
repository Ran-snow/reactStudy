import React ,{ Component } from 'react';

class Todoitem extends Component{

    constructor(props){
        super(props);

        this.handleClickItem = this.handleClickItem.bind(this);
    }

    render(){
        const { content } = this.props;
        return (
            <div onClick={this.handleClickItem}>
                {content}
            </div>)
    }

    handleClickItem(){
        const { deleteItem , index }  = this.props;
        deleteItem(index);
    }
}

export default Todoitem