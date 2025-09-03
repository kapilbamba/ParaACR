import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICustomizer } from "src/interface";

const initialState: ICustomizer = {
  activeDir: "ltr",
  activeMode: "light",
  activeTheme: "ORANGE_THEME",
  SidebarWidth: 350,
  MiniSidebarWidth: 87,
  TopbarHeight: 70,
  isLayout: "full",
  isCollapse: false,
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: false,
  isLanguage: "en",
  isCardShadow: true,
  borderRadius: 8,
};

export const CustomizerSlice = createSlice({
  name: "customizer",
  initialState,
  reducers: {
    setTheme: (state: typeof initialState, action: PayloadAction<string>) => {
      state.activeTheme = action.payload;
    },
    setDarkMode: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.activeMode = action.payload;
    },
    setDir: (state: typeof initialState, action: PayloadAction<string>) => {
      state.activeDir = action.payload;
    },
    setLanguage: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.isLanguage = action.payload;
    },
    setCardShadow: (
      state: typeof initialState,
      action: PayloadAction<boolean>
    ) => {
      state.isCardShadow = action.payload;
    },
    toggleSidebar: (state: typeof initialState) => {
      state.isCollapse = !state.isCollapse;
    },
    hoverSidebar: (
      state: typeof initialState,
      action: PayloadAction<boolean>
    ) => {
      state.isSidebarHover = action.payload;
    },
    toggleMobileSidebar: (state: typeof initialState) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    toggleLayout: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.isLayout = action.payload;
    },
    toggleHorizontal: (
      state: typeof initialState,
      action: PayloadAction<boolean>
    ) => {
      state.isHorizontal = action.payload;
    },
    setBorderRadius: (
      state: typeof initialState,
      action: PayloadAction<number>
    ) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  setTheme,
  setDarkMode,
  setDir,
  toggleSidebar,
  hoverSidebar,
  toggleMobileSidebar,
  toggleLayout,
  setBorderRadius,
  toggleHorizontal,
  setLanguage,
  setCardShadow,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
