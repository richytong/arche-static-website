import TodoCardElements from './TodoCardElements.js'

/**
 * @name LoadMoreButton
 *
 * @synopsis
 * ```coffeescript [specscript]
 * LoadMoreButton(options {
 *   todos: Array<{}>,
 *   todosListElement: Element,
 * }) -> loadMoreButton Element
 * ```
 */
function LoadMoreButton(options) {
  const {
    todos,
    todosListElement,
  } = options

  return Button({
    async onClick(event) {
      const lastTodoId = todos[todos.length - 1].id
      const nextTodoIds = [lastTodoId + 1, lastTodoId + 2]
      const nextTodos = await map(nextTodoIds, fetchTodo)
      todos.push(...nextTodos)

      const nextTodoCardElements = TodoCardElements({ todos: nextTodos })

      nextTodoCardElements.forEach(element => {
        todosListElement.appendChild(element)
      })

      window.scrollTo(0, this.offsetTop)
    }
  }, 'Load More Todos')
}

export default LoadMoreButton
