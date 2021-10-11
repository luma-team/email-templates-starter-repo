import { MjmlText, MjmlButton } from "@luma-team/mjml-react";
import React from "react";

import { BaseEmail } from "./BaseEmail";

export const SimpleEmail = () => {
  return (
    <BaseEmail>
      <MjmlText>Here is a very simple email with a button.</MjmlText>

      <MjmlButton href={"https://lu.ma"} paddingTop={32} align={'left'}>
        Click Me!
      </MjmlButton>
    </BaseEmail>
  );
};
