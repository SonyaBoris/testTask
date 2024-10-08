export const featureAnimate = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => (
    {
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1 }
    }
  )
}

export const opacityAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => (
    {
      opacity: 1,
      transition: { delay: custom * 1 }
    }
  )
}

export const xmotionAnimate = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => (
    {
      x: 0,
      opacity: 1,
      transition: { delay: custom * 1 }
    }
  )
}