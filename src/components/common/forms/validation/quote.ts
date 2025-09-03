import * as Yup from "yup";
import { maxText, requiredText, minText } from "./message";

export const AddseverChildSchema = Yup.object({
  QuotePricesChild: Yup.array()
    .of(
      Yup.object({
        ProductName: Yup.string()
          .required(requiredText("Name"))
          .min(2, minText("Name", 2))
          .max(80, maxText("Name", 80)),
      })
    )
    .required(requiredText("Item Details")),
});

export const QuoteSchema = Yup.object({
  CompanyID: Yup.string().required(requiredText("Company Name")),
  CompanyUserID: Yup.string().required(requiredText("Contact Person")),
  CreationBehalfID: Yup.number().default(0),
  CompanyEmail: Yup.string()
    .email("Contact Person Email must be a valid email")
    .required(requiredText("Contact Person Email")),
  CompanyAddress: Yup.string()
    .trim()
    .min(2, minText("Contact Address", 2))
    .max(80, maxText("Contact Address", 80))
    .required(requiredText("Contact Address")),
  Subject: Yup.string()
    .trim()
    .min(2, minText("Subject", 2))
    .max(80, maxText("Subject", 80))
    .required(requiredText("Subject")),
  QuoteDate: Yup.string().required(requiredText("Quote Date")),
  NoofDays: Yup.number()
    .default(1)
    .min(1, "Number of Days of Validity must be greater than or equal to 1")
    .required(requiredText("Number of Days of Validity")),
  QuoteValidity: Yup.string().required(requiredText("Quote Validity")),
  QuotePrices: Yup.array()
    .min(1, "Minimum 1 Group Name is required")
    .required("Minimum 1 Group Name is required"),
  QuoteTerms: Yup.array()
    .of(
      Yup.object({
        Active: Yup.number(),
        TermName: Yup.string()
          .required("required")
          .min(2, "Must be 10 character or more")
          .max(80, "Must be at most 80 characters"),
        Description: Yup.string()
          .required("required")
          .min(2, "Must be 10 character or more")
          .max(500, "Must be at most 500 characters"),
      })
    )
    .required(requiredText("QuoteTerms")),
  SellingPrice: Yup.number().when("QuotePrices", {
    is: (val: any, options: any) => {
      if (val?.length === 0) return true;
      return false;
    },
    then(schema) {
      return schema
        .min(1, "Rate must be greater than or equal to 1")
        .required(requiredText("Rate"));
    },
  }),
  // Margin: Yup.number().when("InputPrice", {
  //   is: (val: any, options: any) => {
  //     if (val > 0) return true;
  //     return false;
  //   },
  //   then(schema) {
  //     return schema
  //       .min(1, "Rate must be greater than or equal to 1")
  //       .required(requiredText("Margin"));
  //   },
  // }),
  GST: Yup.number().when("QuotePrices", {
    is: (val: any, options: any) => {
      if (val?.length === 0) return true;
      return false;
    },
    then(schema) {
      return schema.required(requiredText("GST"));
    },
  }),
  PartNo: Yup.string().when("QuotePrices", {
    is: (val: any, options: any) => {
      if (val?.length === 0) return true;
      return false;
    },
    then(schema) {
      return schema.required(requiredText("Part No."));
    },
  }),
  Description: Yup.string().when("QuotePrices", {
    is: (val: any, options: any) => {
      if (val?.length === 0) return true;
      return false;
    },
    then(schema) {
      return schema
        .trim()
        .min(10, minText("Description", 10))
        .max(500, maxText("Description", 500))
        .required(requiredText("Description"));
    },
    otherwise: (schema) =>
      schema
        .trim()
        .min(10, minText("Description", 10))
        .max(500, maxText("Description", 500)),
  }),
});
