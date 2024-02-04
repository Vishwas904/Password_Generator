import PasswordGen from "./PasswordGen"
import PasswordHide from "./PasswordHide"

const App = () => {
  return (
    <>
      <PasswordGen />
      <PasswordHide />
    </>
  )
}

export default App


// useCallback Hook
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// const cachedFn = useCallback(fn , dependencies)
// Store function data in cache memory and make use most of it from past re-render aur jo nahi hua that's okay then wapas naya bana lenge 
// Here setChar and setNumber are the dependencies which means the component should re-render after the updation of those dependencies
