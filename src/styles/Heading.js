import styled from 'styled-components'

const Heading = styled.h1(props => ({
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
  textAlign: props.textAlign
}))

export default Heading;