import { useState } from "react"

const useCustomHook = function (value) {
    const [initial, setInitial] = useState(value);


    const increment = () => setInitial(initial + 1)
    const decrement = () => initial > 0 ? setInitial(initial - 1) : 0;
    const reset = () => setInitial(value)
    console.log(initial)

    return { increment, decrement, reset, initial }

}

export default useCustomHook