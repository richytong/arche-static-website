import TodoCard from './TodoCard.js'

/**
 * @name TodosExample
 *
 * @synopsis
 * ```coffeescript [specscript]
 * TodosExample(props {
 *   todos: Array<{
 *     id: string,
 *     title: string,
 *     completed: boolean,
 *   }>,
 * })
 * ```
 */
const TodosExample = ReactElement(props => {
  const [todos, setTodos] = useState(props.todos ?? [])

  return Div({ id: 'todos-example' }, [
    H2('Todos Example'),

    Div({ class: 'todos-list' }, [
      todos.map(todo => TodoCard({
        key: todo.id,
        title: todo.title,
        completed: todo.completed,
      }))
    ]),

    Button({
      onClick(event) {
      },
    }, 'Load Next Todo'),
  ])
})

export default TodosExample
