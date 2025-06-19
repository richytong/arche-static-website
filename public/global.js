const ReactElement = Arche(React)

window.ReactElement = ReactElement

for (const elementName in ReactElement) {
  window[elementName] = ReactElement[elementName]
}

window.Main = ReactElement('main')
window.Header = ReactElement('header')
window.Svg = ReactElement('svg')
window.Path = ReactElement('path')
window.Rect = ReactElement('rect')
window.Mask = ReactElement('mask')
window.Style = ReactElement('style')
window.Dl = ReactElement('dl')
window.Dt = ReactElement('dt')
window.Dd = ReactElement('dd')
window.S = ReactElement('s')

for (const key in rubico) {
  window[key] = rubico[key]
}

window.useCallback = React.useCallback
window.useContext = React.useContext
window.useDebugValue = React.useDebugValue
window.useEffect = React.useEffect
window.useImperativeHandle = React.useImperativeHandle
window.useLayoutEffect = React.useLayoutEffect
window.useMemo = React.useMemo
window.useReducer = React.useReducer
window.useRef = React.useRef
window.useState = React.useState
