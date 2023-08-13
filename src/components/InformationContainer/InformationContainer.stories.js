import React from "react";
import { InfoContainer } from "./InfoContainer";
import figmaBlack from '../../assets/figma-black.png';

export default {
  title: 'Components/InfoContainer',
  component: InfoContainer,
  args: {
    children: 'Button'
  }
}

export const Primary = () => <InfoContainer text="Info Text" icon={figmaBlack} />
export const PrimaryWithoutIcon = () => <InfoContainer text="Info Text" />
