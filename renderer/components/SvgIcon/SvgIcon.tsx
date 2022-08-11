import React from "react"
import { SvgContainer } from "./SvgIconContainer"

interface SvgIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
}

const SvgIcon: React.FC<SvgIconProps> = props => {
  const { Icon } = props
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  )
}

export default SvgIcon