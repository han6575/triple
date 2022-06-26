import { MutableRefObject, useEffect, useRef } from 'react'

interface FadeProps {
  delay: number
}

export const useFade = ({ delay }: FadeProps) => {
  const element = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity 700ms ${delay}ms`
      current.style.opacity = '1'
      current.style.transform = 'translate3d(0, 0, 0)'
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
      current.style.transitionDelay = `${delay}ms`
      current.style.transitionDuration = `700ms`
      current.style.transitionProperty = 'all'
    }
  }, [])

  return {
    ref: element,
    style: { opacity: 0, transform: ' translate3d(0, 10%, 0)' },
  }
}
