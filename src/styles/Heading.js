import styled from 'styled-components'

const Heading1 = styled.h1(props => ({
  fontSize: props.fSize,
  fontFamily: props.fFamily,
  fontWeight: props.fWeight,
  lineHeight: props.lineHeight,
  marginLeft: props.ml,
  marginRight: props.mr,
  padding: props.padding,
  margin: props.margin,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  textAlign: props.textAlign,
  gridRow: props.gridRow,
  gridColumn: props.gridColumn,
  animation: props.animation
}))

const Heading2 = styled.h2(props => ({
  fontSize: props.fSize,
  fontFamily: props.fFamily,
  fontWeight: props.fWeight,
  lineHeight: props.lineHeight,
  marginLeft: props.ml,
  marginRight: props.mr,
  padding: props.padding,
  margin: props.margin,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  textAlign: props.textAlign,
  gridRow: props.gridRow,
  gridColumn: props.gridColumn,
  animation: props.animation
}))

export {Heading1, Heading2};