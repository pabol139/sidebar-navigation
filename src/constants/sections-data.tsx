import Checks from "../assets/svg/Checks";
import Diamond from "../assets/svg/Diamond";
import DiamondShinyLarge from "../assets/svg/DiamondShinyLarge";
import DiamondShinyMedium from "../assets/svg/DiamondShinyMedium";
import DiamondShinySmall from "../assets/svg/DiamondShinySmall";
import Globe from "../assets/svg/Globe";
import Hat from "../assets/svg/Hat";
import Hearts from "../assets/svg/Hearts";
import Jobs from "../assets/svg/Jobs";
import Parents from "../assets/svg/Parents";
import Press from "../assets/svg/Press";
import Rocket from "../assets/svg/Rocket";
import Security from "../assets/svg/Security";
import Tree from "../assets/svg/Tree";

export const SECTIONS_DATA = [
  {
    title: "Discover bunq",
    items: [
      {
        text: "For Students",
        url: "/",
        icon: Hat,
        iconColor: "#fa0",
      },
      {
        text: "For Expats",
        url: "/",
        icon: Globe,
        iconColor: "#ff6a00",
      },
      {
        text: "For Couples",
        url: "/",
        icon: Hearts,
        iconColor: "#f05",
      },
      {
        text: "For Parent",
        url: "/",
        icon: Parents,
        iconColor: "#bf00ff",
      },
    ],
  },
  {
    title: "Banking Plans",
    items: [
      {
        text: "bunq Free",
        url: "/",
        icon: Diamond,
        iconColor: "#00bfff",
      },
      {
        text: "bunq Core",
        url: "/",
        icon: DiamondShinySmall,
        iconColor: "#00ffd5",
      },
      {
        text: "bunq Pro",
        url: "/",
        icon: DiamondShinyMedium,
        iconColor: "#0080ff",
      },
      {
        text: "bunq Elite",
        url: "/",
        icon: DiamondShinyLarge,
        iconColor: "#f0a",
      },
      {
        text: "Compare Plans",
        url: "/",
        icon: Checks,
        iconColor: "#40bf4a",
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        text: "About Us",
        url: "/",
        icon: Rocket,
        iconColor: "#fa0",
      },
      {
        text: "Sustainability",
        url: "/",
        icon: Tree,
        iconColor: "#ff6a00",
      },
      {
        text: "Security",
        url: "/",
        icon: Security,
        iconColor: "#f05",
      },
      {
        text: "Press",
        url: "/",
        icon: Press,
        iconColor: "#f0a",
      },
      {
        text: "Jobs",
        url: "/",
        icon: Jobs,
        iconColor: "#bf00ff",
      },
    ],
  },
];
