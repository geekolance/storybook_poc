import { SideMenuButton } from "./SideMenuButton";

export default {
  title: 'Sidebar/MenuButton',
  component: SideMenuButton,
  args: {
    children: 'sidemenu'
  }
}

export const Filled = () => <SideMenuButton label = 'Menu Item' variant='filled' />
export const Normal = () => <SideMenuButton label = 'Menu Item' variant='normal' />
export const Disabled = () => <SideMenuButton label = 'Menu Item' variant='disabled' />