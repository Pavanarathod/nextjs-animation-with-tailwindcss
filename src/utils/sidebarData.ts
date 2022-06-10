import {
  HomeIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const sidebarData: { Icon: any; title: string; active?: boolean }[] = [
  {
    Icon: HomeIcon,
    title: "Hotel",
    active: true,
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
