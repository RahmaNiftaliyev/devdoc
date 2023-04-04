// @ts-nocheck
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
export const footerData = [
    {
        id: 1,
        title: 'DevDoctor',
        hasSubmenu: true,
        links: [{ name: 'About', link: '/about' }],
    },
    {
        id: 2,
        title: 'Contact',
        link: '/contact',
    },
];

export const socialData = [
    {
        id: 1,
        title: 'Facebook',``
        hasSubmenu: true,
        links: [
            {
                link: 'https://www.facebook.com/',
                icon: BsFacebook,
            },
            {
                link: 'https://twitter.com/',
                icon: BsTwitter,
            },
            {
                link: 'https://www.instagram.com/',
                icon: BsInstagram,
            },
        ],
    },
];
