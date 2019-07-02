// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: 'rgba(0, 0, 0, 0.3)',
        bg: '#191919'
      },
      fontFamily: {
        body: ['Rubik', 'sans-serif']
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(254,178,178,0.5)'
      },
      minHeight: {
        sm: '200px',
        md: '400px',
        lg: '600px'
      }
    }
  },
  variants: {}
}
