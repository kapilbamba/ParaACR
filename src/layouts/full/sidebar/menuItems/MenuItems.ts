import { uniqueId } from "lodash";
import { BiFile } from "react-icons/bi";
import {
  MdPersonAddAlt,
} from "react-icons/md";

import { TRights } from "src/interface";

const Menuitems = (rights: TRights, pathname: string) => {
  const items: any = [
  
    {
      id: uniqueId(),
      title: "Responsible Organization",
      icon: MdPersonAddAlt,
      href: "/agency",
    },
    // {
    //   id: uniqueId(),
    //   title: "Visa/Passport Documents",
    //   icon: BiIdCard,
    //   href: "/visaPassport",
    // },
    {
      id: uniqueId(),
      title: "Documents",
      icon: BiFile,
      href: "/documents",
    },
  ];

  return items;
};

export default Menuitems;
