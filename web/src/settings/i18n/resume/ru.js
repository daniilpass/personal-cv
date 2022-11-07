import React from "react";
import BitbucketLogo from "../../../assets/img/bitbucket.png";
import TelegramLogo from "../../../assets/img/telegram.png"
import LinkedinLogo from "../../../assets/img/linkedin.png"
import BeatLogo from "../../../assets/img/beat.png";
import AsciiLogo from "../../../assets/img/ascii.png";
import KashaLogo from "../../../assets/img/kasha.png";
import VtbLogo from "../../../assets/img/vtb.png";
import GpbLogo from "../../../assets/img/gpb.png";
import VoliLogo from "../../../assets/img/voli.jpeg";
import YandexLogo from "../../../assets/img/yandex.png";

export const ru = {
    aboutMe: {
        greeting: "Привет",
        iam: "Я Даниил",
        position: "full-stack .NET разработчик",
        about_rows: [
            "Обладаю сильными навыками ООП, знаниями шаблонов проектирования и структур данных.",
            "Кроме того, имею опыт параллельного и асинхронного программирования.",
            "Знаком с архитектурой и разработкой веб приложений."
        ]
    },
    contacts:[
        {            
            title: "Bitbucket",
            link: "https://bitbucket.org/daniilpass",
            img: BitbucketLogo
        },
        {
            title: "Telegram",
            link: "https://t.me/daniilpass",
            img: TelegramLogo
        },
        {
            title: "LinkedIn",
            link: "https://linkedin.com/in/daniilpass",
            img: LinkedinLogo
        }
    ],
    projects: [
        {
            title :"Beat Notation",
            subtitle: "React, JavaScript",
            text: <>Онлайн редактор ударных с просмотром нот в реальном времени<br/> https://beatnotation.me/</>,
            img: BeatLogo,
            link: "https://beatnotation.me/"
        },
        {
            title: "Image to ASCII",
            subtitle: "React, JavaScript",
            text: <>Онлайн конвертер изображений в текст <br/> https://ascii.daniilpass.dev/</>,
            img: AsciiLogo,
            link: "https://ascii.daniilpass.dev/"
        },
        {
            title: "Ka`Sha Team",
            subtitle: "HTML5",
            text: <>Сайт игрового сообщества <br/> https://kasha.team/</>,
            img: KashaLogo,
            link: "https://kasha.team/"
        },
        {
            title: "Voli channel",
            subtitle: "HTML5",
            text: <>Сайт для стримера "Voli channel" <br/> https://voli-channel.ru/</>,
            img: VoliLogo,
            link: "https://voli-channel.ru/"
        }
    ],
    techstack:{
        mainSkills: [
            "C#",
            "React",
            "ASP.NET Web API"
        ],
        otherSkills: [
            ".NET",
            "ASP.NET",
            "Entity Framework",
            "Microsoft SQL Server",
            "Transact-SQL (T-SQL)",
            "Internet Information Services (IIS)",
            "Windows Services",
            "REST APIs",
            "SOAP",
            "Webpack",
            "JavaScript",
            "HTML",
            "CSS",
        ]
    },
    experience: [
        {
            title: "Разработчик интерфейсов",
            subtitle: "Яндекс",
            dateFrom: "2022-11-09" ,
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
            "B", "y", "e"
        ]
    }
}