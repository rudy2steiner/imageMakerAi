import { siteConfig } from "@/config/site";

const Navs: any[] = [
    {
        label: "Resource",
        items: [
            { title: "FAQ", href: "/#FAQ" },
            { title: "Generation", href: "/image-generator" },
            { title: "Explore", href: "/explore" },
            { title: "Pricing", href: "/pricing" },
        ],
    },
    {
        label: "Legal",
        items: [
            // { title: "Discover", href: "/discover" },
            {
                href: "/privacy-policy",
                title: "Privacy Policy",
            },
            {
                href: "/terms-of-service",
                title: "Terms & Conditions",
            },
        ],
    },
    {
        label: "Support",
        items: [
            {
                href: `mailto:86rudysteiner@gmail.com`,
                title: `86rudysteiner@gmail.com`,
            },
        ],
    },
    {
        label: "Friends",
        items: [
            {
                href: "https://fluximage.org",
                title: "Flux Image AI",
                content: "Flux Image AI",
            },
            {
                href: "https://jsonhome.com",
                title: "JSON editor,formatter,comparator",
                content: "JSON Formatter",
            },
              {
                  href: "https://aiwith.me",
                  title: "aiwith",
                  content: "AI With Me ",
              },
               {
                    href: "https://www.aitoolnet.com",
                    title: "aitoolnet.com",
                    content: "AI Tool Net",
                },
                {
                    href: "https://aitoolsexplorer.org",
                    title: "AI Tools Explorer",
                    content: "AI Tools Explorer",
                },
                {
                    href: "https://AIBest.Tools",
                    title: "AI Best Tools",
                    content: "AI Best Tools",
                },
                 {
                     href: "https://toolsfine.com",
                     title: "Tools Fine",
                     content: "Tools Fine",
                 }
        ],
    },
];

export default Navs;
