const ReactElement = Arche(React)
window.ReactElement = ReactElement

const DocumentElement = Arche()
window.DocumentElement = DocumentElement

for (const elementName in DocumentElement) {
  window[elementName] = DocumentElement[elementName]
}

window.Main = DocumentElement('main')
window.Header = DocumentElement('header')
window.Svg = DocumentElement('svg')
window.Path = DocumentElement('path')
window.Rect = DocumentElement('rect')
window.Mask = DocumentElement('mask')
window.Style = DocumentElement('style')
window.Dl = DocumentElement('dl')
window.Dt = DocumentElement('dt')
window.Dd = DocumentElement('dd')
window.S = DocumentElement('s')

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
