import { SideBarContainer } from './SideBarContainer';

interface SideBarProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <SideBarContainer>{children}</SideBarContainer>;
};
export default SideBar;
