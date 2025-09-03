export const formInuputStep1 = (type?: string) => {
  return [
    {
      type: "text",
      name: "FirstName",
      label: "First Name",
      isRequired: true,
      className: "col-span-2",
    },
    {
      type: "text",
      name: "MiddleName",
      label: "Middle Name ",
      isRequired: false,
      className: "col-span-2",
    },

    {
      type: "text",
      label: "Last Name",
      name: "LastName",
      isRequired: true,
      className: "col-span-2",
    },

    {
      type: "date",
      label: "Date of Birth",
      name: "DOB",
      isRequired: true,
      className: "col-span-2",
    },
    {
      type: "text",
      isRequired: true,
      label: "Title/Position",
      name: "Designation",
      className: "col-span-2",
    },

    {
      type: "text",
      label: "Father's Name",
      name: "FatherName",
      isRequired: true,
      className: "col-span-2",
    },

    {
      type: "autocomplete",
      label: "Gender",
      name: "Gender",
      isRequired: true,
      disabled: type === "Player",
      className: "col-span-2",
    },
    {
      type: "text",
      label: "Email",
      name: "EmailID",
      isRequired: true,
      className: "col-span-2",
    },
    {
      type: "number",
      label: "Mobile",
      name: "MobileNo",
      isRequired: true,
      className: "col-span-2",
    },
    {
      type: "textarea",
      label: "Address",
      name: "Address",
      isRequired: false,
      className: "col-span-2",
    },
    {
      type: "autocomplete",
      label: "Identity ID",
      name: "IdenID",
      isRequired: true,
      className: "col-span-2",
    },
  ];
};
export const formInuputStep2 = (SameAddress: boolean) => {
  return [
    {
      navlabel: true,
      subheader: "Current Address",
      className: "col-span-4 mt-2  border-b",
      name: "2",
    },
    {
      type: "text",
      name: "CAddress",
      label: "Address",
      isRequired: true,
      className: "col-span-4",
    },
    {
      type: "text",
      label: "City",
      name: "CCity",
      isRequired: true,
      className: "",
    },
    {
      type: "text",
      label: "State",
      name: "CState",
      isRequired: false,
      className: "",
    },
    {
      type: "text",
      label: "Zipcode/Pincode",
      name: "CPincode",
      isRequired: false,
      className: "",
    },
    // {
    //   type: "autocomplete",
    //   name: "CCountry",
    //   label: "Country",
    //   isRequired: true,
    //   className: "",
    // },

    {
      checkbox: true,
      name: "SameAddress",
      className: "col-span-4 mb-2",
    },
    {
      navlabel: true,
      subheader: "Permanent Address",
      className: "col-span-4 mt-2 border-b ",
      name: "1",
      disabled: SameAddress,
    },
    {
      type: "text",
      name: "PAddress",
      label: "Address",
      isRequired: true,
      disabled: SameAddress,
      className: "col-span-4",
    },
    {
      type: "text",
      label: "City",
      name: "PCity",
      isRequired: true,
      className: "",
      disabled: SameAddress,
    },
    {
      type: "text",
      label: "State",
      name: "PState",
      isRequired: false,
      className: "",
      disabled: SameAddress,
    },
    {
      type: "text",
      label: "Zipcode/Pincode",
      name: "PPincode",
      isRequired: false,
      className: "",
      disabled: SameAddress,
    },
    // {
    //   type: "autocomplete",
    //   label: "Country",
    //   name: "PCountry",
    //   isRequired: true,
    //   className: "",
    //   disabled: SameAddress,
    // },
  ];
};
export const formInuputStep3 = (variant?: string) => {
  return [
    {
      navlabel: true,
      subheader: "Visa / Passport Details",
      className: "col-span-4 mt-2  border-b",
      name: "13",
    },
    {
      checkbox: true,
      name: "TypeofID",
      className: "col-span-4 mb-2",
    },

    {
      type: "text",
      label: "ID Number",
      name: "IDNumber",
      isRequired: variant === "visa",
      className: "",
    },

    {
      type: "text",
      label: "Place of Issue",
      name: "PlaceofIssue",
      isRequired: variant === "visa",
      className: "",
    },
    {
      type: "date",
      label: "Issue Date",
      name: "IssueDate",
      isRequired: variant === "visa",
      className: "",
    },
    {
      type: "date",
      label: "Expiry Date",
      name: "ExpiryDate",
      isRequired: variant === "visa",
      className: "",
    },

    {
      type: "text",
      label: "Visa Number",
      name: "VisaNo",
      isRequired: false,
      className: "",
    },
  ];
};
