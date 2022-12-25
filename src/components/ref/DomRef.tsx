import { useEffect, useRef } from "react";

const DomRef = () => {
    const inputref = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputref.current.focus()
    }, [])

  return (
    <div>
        <input type="text" ref={inputref} />
    </div>
  )
}

export default DomRef