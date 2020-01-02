import React, { Component } from 'react';
import TodoItem from './TodoItem' ;

export default class TodoList extends Component {
    render() {
        const{items} = this.props
        return (
            <div>
                <ul className="list-group">
                    <h3 className="text-center">Todo List</h3>
                {
                    items.map(item => {
                        return(
                            <TodoItem key={item.id} title={item.title} />
                        );
                    })
                }
                

                <button className="btn btn-danger btn-block">Clear List</button>
                
                </ul>
            </div>
        )
    }
}
