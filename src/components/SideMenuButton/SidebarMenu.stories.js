import { SideMenuButton } from "./SideMenuButton";

export default {
  title: 'Sidebar/MenuButton',
  component: SideMenuButton,
  args: {
    children: 'sidemenu'
  }
}

export const Filled = () => <SideMenuButton label = 'label' variant='filled' />
export const Normal = () => <SideMenuButton label = 'label' variant='normal' />
export const Disabled = () => <SideMenuButton label = 'label' variant='disabled' />