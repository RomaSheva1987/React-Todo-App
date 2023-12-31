/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { TodosContext } from '../../store/TodosContext';
import { TodoItem } from './TodoItem';
import { getVisibleTodos } from '../../utils/getVisibleTodos';

export const TodoList: React.FC = () => {
  const { todos, setTodos, filter } = useContext(TodosContext);

  const isAllComplited = todos.every(todo => todo.completed);

  const visibleTodos = useMemo(() => {
    return getVisibleTodos(todos, filter);
  }, [todos, filter]);

  const toggleAllStatuses = () => {
    setTodos(todos.map(todo => {
      return { ...todo, completed: !isAllComplited };
    }));
  };

  return (
    <section className="main">
      {todos.length > 0 && (
        <>
          <input
            type="checkbox"
            id="toggle-all"
            className={classNames('toggle-all', {
              active: isAllComplited,
            })}
            data-cy="toggleAll"
            onClick={toggleAllStatuses}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list" data-cy="todosList">
            {visibleTodos.map(todo => (
              <TodoItem currentTodo={todo} key={todo.id} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
