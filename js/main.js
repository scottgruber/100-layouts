
var swatch = document.getElementById('swatch')
TweenMax.fromTo(
  '.swatch:nth-child(1)',
  3,
  {
    backgroundColor: '#5cb2c8',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#9D4A59',
    transform: 'translateY(0)'
  }
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(2), .swatch:nth-child(16)',
  2,
  {
    backgroundColor: '#fe5b5e',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#BFB3A8',
    transform: 'translateY(0)'
  },
  0.7
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(3), .swatch:nth-child(6), .swatch:nth-child(15)',
  1,
  {
    backgroundColor: '#e54a46',
    transform: 'translateY(100vh)'

  },
  {
    backgroundColor: '#4F643D',
    transform: 'translateY(0)'
  },
  1.4
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(4), .swatch:nth-child(13)',
  2,
  {
    backgroundColor: '#a2838c',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#BAC96D',
    transform: 'translateY(0)'
  },
  0.9
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(5), .swatch:nth-child(9), .swatch:nth-child(14)',
  3,
  {
    backgroundColor: '#ff817f',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#F6D763',
    transform: 'translateY(0)'
  },
  0.9
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(7), .swatch:nth-child(11)',
  3,
  {
    backgroundColor: '#70504e',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#4B89BF',
    transform: 'translateY(0)'
  },
  0.9
)

TweenMax.staggerFromTo(
  '.swatch:nth-child(8), .swatch:nth-child(12)',
  3,
  {
    backgroundColor: '#454543',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#F0E7D8',
    transform: 'translateY(0)'
  },
  0.4
)

TweenMax.fromTo(
  '.swatch:nth-child(10)',
  3,
  {
    backgroundColor: '#4F643D',
    transform: 'translateY(100vh)'
  },
  {
    backgroundColor: '#5C4E48',
    transform: 'translateY(0)'
  }
)
