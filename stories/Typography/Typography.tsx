import React from "react";
import {
  Typography as TypographyComponent,
  TypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<TypographyProps, "variant" | "align" | 'color'>;

export interface TypeProps extends TypographyBaseProps {
  label: string;
}

export const Typography = ({ label, ...rest }: TypeProps) => (
  <TypographyComponent {...rest}>{label}</TypographyComponent>
);

Typography.defaultProps = {
  variant: "h1",
  color: 'primary.dark',
};