import Typography from "typography"
const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.58,
  headerFontFamily: ['Nunito', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'sans-serif'],
  scaleRatio: 2,
  headerWeight: 300,
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Nunito',
      styles: [
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'PT Sans',
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