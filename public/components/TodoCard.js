/**
 * @name TodoCard
 *
 * @synopsis
 * ```coffeescript [specscript]
 * module Arche
 *
 * type ReactElement = Arche.ReactElement
 *
 * TodoCard(props {
 *   id: number,
 *   title: string,
 *   userId: number,
 *   completed: boolean,
 * }) -> ReactElement
 * ```
 */
const TodoCard = ReactElement(props => {
  const { title, completed } = props
  const [checked, setChecked] = useState(completed)
  return Div({ class: 'todo-card' }, [
    Input({
      type: 'checkbox',
      checked,
      onChange() {
        setChecked(!checked)
      },
    }),
    P(title),
  ])
})

export default TodoCard
