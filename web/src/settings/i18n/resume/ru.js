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
    MyOfficeLogo
} from "../../../assets/logos";

export const ru = {
    aboutMe: {
        greeting: "Привет",
        iam: "Я Даниил",
        position: "full-stack разработчик",
        about_rows: [
            "Обладаю сильными навыками ООП, знаниями шаблонов проектирования и структур данных.",
            "Имею опыт комплексной разработки приложений: проектирование баз данных, написание серверной и клиентской частей, интеграция со сторонними системами.",
        ]
    },
    contacts: CONTACTS,
    projects: [
        {
            title :"Beat Notation",
            subtitle: "React, JavaScript",
            text: <>Онлайн редактор ударных с просмотром нот в реальном времени<br/> https://beat.anydany.ru/</>,
            img: BeatLogo,
            link: "https://beat.anydany.ru/"
        },
        {
            title: "Image to ASCII",
            subtitle: "React, JavaScript",
            text: <>Онлайн конвертер изображений в текст <br/> https://ascii.anydany.ru/</>,
            img: AsciiLogo,
            link: "https://ascii.anydany.ru/"
        },
        {
            title: "Ka`Sha Team",
            subtitle: "HTML5",
            text: <>Сайт игрового сообщества <br/> https://kasha.anydany.ru/</>,
            img: KashaLogo,
            link: "https://kasha.anydany.ru/"
        },
        // {
        //     title: "Voli channel",
        //     subtitle: "HTML5",
        //     text: <>Сайт для стримера "Voli channel" <br/> https://voli-channel.ru/</>,
        //     img: VoliLogo,
        //     link: "https://voli-channel.ru/"
        // }
    ],
    techstack: TECHSTACK,
    experience: [
        {
            title: "Старший инженер-программист",
            subtitle: "МойОфис",
            dateFrom: "2023-10-09",
            location: "Москва, Россия",
            img: MyOfficeLogo
        },
        {
            title: "Разработчик интерфейсов",
            subtitle: "Яндекс",
            dateFrom: "2022-11-09",
            dateTo: "2023-10-09",
            location: "Москва, Россия",
            img: YandexLogo
        },
        {
            title: "Главный инженер разработки",
            subtitle: "Газпромбанк",
            dateFrom: "2019-05-01" ,
            dateTo: "2022-11-07",
            location: "Москва, Россия",
            img: GpbLogo
        },
        {
            title: "Ведущий специалист / Разработчик",
            subtitle: "Банк ВТБ",
            dateFrom: "2015-10-01",
            dateTo: "2019-05-01",
            location: "Москва, Россия",         
            img: VtbLogo
        }
    ],
    education: [
        {
            title: 'НИТУ "МИСИС"',
            subtitle: "Магистр, Информационные технологии",
            dateFrom: "2015-09-01",
            dateTo: "2017-07-01",
            location: "Москва, Россия"
        },
        {
            title: 'НИТУ "МИСИС"',
            subtitle: "Бакалавр,  Информационные технологии",
            dateFrom: "2011-09-01",
            dateTo: "2015-07-01",
            location: "Москва, Россия"
        }
    ],
    footer: {
        glowKeys: [
            "d", "a", "n", "i", "j", "k", "e"
        ]
    }
}