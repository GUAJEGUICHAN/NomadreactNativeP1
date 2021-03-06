// src/assets/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string,
    textColor: string,
    ActiveTintColor: string,
    InactiveTintColor: string,
  }
}
