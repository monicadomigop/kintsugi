import { color } from '../color'

interface shadowProps {
  bottom: string,
  top: string,
  lineBreak: string,
}
export const shadow: shadowProps = {
  bottom: `0px 0.5px 0px ${color.shadow.primary}`,
  top: `0px -0.5px 0px ${color.shadow.primary}`,
  lineBreak: `0px 12px 0px #545454 ${color.shadow.secondary}`,
}
