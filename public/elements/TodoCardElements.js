/**
 * @name TodoCardElements
 *
 * @synopsis
 * ```coffeescript [specscript]
 * TodoCardElements(options {
 *   todos: Array<todo {}>,
 * }) -> todoCardElements Element
 * ```
 */
function TodoCardElements({ todos }) {
  return todos.map(todo => {
    return Div({ class: 'todo-card' }, [
      Input({
        type: 'checkbox',
        checked: todo.completed,
        onChange(event) {
          todo.completed = event.target.checked
        }
      }),
      P(todo.title),
    ])
  })
}

export default TodoCardElements
