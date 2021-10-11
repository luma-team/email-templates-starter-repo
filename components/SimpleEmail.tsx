import { MjmlText, MjmlButton } from "@luma-team/mjml-react";
import React from "react";

import { BaseEmail } from "./BaseEmail";

export const SimpleEmail = () => {
  return (
    <BaseEmail>
      <MjmlText>
        <p>Dear Mr. Pontis,</p>

        <p>Here is a very simple email with a button.</p>
      </MjmlText>

      <MjmlButton href={"https://lu.ma"} align={"left"}>
        Click Me!
      </MjmlButton>
    </BaseEmail>
  );
};

export const SimpleEmailCode = `import { 
  MjmlText,
  MjmlButton,
} from "@luma-team/mjml-react";

import { BaseEmail } from "./BaseEmail";

export const SimpleEmail = () => {
  return (
    <BaseEmail>
      <MjmlText>
        <p>
          Dear Mr. Pontis,
        </p>

        <p>
          Here is a very simple email with a button.
        </p>
      </MjmlText>

      <MjmlButton href={"https://lu.ma"} align={"left"}>
        Click Me!
      </MjmlButton>
    </BaseEmail>
  );
};`;
