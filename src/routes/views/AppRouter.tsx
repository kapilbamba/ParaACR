// eslint-disable-next-line import/no-anonymous-default-export
import { lazy } from "react";
import Loadable from "src/layouts/full/shared/loadable/Loadable";

const AgencyUserRegistration = Loadable(
  lazy(() => import("src/views/apps/agency/registration"))
);

const Documents = Loadable(lazy(() => import("src/views/apps/agency/document")));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  path: "",
  children: [
    {
      path: "agency",
      children: [
        {
          path: "",
          element: <AgencyUserRegistration />,
        },
      ],
    },
    {
      path: "documents",
      children: [
        {
          path: "",
          element: <Documents />,
        },

      ],
    },
  ],
};
