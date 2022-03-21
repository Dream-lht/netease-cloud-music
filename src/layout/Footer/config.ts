type rulesType = IRules[];

interface IRules {
  id: number;
  href: string;
  title: string;
}

export const rules: rulesType = [
  {
    id: 0,
    href: "",
    title: "服务条款",
  },
  {
    id: 1,
    href: "",
    title: "隐私政策",
  },
  {
    id: 2,
    href: "",
    title: "儿童隐私政策",
  },
  {
    id: 3,
    href: "",
    title: "版权投诉指引",
  },
  {
    id: 4,
    href: "",
    title: "联系我们",
  },
  {
    id: 5,
    href: "",
    title: "广告合作",
  },
];

type iconsType = IIcon[];
interface IIcon {
  id: number;
  iconPositionX: number;
  iconPositionY: number;
  titlePositionX: number;
  titlePositionY: number;
}

export const icons: iconsType = [
  {
    id: 0,
    iconPositionX: -63,
    iconPositionY: -456.5,
    titlePositionX: 0,
    titlePositionY: -108,
  },
  {
    id: 1,
    iconPositionX: -63,
    iconPositionY: -101,
    titlePositionX: -1,
    titlePositionY: -91,
  },
  {
    id: 2,
    iconPositionX: 0,
    iconPositionY: 0,
    titlePositionX: 0,
    titlePositionY: 0,
  },
  {
    id: 3,
    iconPositionX: -60,
    iconPositionY: -50,
    titlePositionX: 0,
    titlePositionY: -54,
  },
  {
    id: 4,
    iconPositionX: 0,
    iconPositionY: -101,
    titlePositionX: -1,
    titlePositionY: -72,
  },
];
