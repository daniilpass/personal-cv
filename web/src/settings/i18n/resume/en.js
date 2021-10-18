import React from "react";
import BitbucketLogo from "../../../assets/img/bitbucket.png";
import TelegramLogo from "../../../assets/img/telegram.png"
import LinkedinLogo from "../../../assets/img/linkedin.png"
import BeatLogo from "../../../assets/img/beat.png";
import KashaLogo from "../../../assets/img/kasha.png";
import VtbLogo from "../../../assets/img/vtb.png";
import GpbLogo from "../../../assets/img/gpb.png";

export const en = {
    navigation: {
        hello: "Hello",
        projects: "Projects",
        techstack: "Tech stack",
        experience: "Experience",
        education: "Education",
    },
    aboutMe: {
        greeting: "Hello",
        iam: "I'm Daniil",
        position: "full-stack .NET developer",
        about_rows: [
            "I have strong skills in object-oriented programming, knowledge of design patterns and data structures.",
            "Moreover, I have experience in parallel and asynchronous programming.",
            "Familiar with the web development."
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
            subtitle: "React",
            text: <>Online drum editor with realtime notation <br/> https://beatnotation.me/</>,
            img: BeatLogo,
            link: "https://beatnotation.me/"
        },
        {
            title: "Ka`Sha Team",
            subtitle: "HTML5",
            text: <>Friends squad website <br/> https://kasha.team/</>,
            img: KashaLogo,
            link: "https://kasha.team/"
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
            title:"Senior Software Engineer",
            subtitle:"Gazprombank",
            dateFrom: "2019-05-01" ,
            location: "Moscow, Russia",
            img: GpbLogo,            
            rangeTemplate: "#F - #T, #Y yrs #M mos"
        },
        {
            title: "Lead Specialist / Developer",
            subtitle: "VTB Bank",
            dateFrom: "2015-10-01",
            dateTo: "2019-05-01",
            location: "Moscow, Russia",         
            img: VtbLogo,
            rangeTemplate: "#F - #T, #Y yrs #M mos"
        }
    ],
    education: [
        {
            title: 'NUST "MISIS"',
            subtitle: "Master's degree, Information Technology",
            dateFrom: "2015-09-01",
            dateTo: "2017-07-01",
            location: "Moscow, Russia",
            rangeTemplate: "#F - #T"
        },
        {
            title: 'NUST "MISIS"',
            subtitle: "Bachelor's degree, Information Technology",
            dateFrom: "2011-09-01",
            dateTo: "2015-07-01",
            location: "Moscow, Russia",
            rangeTemplate: "#F - #T"
        }
    ],
    footer: {
        glowKeys: [
            "B", "y", "e", 
        ]
    }
}