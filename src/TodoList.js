import React,{Component , Fragment} from 'react';
import './style.css';
import Todoitem from './Todoitem';

class TodoList extends Component{

    constructor(prop){
        super(prop)

        this.state ={
            inputValue :'',
            list:[
            ]
        }
    }

    handlerInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
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
                    onChange ={this.handlerInputChange.bind(this)}
                />
                <button onClick = {this.handleBtnClick.bind(this)}>Submit</button>
            </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
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
                                        deleteItem = {this.handleItemDelete.bind(this)}
                                    />
                                    )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList