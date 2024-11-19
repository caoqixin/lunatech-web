import { Option } from "@/components/custom/multiple-selector";

export const SupplierCategoryOptions: Option[] = [
  { label: "手机维修配件", value: "RICAMBI" },
  { label: "手机原装外配", value: "ORIGINALE" },
  { label: "手机外配", value: "ACCESSORI" },
  { label: "数码设备", value: "DISPOSITIVO" },
  { label: "hoco", value: "HOCO" },
  { label: "borofone", value: "BOROFONE" },
  { label: "arte", value: "ARTE" },
  { label: "手机批发", value: "TELEFONI" },
  { label: "电脑批发", value: "PC" },
  { label: "平板批发", value: "TABLET" },
  { label: "二手设备", value: "USATO" },
];

export enum SupplierCategoryOptionsEnum {
  RICAMBI = "手机维修配件",
  ORIGINALE = "手机原装外配",
  ACCESSORI = "手机外配",
  DISPOSITIVO = "数码设备",
  HOCO = "hoco",
  BOROFONE = "borofone",
  ARTE = "arte",
  TELEFONI = "手机批发",
  PC = "电脑批发",
  TABLET = "平板批发",
  USATO = "二手设备",
}
