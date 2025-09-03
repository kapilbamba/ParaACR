import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
/* eslint-disable array-callback-return */
import { enqueueSnackbar } from "notistack";
import { getImgUrl } from "src/http/server-base";
import { TRights } from "src/interface";
import NoImg from "src/assets/images/noImg.svg";
import MenNoImg from "src/assets/images/menPlayer.png";
import WomenNoImg from "src/assets/images/womenPlayer.png";

dayjs.extend(RelativeTime);

export const RealativeDate = (date: string) => {
  return dayjs(date).fromNow();
};

export const currencyIndiaFormat = (number: number | string) => {
  let Rupee = new Intl.NumberFormat("en-IN").format(+number);
  return Rupee;
};

export const queryToStr = (queryObj: Record<string, string>) => {
  const query = [];
  for (const key in queryObj) {
    query.push(
      encodeURIComponent(key)
        .concat("=")
        .concat(encodeURIComponent(queryObj[key]))
    );
  }
  return query.length ? query.join("&") : "";
};

export const getNameChar = (name: string) => {
  let n = name?.split(" ");
  return n
    ? n[0][0] + (n.length > 1 ? n[n.length - 1][0] : n[0][n[0].length - 1])
    : "A";
};

export const getPayload = (
  original: { [key: string]: any },
  payload?: Array<string>
) => {
  let result: { [key: string]: any } = {};
  if (payload) {
    payload?.map((item) => {
      result[item] = original[item];
    });
  }
  return result;
};
export const checkBoxToString = (checkBoxList: any) => {
  let b = "";
  for (let i = 0; i < checkBoxList?.length; i++) {
    b += `${checkBoxList[i] + (i < checkBoxList?.length - 1 ? "," : "")}`;
  }
  return b;
};
export function sortArrByProperty(array: any, propertyName: string) {
  const newArray = [...array];
  if (newArray?.length > 0 && newArray[0]?.hasOwnProperty(propertyName)) {
    newArray?.sort((a, b) => {
      const valueA = a[propertyName];
      const valueB = b[propertyName];

      return typeof valueA === "string" && typeof valueB === "string"
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    });
    return newArray;
  } else {
    console.error(`Property ${propertyName} not found in the array objects.`);
  }
}

export function blob2file(blobData: Blob, fileName: string | undefined) {
  const fd = new FormData();
  fd.set("a", blobData, fileName);
  return fd.get("a");
}

export const sortArray = (
  array: Array<Record<string, string>>,
  propertyName: string
) => {
  return array.sort((a, b) =>
    a[propertyName]?.toLowerCase() > b[propertyName]?.toLowerCase()
      ? 1
      : b[propertyName]?.toLowerCase() > a[propertyName]?.toLowerCase()
      ? -1
      : 0
  );
};

export const getTextFromObj = (
  obj: Record<string, string>,
  key: string,
  seprator = ", "
) => {
  let s = "";
  if (Array.isArray(key))
    key.forEach((k, i) => {
      s += obj[k] ? `${i !== 0 ? seprator : ""}${obj[k] || ""}` : "";
    });
  else s = obj[key];

  return s;
};

export const getImageName = (name: string) => {};

export const replacement = (
  string: string,
  replacements: Record<string, string>
) => {
  return string.replace(/%(\w*)%/g, function (m, key) {
    return replacements.hasOwnProperty(key) ? replacements[key] : "";
  });
};

export function capitalizeFirstWord(sentence: string) {
  if (sentence) {
    const words = sentence.split(" ");

    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    return words.join(" ");
  } else {
    return sentence;
  }
}
export function capitalizeFirstChar(text: string) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function generateEmailRegex() {
  const username = "[a-zA-Z0-9._%+-]+";
  const domain = "[a-zA-Z0-9.-]+";
  const tld = "[a-zA-Z]{2,}";

  return new RegExp(`^${username}@${domain}\\.${tld}$`);
}

export function roundToDecimalPlaces(value: number, decimalPlaces?: number) {
  const factor = Math.pow(10, decimalPlaces || 2);
  return Math.round(value * factor) / factor || 0;
}
export function fcs() {
  enqueueSnackbar("Feature Coming Soon", {
    variant: "success",
  });
}
export function noRightsToast() {
  enqueueSnackbar("Sorry, you don't have rights contact to admin.", {
    variant: "error",
  });
}

export const createFormField = (
  type: string,
  name: string,
  label: string,
  isRequired?: boolean | undefined,
  className?: string | undefined,
  isLoading?: boolean | undefined,
  data?: any,
  objFilter?: { title: string; value: string } | undefined
) => ({
  type,
  name,
  label,
  isRequired: isRequired || false,
  className: className || "",
  isLoading: isLoading || false,
  options: data || [],
  objFilter: objFilter || {},
});

export const YearData = [
  {
    id: 1,
    year:
      dayjs().get("month") < 3
        ? (dayjs().get("year") - 1).toString()
        : dayjs().get("year")?.toString(),
    title:
      dayjs().get("year")?.toString() +
      "-" +
      dayjs().add(1, "year").get("year")?.toString().substring(2, 4),
  },
  {
    id: 2,
    year: dayjs().subtract(1, "year").get("year")?.toString(),
    title:
      dayjs().subtract(1, "year").get("year")?.toString() +
      "-" +
      dayjs().get("year")?.toString().substring(2, 4),
  },
  {
    id: 3,
    year: dayjs().subtract(2, "year").get("year")?.toString(),
    title:
      dayjs().subtract(2, "year").get("year")?.toString() +
      "-" +
      dayjs().subtract(1, "year").get("year")?.toString().substring(2, 4),
  },
  {
    id: 4,
    year: dayjs().subtract(3, "year").get("year")?.toString(),
    title:
      dayjs().subtract(3, "year").get("year")?.toString() +
      "-" +
      dayjs().subtract(2, "year").get("year")?.toString().substring(2, 4),
  },
  {
    id: 5,
    year: dayjs().subtract(4, "year").get("year")?.toString(),
    title:
      dayjs().subtract(4, "year").get("year")?.toString() +
      "-" +
      dayjs().subtract(3, "year").get("year")?.toString().substring(2, 4),
  },
];
export const MonthsData = [
  { id: 4, value: "April", title: "April", shortTitle: "Apr" },
  { id: 5, value: "May", title: "May", shortTitle: "May" },
  { id: 6, value: "June", title: "June", shortTitle: "Jun" },
  { id: 7, value: "July", title: "July", shortTitle: "Jul" },
  { id: 8, value: "August", title: "August", shortTitle: "Aug" },
  { id: 9, value: "September", title: "September", shortTitle: "Sep" },
  { id: 10, value: "October", title: "October", shortTitle: "Oct" },
  { id: 11, value: "November", title: "November", shortTitle: "Nov" },
  { id: 12, value: "December", title: "December", shortTitle: "Dec" },
  { id: 1, value: "January", title: "January", shortTitle: "Jan" },
  { id: 2, value: "February", title: "February", shortTitle: "Feb" },
  { id: 3, value: "March", title: "March", shortTitle: "Mar" },
];

export const isProduction = () => {
  let mode = process.env.REACT_APP_MODE;

  return mode?.toLowerCase() === "prod" || mode?.toLowerCase() === "stage";
};
export const QuarterData = [
  { title: "Q1", value: "1" },
  { title: "Q2", value: "2" },
  { title: "Q3", value: "3" },
  { title: "Q4", value: "4" },
];
export const PeriodData = [
  { title: "Monthly", value: "1" },
  { title: "Quarterly", value: "3" },
  { title: "Yearly", value: "12" },
];
export const QuoteTerms = [
  {
    Id: 1,
    Active: 0,
    TermName: "Taxes",
    Description: "GST extra as mentioned against each other.",
  },
  {
    Id: 2,
    Active: 1,
    TermName: "Delivery",
    Description:
      "The items will be delivered according to the timelines provided.",
  },
  {
    Id: 3,
    Active: 1,
    TermName: "Installation",
    Description: "As per services quoted above.",
  },
  {
    Id: 4,
    Active: 1,
    TermName: "Validity",
    Description:
      "The quote is valid for orders received on or before the close of business hours of the validity data above.",
  },
  {
    Id: 5,
    Active: 0,
    TermName: "Payment",
    Description: "100 % advance along with Purchase Order",
  },
  {
    Id: 6,
    Active: 1,
    TermName: "Warranty",
    Description: "Warranty on all items is 3 Years from the date of supply",
  },
];
export const GstData = [
  {
    value: "5",
    title: "5%",
  },
  {
    value: "12",
    title: "12%",
  },
  {
    value: "18",
    title: "18%",
  },
  {
    value: "28",
    title: "28%",
  },
];
export const getActiveModule = (rights: TRights, module_name: string) => {
  if (!rights || !rights.length) return false;

  const module = rights?.find((m) => m?.ModuleName === module_name);
  if (!module || !module?.Rights?.length) return false;
  return module?.Rights?.some((right: any) => right?.Active === 1);
};
export function deleteKeyValueInObject<T extends object>(
  key: string,
  obj: T
): void {
  if (key in obj) {
    delete obj[key as keyof T];
  }
}

export const numberToWords = (num: number): string => {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const scales = ["", "Thousand", "Lakh", "Crore"];

  if (num === 0) return "Zero";

  let words = "";

  const getWords = (n: number): string => {
    let word = "";

    if (n > 19) {
      word += tens[Math.floor(n / 10)] + (n % 10 ? " " + units[n % 10] : "");
    } else {
      word += units[n];
    }

    return word.trim();
  };

  const convertToWords = (n: number, scale: number): string => {
    let word = "";

    if (n > 0) {
      word +=
        getWords(Math.floor(n / 100)) +
        (Math.floor(n / 100) > 0 ? " Hundred " : "");
      word += getWords(n % 100);
      word += " " + scales[scale];
    }

    return word.trim();
  };

  const crorePart = Math.floor(num / 10000000);
  num = num % 10000000;

  const lakhPart = Math.floor(num / 100000);
  num = num % 100000;

  const thousandPart = Math.floor(num / 1000);
  num = num % 1000;

  const hundredPart = Math.floor(num / 100);
  const remainder = num % 100;

  if (crorePart > 0) {
    words += convertToWords(crorePart, 3) + " ";
  }
  if (lakhPart > 0) {
    words += convertToWords(lakhPart, 2) + " ";
  }
  if (thousandPart > 0) {
    words += convertToWords(thousandPart, 1) + " ";
  }
  if (hundredPart > 0) {
    words += getWords(hundredPart) + " Hundred ";
  }
  if (remainder > 0) {
    words += getWords(remainder);
  }

  return "Rupees " + capitalizeFirstChar(words.trim()) + " only";
};

export function calculateTotalInclGstAmt(
  total: number | string,
  gst: number | string
) {
  const gstAmt = (Number(total) * Number(gst)) / 100;

  let amtWithGst = Number(gstAmt) + Number(total);
  return amtWithGst;
}

export const getImageUrl = (
  type: string = "common",
  fileName: string,
  category?: string
): string => {
  if (fileName) {
    return `${getImgUrl}${type}/${fileName}`;
  }

  switch (category) {
    case "Men":
    case "Male":
      return MenNoImg;
    case "Women":
    case "Female":
      return WomenNoImg;
    default:
      return NoImg;
  }
};

export const genderData = [
  {
    label: "Male",
    label1: "Men",
    labe2: "Man",
    shortLabel: "M",
  },
  {
    label: "Female",
    label1: "Women",
    labe2: "Woman",
    shortLabel: "W",
  },
];
export const visaStatusData = [
  {
    label: "Pending",
    label1: "Pending",
    label2: "Awaiting Approval",
    shortLabel: "Pending",
  },
  {
    label: "Approved",
    label1: "Approved",
    label2: "Granted",
    shortLabel: "Approved",
  },
  {
    label: "Rejected",
    label1: "Rejected",
    label2: "Denied",
    shortLabel: "Rejected",
  },
];

export const sessionData = [
  {
    label: "Morning",
  },
  {
    label: "Afternoon",
  },
  {
    label: "Evening",
  },
];
export const continentData = [
  {
    label: "Africa",
  },
  {
    label: "Asia",
  },
  {
    label: "Europe",
  },
  {
    label: "North America",
  },
  {
    label: "South America",
  },
  {
    label: "Antarctica",
  },
  {
    label: "Australia",
  },
];
export const PlayerRoleData = [
  {
    label: "All Rounder",
  },
  {
    label: "Runner",
  },
  {
    label: "Defender",
  },
  {
    label: "Wazir",
  },
];

export const documentData = [
  {
    id: 1,
    label: "Passport",
  },
  {
    id: 2,
    label: "Official Govt. ID Card",
  },
  {
    id: 3,
    label: "Voter ID",
  },
  {
    id: 4,
    label: "School/College ID Card",
  },
  {
    id: 5,
    label: "AADHAAR Card",
  },
];
export const groupData = [
  {
    id: 1,
    label: "A",
  },
  {
    id: 2,
    label: "B",
  },
  {
    id: 3,
    label: "C",
  },
  {
    id: 4,
    label: "D",
  },
];
export const participantTypeData = (
  type?: string,
  managerCount?: number,
  coachCount?: number,
  supportStaffCount?: number,
  values?: { [key: string]: string }
) => {


  if (type === "Coach") {
    return [
      ...(managerCount && values?.AcrName !== "Manager"
        ? []
        : [
            {
              id: 2,
              label: "Manager",
            },
          ]),
      ...(coachCount && values?.AcrName !== "Coach"
        ? []
        : [
            {
              id: 3,
              label: "Coach",
            },
          ]),
      ...(supportStaffCount && values?.AcrName !== "Support Staff"
        ? []
        : [
            {
              id: 4,
              label: "Support Staff",
            },
          ]),
    ];
  }

  return [
    {
      id: 1,
      label: "Player",
    },
  ];
};

export function areSpecificKeysFilled(
  array: { [key: string]: string }[],
  keys: string[]
) {
  // Check if the input is an array and keys is an array
  if (!Array.isArray(array) || !Array.isArray(keys)) {
    throw new Error("Input must be an array of objects and an array of keys.");
  }

  return array.every(
    (obj) =>
      typeof obj === "object" &&
      obj !== null &&
      keys.every(
        (key) =>
          obj[key] !== null &&
          obj[key] !== undefined &&
          obj[key] !== "" &&
          !Number.isNaN(obj[key])
      )
  );
}

export function getFileExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex !== -1 && dotIndex < fileName.length - 1
    ? fileName.slice(dotIndex + 1)
    : "";
}

export const designationData = [
  {
    id: 3,
    label: "Guest",
  },
  {
    id: 5,
    label: "President",
  },
  {
    id: 10,
    label: "Secretary",
  },

  {
    id: 12,
    label: "Other",
  },
];