import React from "react";
import { FooterInfo } from "./styled";

export const Footer = ({ title, copyright }) => (
  <FooterInfo>
    <p><strong>{title}</strong></p>
    {copyright}
  </FooterInfo>
);
