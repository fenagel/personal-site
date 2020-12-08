import Typography from "typography"
const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.58,
  headerFontFamily: ['Varela Round', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  scaleRatio: 2,
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Varela Round',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Lora',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})
export const { scale, rhythm, options } = typography
export default typography