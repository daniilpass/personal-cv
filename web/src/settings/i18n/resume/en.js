import React from "react";

import {TECHSTACK, CONTACTS} from "./common";

import {
    BeatLogo,
    AsciiLogo,
    KashaLogo,
    VtbLogo,
    GpbLogo,
    VoliLogo,
    YandexLogo
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
            title :"Beat Notation",
            subtitle: "React, JavaScript",
            text: <>Online drum editor with realtime notation <br/> https://beat.daniilpass.dev/</>,
            img: BeatLogo,
            link: "https://beat.daniilpass.dev/"
        },
        {
            title: "Image to ASCII",
            subtitle: "React, JavaScript",
            text: <>Online image to text converter <br/> https://ascii.daniilpass.dev/</>,
            img: AsciiLogo,
            link: "https://ascii.daniilpass.dev/"
        },
        {
            title: "Ka`Sha Team",
            subtitle: "HTML5",
            text: <>Gaming community website<br/> https://kasha.daniilpass.dev/</>,
            img: KashaLogo,
            link: "https://kasha.daniilpass.dev/"
        },
        {
            title: "Voli channel",
            subtitle: "HTML5",
            text: <>Website for "Voli channel" streamer <br/> https://voli-channel.ru/</>,
            img: VoliLogo,
            link: "https://voli-channel.ru/"
        }
    ],
    techstack: TECHSTACK,
    experience: [
        {
            title: "Frontend developer",
            subtitle: "Yandex",
            dateFrom: "2022-11-09" ,
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
            "B", "y", "e", 
        ]
    }
}