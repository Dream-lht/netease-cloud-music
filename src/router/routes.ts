// const NotFound = () => import("@/view/NotFound/NotFount.vue");

const Home = () => import("@/view/home/Home.vue");
const Discover = () => import("@/view/discover/Discover.vue");

const TopList = () => import("@/view/topList/TopList.vue");
const PlayList = () => import("@/view/playList/PlayList.vue");
const Djradio = () => import("@/view/djradio/Djradio.vue");
const Artist = () => import("@/view/artist/Artist.vue");
const Album = () => import("@/view/album/Album.vue");

const My = () => import("@/view/my/My.vue");
const Friend = () => import("@/view/friend/Friend.vue");
const Download = () => import("@/view/download/Download.vue");

const routes = [
  {
    path: "/",
    redirect: "/discover",
  },
  {
    path: "/discover",
    name: "index",
    component: Home,
    redirect: "/discover/recomend",
    children: [
      {
        path: "recomend",
        name: "discover",
        component: Discover,
      },
      {
        path: "toplist",
        name: "topList",
        component: TopList,
      },
      {
        path: "playlist",
        component: PlayList,
      },
      {
        path: "djradio",
        component: Djradio,
      },
      {
        path: "artist",
        component: Artist,
      },
      {
        path: "album",
        component: Album,
      },
    ],
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
  {
    path: "/friend",
    name: "friend",
    component: Friend,
  },
  {
    path: "/download",
    name: "download",
    component: Download,
  },
];

export default routes;
