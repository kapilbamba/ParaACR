declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
declare module "*.gif";
// declare module "*.ttf";
declare module "*.ttf" {
  const value: any;
  export default value;
}
declare module "react-qr-scanner" {
  import React from "react";

  export interface QRScannerProps {
    delay?: number;
    onError?: (error: any) => void;
    onScan?: (data: string | null) => void;
    style?: React.CSSProperties;
    facingMode?: "user" | "environment";
    constraints?: {
      video: { facingMode: "user" | "environment" };
    };
    legacyMode?: boolean;
    maxImageSize?: number;
    className?: string;
  }

  const QrReader: React.FC<QRScannerProps>;

  export default QrReader;
}
