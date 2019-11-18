import { useState } from 'react'

export const useToggle = (initialValue) => {
    const [isShowing, setIsShowing] = useState(initialValue)
    const toggle = () => setIsShowing(!isShowing)

    return { isShowing, toggle }
}