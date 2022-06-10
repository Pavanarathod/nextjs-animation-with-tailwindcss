import {
  HomeIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const sidebarData: { Icon: any; title: string }[] = [
  {
    Icon: HomeIcon,
    title: "Hotel",
  },
  {
    Icon: UserGroupIcon,
    title: "Members",
  },
  {
    Icon: TruckIcon,
    title: "Car rental",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Security",
  },
];

export default sidebarData;
