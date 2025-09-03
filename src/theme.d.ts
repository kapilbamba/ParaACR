/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface Palette {
    primary: PaletteColor;
    slate: PaletteColor
    purple:SimplePaletteColorOptions;
    gray?:SimplePaletteColorOptions


  }

  interface PaletteOptions {
    primary?: SimplePaletteColorOptions;
    slate?: SimplePaletteColorOptions;
    purple?:SimplePaletteColorOptions
    gray?:SimplePaletteColorOptions
  }
}
