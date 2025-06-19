import TodoCard from './TodoCard.js'

/**
 * @name TodosExample
 *
 * @synopsis
 * ```coffeescript [specscript]
 * TodosExample(props {
 *   todos: Array<{
 *   }>,
 * })
 * ```
 */
const TodosExample = ReactElement(props => {
  const { todos } = props
  return Div({ id: 'todos-example' }, [
    H2('Todos Example'),
    Div({ class: 'todos-list' }, [
      todos.map(todo => TodoCard({
        key: todo.id,
        title: todo.title,
        completed: todo.completed,
      }))
    ]),
  ])
})

export default TodosExample
