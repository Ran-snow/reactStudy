import React,{Component , Fragment} from 'react';
import Todoitem from './Todoitem';

import './style.css';

class TodoList extends Component{

    constructor(prop){
        super(prop)

        this.state ={
            inputValue :'',
            list:[
            ]
        }

        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handlerInputChange(e){
        const value = e.target.value;
        this.setState(()=>({
            inputValue:value
        }));
    }

    handleBtnClick(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        });
    }

    handleItemDelete(index){

        // immutable
        // status no changes

        const list = [...this.state.list];
        list.splice(index,1);

        this.setState({
            list:list
        });
    }

    getTodoItem(){
        return  this.state.list.map((item,index)=>{
                return (
                    // <li 
                    //     key={index} 
                    //     onClick={this.handleItemDelete.bind(this,index)}
                    //     dangerouslySetInnerHTML={{__html:item}}
                    // >
                    // </li>
                    <Todoitem 
                        content = {item}
                        key={index} 
                        index = {index}
                        deleteItem = {this.handleItemDelete}
                    />
                )
            })
    }

    render(){
        return(
            <Fragment>
            <div>
                {/* This is 666 */}
                <label htmlFor="insertArea">Input</label>
                <input
                    id = "insertArea"
                    className = 'input'
                    value = {this.state.inputValue}
                    onChange ={this.handlerInputChange}
                />
                <button onClick = {this.handleBtnClick}>Submit</button>
            </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList