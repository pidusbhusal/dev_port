const FadeInUp = {
    from: {
        opacity: 0,
        transform: 'translate3d(0, 60px, 0)',
    },
    to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
    },
};

const SlideInRight = {
    offscreen: {
        x: 100,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      },
}

export {FadeInUp, SlideInRight}