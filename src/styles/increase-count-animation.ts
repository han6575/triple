import { MutableRefObject, useLayoutEffect } from 'react'

export const IncreaseCount = (ref: MutableRefObject<HTMLSpanElement>) => {
  const increaseCount = () => {
    const { current } = ref
    const targetNum = current.getAttribute('data-count')
    const text = current.getAttribute('inner-content')
    let num = Number(targetNum)
    const frame = 1000 / 20

    const timer = setInterval(() => {
      const target = Number(targetNum) - num
      current.innerHTML = `<strong>${Math.ceil(target)}${text}</strong>`
      num -= num / 10

      if (num < 0) {
        clearInterval(timer)
      }
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut)
        clearInterval(timer)
        current.innerHTML = `<strong>${targetNum}${text}</strong>`
      }, 2000)
    }, frame)
  }

  useLayoutEffect(() => {
    increaseCount()
  }, [])

  return ref
}
