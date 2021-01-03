import styled from 'styled-components'

const Button = styled.button(props => ({
  display: props.display,
  height: props.height,
  width: props.width,
  fontSize: props.fSize,
  borderRadius: props.borderRadius,
  background: props.background,
  color: props.color,
  margin: props.margin,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginTop: props.mt,
  padding: props.padding,
  paddingTop: props.pt,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  paddingRight: props.pr,
  flexDirection: props.flexDir,
  gridColumn: props.gridCol,
  gridTemplateColumns: props.gridTempCol,
  gridColumnGap: props.gridColGap,
  justifyItems: props.justifyItems,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  textAlign: props.textAlign,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  gridRow: props.gridRow,
  gridColumn: props.gridColumn
}));

export default Button;