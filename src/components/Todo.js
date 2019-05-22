import React, { useState } from 'react';
import Item from './Item';
import TodoForm from "./TodoForm";

const Todo = () => {


	const initialState = [
		{
			text: 'Learn Hooks',
			isCompleted: false
		},

		{
			text: 'Get the JS Book',
			isCompleted: false
		},

		{
			text: 'Learn JavaScript',
			isCompleted: false
		},
	];

	/**
	 * todos: is initial State, whose value will be equal to initialState that we pass in useState() as a parameter
	 * setTodos is like setState
	 */
	const [ todos, setTodos ] = useState( initialState );

	const addToDo = ( text ) => {
		const newToDos = [ ...todos, { text } ];
		setTodos( newToDos );
	};

	const handleItemClick = ( index ) => {
		// Get all todos array from state.
		const newTodos = [ ...todos ];

		// Set isCompleted property to reverse of what its current value is ( boolean )
		newTodos[ index ].isCompleted = ! newTodos[ index ].isCompleted;

		// Set State with the new array of todos with the updated value
		setTodos( newTodos );
	};


	return (
		<div className="todo-container">
			<TodoForm addToDo={addToDo}/>
			<div className="todo-list">
				{ todos.length && (
					todos.map( ( item, index ) => (
						<Item
							key={`${ item.text }-${ index }`}
							todo={ item }
							index={ index }
							handleItemClick={ handleItemClick }
						/>
					) )
				) }
			</div>
		</div>
	);
};

export default Todo;
