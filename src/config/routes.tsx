import {
  AiOutlineHome,
  AiFillHome,
  AiFillSetting,
  AiOutlineSetting,
  AiOutlineAndroid,
  AiFillAndroid,
  AiFillDatabase,
  AiOutlineDatabase,
} from "react-icons/ai";

import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { PiUsersThreeFill, PiUsersThreeLight } from "react-icons/pi";
import { FaRegUser, FaUser } from "react-icons/fa";
import {
  MdOutlineHomeRepairService,
  MdHomeRepairService,
} from "react-icons/md";

import { IoShieldCheckmarkOutline, IoShieldCheckmark } from "react-icons/io5";

export const routes = [
  {
    id: "home",
    title: "主页",
    href: "/",
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    id: "repairs",
    title: "维修管理",
    href: "/repairs",
    icon: MdOutlineHomeRepairService,
    activeIcon: MdHomeRepairService,
  },
  {
    id: "customers",
    title: "客户中心",
    href: "/customers",
    icon: FaRegUser,
    activeIcon: FaUser,
  },
  {
    id: "components",
    title: "配件管理",
    href: "/components",
    icon: AiOutlineDatabase,
    activeIcon: AiFillDatabase,
  },
  {
    id: "warranties",
    title: "保修管理",
    href: "/warranties",
    icon: IoShieldCheckmarkOutline,
    activeIcon: IoShieldCheckmark,
  },

  {
    id: "suppliers",
    title: "供应商",
    href: "/suppliers",
    icon: PiUsersThreeLight,
    activeIcon: PiUsersThreeFill,
  },
  {
    id: "phones",
    title: "手机型号大全",
    href: "/phones",
    icon: AiOutlineAndroid,
    activeIcon: AiFillAndroid,
  },
  {
    id: "user-account",
    title: "保修账号",
    href: "/user-account",
    icon: RiAccountCircleLine,
    activeIcon: RiAccountCircleFill,
  },
  {
    id: "settings",
    title: "设置",
    href: "/settings",
    icon: AiOutlineSetting,
    activeIcon: AiFillSetting,
  },
];
