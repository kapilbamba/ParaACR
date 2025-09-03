import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  UserID: null,
  UserInfo: {
    Flag: 0,
    CustomerID: 0,
    Diet: "",
    CustomerName: null,
    Date: "",
    Gender: null,
    MobileNo: "",
    EmailID: null,
    Profile: null,
    Points: null,
    Platform: "",
    UserID: 1,
    TeamID: 0,
    ACRNo: "",
    AcrName: "",
    OrganisationID: 0,
    FirstName: "",
    MiddleName: "",
    LastName: "",
    FatherName: "",
    MotherName: "",
    SpouseName: null,
    PreferredName: "",
    Password: "",
    ConfirmPassword: "",
    DOB: "",
    BloodID: 1,
    BirthCountry: "",
    Nationality: "",
    CAddress: "",
    CCity: "",
    CState: "",
    CPincode: "",
    CCountry: "",
    PAddress: "",
    PCity: "",
    PState: "",
    PPincode: "",
    PCountry: "",
    TypeofID: 1,
    IDNumber: "",
    IssueAuthority: "",
    PlaceofIssue: "",
    IssueDate: "",
    ExpiryDate: "",
    NationalityPassport: "",
    PassportIssuePlace: "",
    Category: null,
    FuctionID: 1,
    Photo: "",
    Signature: "",
    Venue1: 0,
    Venue2: 0,
    Venue3: 0,
    Venue4: 0,
    IfAccompanyingGuest: "",
    GFirstName: null,
    GLastName: null,
    GFunction: null,
    SportID: 0,
    QRCode: "",
    QRCodeImage: "",
    NFCCode: null,
    Active: 1,
    Deleted: 0,
    DOC: "",
    DOU: "",
    DOD: "",
    OrganisationName: "",
    GroupName: "",
    IdentifyName: "",
    FunctionName: "",
    SportName: "",
    Token: "",
    VehicleNumber: "",
    VisaNo: "",
    PassportNo: "",
    Rights: [],
  },
  timestamp: null,

  isAuthenticated: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.UserID = action.payload;
    },
    setUserInfo: (state, action) => {
      state.UserInfo = action.payload;
      state.timestamp = action?.payload ? dayjs() : null;
      state.Year = initialState.Year;
      state.isAuthenticated = true;
    },

    resetAuthInfo: (state) => {
      state.UserID = null;
      state.UserInfo = {
        Rights: [],
      };
      state.timestamp = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUserID, setUserInfo, resetAuthInfo } = UserSlice.actions;

export default UserSlice.reducer;
