import React, { useState } from "react";
import styled from "styled-components";
import { FlexHC } from "../../common/styles";
import { ThemeSettings } from "./ThemeSettings";
import { TemplateSettings } from "./TemplatesSettings";
import { ItemSettings } from "./ItemSettings";

const Header = styled(FlexHC)`
    @media print{
        display: none;
    }
`

export function SettingsHeader() {
  return (
    <Header>
      <TemplateSettings />
      <ThemeSettings />
      <ItemSettings />
    </Header>
  );
}
