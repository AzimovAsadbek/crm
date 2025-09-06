import studentIcon from "../assets/icons/studentIcon.svg?react";
import studentImg from "../assets/icons/studentImg.svg?react";
import mentorIcon from "../assets/icons/mentorIcon.svg?react";
import mentorImg from "../assets/icons/mentorImg.svg?react";
import filialIcon from "../assets/icons/filialIcon.svg?react";
import filialImg from "../assets/icons/filialImg.svg?react";

import inIcon from "../assets/icons/instagramIcon.svg?react";
import tgIcon from "../assets/icons/telegramIcon.svg?react";
import linIcon from "../assets/icons/linkedinIcon.svg?react";
import ytIcon from "../assets/icons/youtubeIcon.svg?react";

const privateData = [
    {
        id: 1,
        title: "Talabalar",
        icon: studentIcon,
        img: studentImg,
        count: "students",
    },
    {
        id: 2,
        title: "Mentorlar",
        icon: mentorIcon,
        img: mentorImg,
        count: "filials",
    },
    {
        id: 3,
        title: "Filiallar",
        icon: filialIcon,
        img: filialImg,
        count: "mentors",
    },
];

export const media = {
    0: inIcon,
    1: tgIcon,
    2: ytIcon,
    3: linIcon,
    4: linIcon,
};

export default privateData;
