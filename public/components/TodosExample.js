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

TodosExample.prepare = async function prepare() {
  const toTodosUrl = id => `https://jsonplaceholder.typicode.com/todos/${id}`

  const todoIDs = [1, 2, 3, 4, 5]

  const todos = await map(todoIDs, pipe([
    toTodosUrl,
    fetch,
    response => response.json(),
  ]))

  return { todos }
}

export default TodosExample
