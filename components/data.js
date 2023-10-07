import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits",
  image: benefitOneImg,
  bullets: [
    {
      title: "Save your precious time",
      desc: "Stop annoying your co-workers, instead ask Chatument.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Use it directly from you workspace",
      desc: "Integrated with Slack, and more tools are on the way.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Write down everything you think",
      desc: "We can get value from your ideas no matter how many.",
      icon: <LightBulbIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
