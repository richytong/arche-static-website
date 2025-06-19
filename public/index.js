/**
 * @name main
 *
 * @synopsis
 * ```coffeescript [specscript]
 * main() -> Promise<>
 * ```
 */
async function main() {
  const reactRootElements = document.querySelectorAll('.react-root')
  for (const node of reactRootElements) {
    const componentUrl = node.getAttribute('data-component-url')
    import(`.${componentUrl}`).then(async module => {
      const RootComponent = module.default
      if (RootComponent.prepare) {
        const data = await RootComponent.prepare()
        ReactDOM.hydrate(RootComponent({ ...data }), node)
      } else {
        ReactDOM.hydrate(RootComponent(), node)
      }
    })
  }
}

main()
