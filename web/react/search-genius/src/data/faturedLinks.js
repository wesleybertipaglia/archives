import {
    YoutubeLogo,
    LinkedinLogo,
    DevToLogo,
    MediumLogo,
    GithubLogo,
} from "@phosphor-icons/react";

const faturedLinks = [
    {
        id: crypto.randomUUID(),
        title: "Youtube",
        link: "https://www.youtube.com/",
        logo: YoutubeLogo
    },
    {
        id: crypto.randomUUID(),
        title: "LinkedIn",
        link: "https://www.linkedin.com/",
        logo: LinkedinLogo
    },
    {
        id: crypto.randomUUID(),
        title: "DEV",
        link: "https://dev.to/",
        logo: DevToLogo
    },
    {
        id: crypto.randomUUID(),
        title: "Medium",
        link: "https://medium.com/",
        logo: MediumLogo
    },
    {
        id: crypto.randomUUID(),
        title: "Github",
        link: "https://github.com/",
        logo: GithubLogo
    },
]

export default faturedLinks;