/*
 *  -= Preload of Images =-
 *                              */

import ImageCode from "../assets/code.avif"
import ImageDelVault from "../assets/DelVault.png"
import ImageDeviceListener from "../assets/DeviceListener.png"
import ImageEmonindowlocker from "../assets/EmonindowLocker.png"
import ImageMunilytics from "../assets/Munilytics.jpg"

/*
 *  -= Page Contents =- 
 *                              */

export const pages = {

    /* English */
    en: {
        home: {
            title: "Welcome",
            content: [
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Source code containing an SVG within HTML"
                },
                {
                    type: "paragraph",
                    text: "You have reached Emma's Hideout! Please take a look around."
                }
            ]
        },

        about: {
            title: "About me",
            content: [
                {
                    type: "subheader",
                    text: "I am Emma"
                },
                {
                    type: "image",
                    src: "https://avatars.githubusercontent.com/u/230901568?v=4",
                    alt: "An AI-generated image of me"
                },
                {
                    type: "paragraph",
                    text: "Open to both people and new challenges, I face the future with joy and optimism. " +
                        "I am described as flexible, positive, and open. With a broad foundation, I stand " +
                        "firmly in the IT world and look for positions where I can offer my expertise to " +
                        "improve my skills and other people's everyday lives."
                }
            ]
        },

        portfolio: {
            title: "Portfolio",
            content: [
                {
                    type: "image",
                    src: ImageDeviceListener,
                    alt: "An image of a green speaker"
                },
                {
                    type: "modal",
                    label: "Device Listener",
                    modalPopupText: "A program which allows you to play back the live input of an " +
                        "audio device. Useful for listening to Line-in devices, or to " +
                        "hear sidetone for your microphone.",
                    modalLink: "https://github.com/EmmaKarlholm/DeviceListener"
                },
                {
                    type: "image",
                    src: ImageMunilytics,
                    alt: "A picture of Stockholm"
                },
                {
                    type: "modal",
                    label: "Munilytics",
                    modalPopupText: "An analytics platform that allows local politicians to retrieve, analyze, " +
                        "and compare KPI data between municipalities.",
                    modalLink: "https://github.com/SunberryBlossom/Munilytics/"
                },
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Source code containing an SVG within HTML"
                },
                {
                    type: "modal",
                    label: "Emonic",
                    modalPopupText: "A collection of mneumonic C# classes for .NET development.",
                    modalLink: "https://github.com/EmmaKarlholm/Emonic"
                },
                {
                    type: "image",
                    src: ImageEmonindowlocker,
                    alt: "The logo of the program DisplayFusion"
                },
                {
                    type: "modal",
                    label: "Emonindowlocker",
                    modalPopupText: "DisplayFusion C# scripts to disable accidental resizing of windows.",
                    modalLink: "https://github.com/EmmaKarlholm/Emonindowlocker"
                },
                {
                    type: "image",
                    src: ImageDelVault,
                    alt: "A title screen saying DelVault in ASCII art"
                },
                {
                    type: "modal",
                    label: "DelVault",
                    modalPopupText: "A role-playing game played in the terminal.",
                    modalLink: "https://github.com/EmmaKarlholm/DelVault"
                }
            ]
        }
    },




    /* Swedish */
    sv: {
        home: {
            title: "Välkommen",
            content: [
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Källkod som innehåller en SVG i HTML"
                },
                {
                    type: "paragraph",
                    text: "Du har nått Emmas gömställe! Ta gärna en titt runt."
                }
            ]
        },

        about: {
            title: "Om mig",
            content: [
                {
                    type: "subheader",
                    text: "Jag är Emma"
                },
                {
                    type: "image",
                    src: "https://avatars.githubusercontent.com/u/230901568?v=4",
                    alt: "En AI-genererad bild av mig"
                },
                {
                    type: "paragraph",
                    text: "Öppen för både människor och nya utmaningar möter jag framtiden med glädje och optimism. " +
                        "Jag beskrivs som flexibel, positiv och öppen. Med en bred grund står jag stadigt i IT-världen " +
                        "och söker roller där jag kan bidra med min kompetens samtidigt som jag utvecklar mina färdigheter " +
                        "och förbättrar andra människors vardag."
                }
            ]
        },

        portfolio: {
            title: "Portfölj",
            content: [
                {
                    type: "image",
                    src: ImageDeviceListener,
                    alt: "En bild av en grön högtalare"
                },
                {
                    type: "modal",
                    label: "Device Listener",
                    modalPopupText: "Ett program som låter dig spela upp live-input från en ljudenhet. " +
                        "Användbart för att lyssna på Line-in-enheter eller höra sidetone från din mikrofon.",
                    modalLink: "https://github.com/EmmaKarlholm/DeviceListener"
                },
                {
                    type: "image",
                    src: ImageMunilytics,
                    alt: "En bild av Stockholm"
                },
                {
                    type: "modal",
                    label: "Munilytics",
                    modalPopupText: "En analysplattform som gör det möjligt för lokalpolitiker att hämta, analysera " +
                        "och jämföra KPI-data mellan kommuner.",
                    modalLink: "https://github.com/SunberryBlossom/Munilytics/"
                },
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Källkod som innehåller en SVG i HTML"
                },
                {
                    type: "modal",
                    label: "Emonic",
                    modalPopupText: "En samling hjälpklasser i C# för .NET-utveckling.",
                    modalLink: "https://github.com/EmmaKarlholm/Emonic"
                },
                {
                    type: "image",
                    src: ImageEmonindowlocker,
                    alt: "Logotypen för programmet DisplayFusion"
                },
                {
                    type: "modal",
                    label: "Emonindowlocker",
                    modalPopupText: "DisplayFusion-skript i C# för att förhindra oavsiktlig storleksändring av fönster.",
                    modalLink: "https://github.com/EmmaKarlholm/Emonindowlocker"
                },
                {
                    type: "image",
                    src: ImageDelVault,
                    alt: "En titelskärm där det står DelVault i ASCII-grafik"
                },
                {
                    type: "modal",
                    label: "DelVault",
                    modalPopupText: "Ett rollspel som spelas direkt i terminalen.",
                    modalLink: "https://github.com/EmmaKarlholm/DelVault"
                }
            ]
        }
    }
}