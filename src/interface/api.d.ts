export interface ITeams {
  TeamID: number | string;
  Continent: string;
  TeamName: string;
  Image: string;
  Score: null;
  AvlMan: string;
  AvlWomen: string;
  Active: 1;
  DOC: string;
}
export interface IKit {
  [key: string]: any;
  KitID: number ;
  TeamID: number ;
  UserID: number ;
  NameonJersey: string | null;
  NoofJersey: string | null;
  ShirtSize: string | null;
  TrousersSize: string | null;
  TracksuitSize: string | null;
  SocksSize: string | null;
  ShoeSize: string | null;
  ShoeType: string | null;
  KneePadsSize: string | null;
  ElbowPadsSize: string | null;
  AnkleSupportSize: string | null;
  WristbandSize: string | null;
  ChestCircumference: string | null;
  WaistCircumference: string | null;
  HipCircumference: string | null;
  ShoulderWidth: string | null;
  InseamLength: string | null;
  Height: string | null;
  Color: string | null;
  Active: number;
  Deleted: number;
  DOC: string;
  DOU: string | null;
  DOD: string | null;
}
