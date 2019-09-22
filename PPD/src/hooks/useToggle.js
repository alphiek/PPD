import { useState, useCallback } from 'react'

export const useToggle = (initialValue) => {
    const [isShowing, setIsShowing] = useState(initialValue)
    const toggle = useCallback(() => setIsShowing(!isShowing))

    return { isShowing, toggle }
}