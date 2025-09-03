import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
let currentMonth = dayjs().get("month") + 1;

const initialState = {
  SelectedModule: null,
  Enviornment: "",
  token: "",
  platform: "",
  Rights: {},
  Notification: {
    open: false,
    message: "",
    variant: "error",
    description: "",
  },
  Loading: {
    open: false,
    message: "",
  },
  DateFilter: {
    period: "12",
    quarter: "1",
    month: currentMonth?.toString(),
    year: dayjs().get("year")?.toString(),
  },
  CurrentLocation: "Catering",
  CurrentStatus: "",
  Geolocation: {
    Latitude: "0",
    Longitude: "0",
  },
  CategorySelected: "Men",
};

export const AppSlice = createSlice({
  name: "AppInfo",
  initialState,
  reducers: {
    setAppInfo: (state, action) => {
      state.SelectedModule =
        action.payload?.SelectedModule || state.SelectedModule;
    },
    setRight: (state, action) => {
      state.Rights = action.payload;
    },

    resetAppInfo: (state) => {
      state.SelectedModule = null;
      state.Rights = {};
    },
    notify: (state, action) => {
      state.Notification = { open: true, ...action.payload };
    },
    resetNotification: (state) => {
      state.Notification = {
        open: false,
        message: "",
        variant: "error",
        description: "",
      };
    },
    // This is loading is for only if something is in progress and we want to  avoid user to click to perform other actions until the task is completed
    showLoading: (state, action) => {
      state.Loading = { open: true, ...action.payload };
    },
    resetLoading: (state) => {
      state.Loading = {
        open: false,
        message: "",
      };
    },
    resetDateFilter: (state) => {
      state.DateFilter = {
        period: "12",
        quarter: "1",
        month: currentMonth?.toString(),
        year: dayjs().get("year")?.toString(),
      };
    },
    setDateFilter: (state, action) => {
      state.DateFilter = action.payload;
    },
    setPeriod: (state, action) => {
      state.DateFilter = { ...state.DateFilter, period: action.payload };
    },
    setYear: (state, action) => {
      state.DateFilter = { ...state.DateFilter, year: action.payload };
    },
    setQuarter: (state, action) => {
      state.DateFilter = { ...state.DateFilter, quarter: action.payload };
    },
    setMonth: (state, action) => {
      state.DateFilter = { ...state.DateFilter, month: action.payload };
    },
    setEnviornment: (state, action) => {
      state.Enviornment = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.CurrentLocation = action.payload;
    },
    setCurrentStatus: (state, action) => {
      state.CurrentStatus = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
    setGeoLocation: (state, action) => {
      state.Geolocation = action.payload;
    },
    setCategorySelected: (state, action) => {
      state.CategorySelected = action.payload;
    },
  },
});

export const {
  setAppInfo,
  setRight,
  resetAppInfo,
  notify,
  resetNotification,
  showLoading,
  resetLoading,
  resetDateFilter,
  setDateFilter,
  setPeriod,
  setQuarter,
  setMonth,
  setYear,
  setEnviornment,
  setCurrentLocation,
  setToken,
  setPlatform,
  setCurrentStatus,
  setGeoLocation,
  setCategorySelected
} = AppSlice.actions;

export default AppSlice.reducer;
