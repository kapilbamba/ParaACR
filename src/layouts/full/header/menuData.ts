import { TRights } from "../../../interface";
import { RiAdminLine } from "react-icons/ri";

export const appsLink = (rights: TRights) =>
  [
    {
      href: "/agency",
      title: "Participant Registration",
      subtext: "Registration",
      avatar: RiAdminLine,
      disabled: false,
      hidden: false,
      bgColor: "#d7ecf7",
      iconColor: "#225f81",
    },
    {
      href: "/playerKitting",
      title: "Kitting Details",
      subtext: "Kitting",
      avatar: RiAdminLine,
      disabled: false,
      hidden: false,
      bgColor: "#d7ecf7",
      iconColor: "#225f81",
    },
    {
      href: "/playerPerformance",
      title: "Performance Details",
      subtext: "Performance",
      avatar: RiAdminLine,
      disabled: false,
      hidden: false,
      bgColor: "#d7ecf7",
      iconColor: "#225f81",
    },
  ].sort((a, b) => a.subtext.localeCompare(b.subtext));
