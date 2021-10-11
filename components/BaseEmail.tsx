import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlGroup,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlStyle,
} from "@luma-team/mjml-react";
import React from "react";

export namespace MjmlConstants {
  export const BODY_WIDTH = 600;

  export const BORDER_RADIUS = "4px";
}

namespace Colors {
  export const DIVIDER_COLOR = "#ebeced";

  export const PRIMARY_COLOR = "#131517";
  export const SECONDARY_COLOR = "#737577";
  export const TERTIARY_COLOR = "#b3b5b7";

  export const PRIMARY_BG_COLOR = "#ffffff";
  export const SECONDARY_BG_COLOR = "#f4f5f6";

  export const DARK_PRIMARY_BG_COLOR = "#131517";
  export const DARK_SECONDARY_BG_COLOR = "#212325";

  export const CALENDAR_RED = "#d86156";

  export const BORDER_COLOR = "#ebeced";

  export const BRAND_COLOR = "#de3163";
}

export const BaseEmail = ({ children }: { children: React.ReactNode }) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlStyle>
          {`
            h1 {
              font-size: 24px;
              line-height: 32px;
              margin-top: 32px;
              margin-bottom: 28px;
            }

            h2 {
              font-size: 20px;
              line-height: 28px;
              margin-top: 24px;
              margin-bottom: 20px;
            }

            p {
              margin: 16px 0;
            }

            p.small {
              font-size: 14px;
              margin-bottom: 8px;
            }
          `}
        </MjmlStyle>

        <MjmlAttributes>
          <MjmlAll
            fontSize="16px"
            color={Colors.PRIMARY_COLOR}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif"
            lineHeight="1.6"
            padding={0}
          />
          <MjmlButton
            backgroundColor={Colors.BRAND_COLOR}
            color="white"
            borderRadius={8}
            fontSize={16}
            lineHeight="1"
            innerPadding="12px 24px"
            fontWeight={700}
          />
        </MjmlAttributes>
      </MjmlHead>

      <MjmlBody width={MjmlConstants.BODY_WIDTH}>
        <MjmlSection padding={16}>
          <MjmlColumn padding={0}>
            {children}

            <MjmlDivider
              borderWidth="1px"
              borderStyle="solid"
              borderColor={Colors.DIVIDER_COLOR}
              paddingTop={32}
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection padding={16}>
          <MjmlGroup>
            <MjmlColumn padding={0}>
              <MjmlImage
                height={15}
                width={45}
                align="left"
                href="https://lu.ma"
                src="https://cdn.lu.ma/email/logo.png"
              />
            </MjmlColumn>

            <MjmlColumn padding={0}>
              <MjmlSocial iconSize="16px" align="right">
                <MjmlSocialElement
                  href="https://lu.ma"
                  src="https://cdn.lu.ma/email/luma-star.png"
                />
              </MjmlSocial>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
