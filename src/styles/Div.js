import styled from 'styled-components'

const Div = styled.div(props => ({
  display: props.display,
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
  gridRow: props.gridRow,
  gridTemplateColumns: props.gridTempCol,
  gridColumnGap: props.gridColGap,
  justifyItems: props.justifyItems,
  alignItems: props.alignItems,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  justifyContent: props.justifyContent,
  textAlign: props.textAlign
}));

export default Div;