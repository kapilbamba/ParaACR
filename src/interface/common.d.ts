import { FormikErrors, FormikTouched } from "formik";
import React from "react";

export interface IPageContainer {
  title: string;
  description?: string;
  children: React.ReactNode;
}
export interface FormValues {
  [key: string]: string | any;
}

export interface IFormDialogProps {
  open: boolean;
  close: () => void;
  dataValues?: FormValues | any;
  reload?: any;
  variant?: "add" | "edit";
  CompanyID?: any;
  selectMonth?: any;
  selectYear?: any;
  CompanyTypeID?: any;
  CompanyTypeDopwon?:boolean;
}


export interface IFormDetailDialogProps {
  open:boolean
  close:()=>void
  data?:FormValues;
}

export interface IFormProps {
  values: FormValues;
  actualValue?: FormValues;
  handleBlur: {
    /** Classic React blur handler, keyed by input name */
    (e: React.FocusEvent<any>): void;
    /** Preact-like linkState. Will return a handleBlur function. */
    <T = string | any>(fieldOrEvent: T): T extends string
      ? (e: any) => void
      : void;
  };
  fileInfo?: any;
  setFileInfo?: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  variant?: "add" | "edit" | string;
  setFieldValue?: any;
  setFieldTouched?: any;
  setFieldError?: any;
  setErrors?: any;
  setTouched?: any;
  validateField?: any;
  selectMonth?: any;
  selectYear?: any;
  setAddUmbrella?: any;
  setAddVertical?: any;
  CompanyTypeDopwon?: boolean;
  handleChange: {
    /** Classic React change handler, keyed by input name */
    (e: React.ChangeEvent<any>): void;
    /** Preact-like linkState. Will return a handleChange function.  */
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

export interface IRight {
  ModuleID: number;
  ModuleName: string;
  Rights: any;
}

export type TRights = Array<IRight>;
