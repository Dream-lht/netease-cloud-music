export interface INavgatType {
  id: number;
  path?: string;
  href?: string;
  title: string;
  handleRouter: () => boolean;
}

export const navigatData: INavgatType[] = [
  {
    id: 0,
    path: "/discover",
    title: "发现音乐",
    handleRouter: () => true,
  },
  {
    id: 1,
    path: "/my",
    title: "我的音乐",
    handleRouter: () => true,
  },
  {
    id: 2,
    path: "/friend",
    title: "关注",
    handleRouter: () => true,
  },
  {
    id: 3,
    href: "https://music.163.com/store/product",
    title: "商城",
    handleRouter: () => false,
  },
  {
    id: 4,
    href: "https://music.163.com/st/musician",
    title: "音乐人",
    handleRouter: () => false,
  },
  {
    id: 5,
    path: "/download",
    title: "下载客户端",
    handleRouter: () => true,
  },
];
