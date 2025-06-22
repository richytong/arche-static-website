const { Div, H2, P, Button } = ReactElement

/**
 * @name ClickExample
 *
 * @synopsis
 * ```coffeescript [specscript]
 * ClickExample() -> ReactElement
 * ```
 */
const ClickExample = ReactElement(() => {
  const [count, setCount] = useState(0)

  return Div({ id: 'click-example' }, [
    H2('Click Example'),
    P(`You clicked ${count} times`),
    Button({
      onClick() {
        setCount(count + 1)
      },
    }, 'Click me'),
  ])
})

export default ClickExample
