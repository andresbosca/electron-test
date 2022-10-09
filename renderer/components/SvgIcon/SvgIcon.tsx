import router from 'next/router';
import React from 'react';
import { SvgContainer } from './SvgIconContainer';

interface SvgIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  link?: string;
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<SvgIconProps> = (props) => {
  const { Icon, link } = props;

  return (
    <SvgContainer {...props}>
      <Icon onClick={() => router.push(link)} />
    </SvgContainer>
  );
};

export default SvgIcon;
