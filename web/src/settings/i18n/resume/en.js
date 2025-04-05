import React from "react";

import {TECHSTACK, CONTACTS} from "./common";

import {
    BeatLogo,
    AsciiLogo,
    KashaLogo,
    VtbLogo,
    GpbLogo,
    VoliLogo,
    YandexLogo,
    MyOfficeLogo,
    HomeMapLogo,
} from "../../../assets/logos";

export const en = {
    aboutMe: {
        greeting: "Hello",
        iam: "I'm Daniil",
        position: "full-stack developer",
        about_rows: [
            "with strong skills in object-oriented programming, knowledge of design patterns and data structures.",
            "Moreover, I have comprehensive experience in application development: database design, backend and frontend development, integration with third-party systems."
        ]
    },
    contacts: CONTACTS,
    projects: [
        {
            title :"My Home",
            subtitle: "Nodejs, React, TypeScript",
            text: "Interactive map of smart home",
            img: HomeMapLogo,
            link: "https://home.anydany.ru/"
        },
        {
            title :"My Home. Demo",
            subtitle: "Nodejs, React, TypeScript",
            text: "Interactive map of smart home",
            img: HomeMapLogo,
            link: "https://demohome.anydany.ru/"
        },
        {
            title :"Beat Notation",
            subtitle: "React, JavaScript",
            text: "Online drum editor with realtime notation",
            img: BeatLogo,
            link: "https://beat.anydany.ru/"
        },
        {
            title: "Image to ASCII",
            subtitle: "React, JavaScript",
            text: "Online image to text converter",
            img: AsciiLogo,
            link: "https://ascii.anydany.ru/"
        },
        {
            title: "Ka`Sha Team",
            subtitle: "HTML5",
            text: "Gaming community website",
            img: KashaLogo,
            link: "https://kasha.anydany.ru/"
        },
        // {
        //     title: "Voli channel",
        //     subtitle: "HTML5",
        //     text: 'Website for "Voli channel" streamer',
        //     img: VoliLogo,
        //     link: "https://voli-channel.ru/"
        // }
    ],
    techstack: TECHSTACK,
    experience: [
        {
            title: "Senior Software Engineer",
            subtitle: "MyOffice",
            dateFrom: "2023-10-09" ,
            location: "Moscow, Russia",
            img: MyOfficeLogo
        },
        {
            title: "Frontend developer",
            subtitle: "Yandex",
            dateFrom: "2022-11-09",
            dateTo: "2023-10-09",
            location: "Moscow, Russia",
            img: YandexLogo
        },
        {
            title:"Senior Software Engineer",
            subtitle:"Gazprombank",
            dateFrom: "2019-05-01",
            dateTo: "2022-11-07",
            location: "Moscow, Russia",
            img: GpbLogo
        },
        {
            title: "Lead Specialist / Developer",
            subtitle: "VTB Bank",
            dateFrom: "2015-10-01",
            dateTo: "2019-05-01",
            location: "Moscow, Russia",         
            img: VtbLogo
        }
    ],
    education: [
        {
            title: 'NUST "MISIS"',
            subtitle: "Master's degree, Information Technology",
            dateFrom: "2015-09-01",
            dateTo: "2017-07-01",
            location: "Moscow, Russia"
        },
        {
            title: 'NUST "MISIS"',
            subtitle: "Bachelor's degree, Information Technology",
            dateFrom: "2011-09-01",
            dateTo: "2015-07-01",
            location: "Moscow, Russia"
        }
    ],
    footer: {
        glowKeys: [
            "d", "a", "n", "i", "j", "k", "e"
        ]
    }
}