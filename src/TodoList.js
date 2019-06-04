import React, {Component} from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !=="") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => { 
                return {
                    items: prevState.items.concat(newItem)
            };
         });
       }

       this._inputElement.value ='';
       console.log(this.state.items);
       e.preventDefault();
    }

    render(){
        return(
            <div className='todoMain'>
                <div className='header'>
                 <form onSubmit={this.addItem}>
                     <input className='p-2 mr-3 text-center' ref={(a) => this._inputElement = a} placeholder='  .....edəcəklərim.....  '></input>
                     <button className='btn btn-primary' type='submit'>əlavə et</button>
                 </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;