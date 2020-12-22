import styled from 'styled-components'

const Paragraph = styled.p(props => ({
  fontSize: props.fSize,
  fontFamily: props.fFamily,
  lineHeight: props.lineHeight,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginTop: props.mt,
  padding: props.padding,
  gridColumn: props.gridCol,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  textAlign: props.textAlign
}))

export default Paragraph;