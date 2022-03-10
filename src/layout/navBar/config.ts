export interface INavBarType {
  id: number;
  path: string;
  title: string;
}

export const navBarData: INavBarType[] = [
  {
    id: 0,
    path: "/discover/recomend",
    title: "推荐",
  },
  {
    id: 1,
    path: "/discover/toplist",
    title: "排行榜",
  },
  {
    id: 2,
    path: "/discover/playlist",
    title: "歌单",
  },
  {
    id: 3,
    path: "/discover/djradio",
    title: "主播电台",
  },
  {
    id: 4,
    path: "/discover/artist",
    title: "歌手",
  },
  {
    id: 5,
    path: "/discover/album",
    title: "新碟上架",
  },
];
