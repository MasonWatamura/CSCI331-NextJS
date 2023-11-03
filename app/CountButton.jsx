import { useState, useEffect } from "react"

export default function CountButton(props) {
    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + props.incrementsBy)
    }

    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }

    useEffect(rollOverCount, [count])

    return (
      <>
      <button onClick={handleClick}>+{props.incrementsBy}</button>
      <div>{count}</div>
      </>
    )
}