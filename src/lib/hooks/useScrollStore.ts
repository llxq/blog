import { useEffect, useRef } from 'react'

export const useScrollStore = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollDom = scrollRef.current
        const { scrollWidth = 0, clientWidth = 0, } = scrollDom ?? {}
        const scrollMaxWidth = scrollWidth - clientWidth
        const step = 100

        const handleScroll = (event: WheelEvent): void => {
            const { deltaY, } = event
            const originScrollLeft = scrollDom!.scrollLeft
            if (deltaY > 0) {
                if (originScrollLeft < scrollMaxWidth) {
                    scrollDom!.scrollLeft += step
                }
            } else {
                const nextScrollLeft = originScrollLeft - step
                scrollDom!.scrollLeft = nextScrollLeft < 0 ? 0 : nextScrollLeft
            }
        }

        scrollDom?.addEventListener('wheel', handleScroll)

        return () => {
            scrollDom?.removeEventListener('wheel', handleScroll)
        }
    }, [scrollRef,])

    return { scrollRef, }
}