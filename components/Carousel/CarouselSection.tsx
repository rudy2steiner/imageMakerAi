/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useTranslations } from "next-intl";
import { Carousel, Card } from "@/components/AppleCardsCarousel";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const CarouselSection = ({ gallery }: { gallery: any[] }) => {
    const t = useTranslations("Home");

    // const data = [
    //     {
    //         category: "Artificial Intelligence",
    //         title: "You can do more with AI.",
    //         src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },
    //     {
    //         category: "Productivity",
    //         title: "Enhance your productivity.",
    //         src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },
    //     {
    //         category: "Product",
    //         title: "Launching the new Apple Vision Pro.",
    //         src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },

    //     {
    //         category: "Product",
    //         title: "Maps for your iPhone 15 Pro Max.",
    //         src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },
    //     {
    //         category: "iOS",
    //         title: "Photography just got better.",
    //         src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },
    //     {
    //         category: "Hiring",
    //         title: "Hiring for a Staff Software Engineer",
    //         src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         // content: <DummyContent />,
    //     },
    // ];

    const data = gallery.map(item => ({
        category: "Made by Flux.1 " + item.model,
        // title: item.prompt,
        src: item.generation,
    }))

    const cards = data.map((card, index) => (
        // @ts-ignore
        <Card key={card.src} card={card} index={index} />
    ));
    const photos = [
          { src: "https://replicate.delivery/czjl/v8gV9dk8rjoWBJ7zeZZolfZC3ra2Zn5eD7yYfC5Lfw5IfGa8E/output.png", width: 800, height: 600 },
          { src: "https://picsum.photos/id/1018/1920/1080", width: 1600, height: 900 },
          { src: "https://pic.wela.tech/selected/8xmkkg9b69rm20cjzn8sf1dxzw.png", width: 500, height: 500 },
          { src: "https://replicate.delivery/czjl/jxfigt1F5E0bA69T088pFh596wnXSGdQlTHfudO73mlUvoxTA/output.png", width: 600, height: 400 },
          { src: "https://replicate.delivery/czjl/0hhokRGvCyqHJVL1fUx0E2VlED8AqNYAerVQI7HZfTqrKRjnA/output.png", width: 400, height: 600 },
          { src: "https://replicate.delivery/czjl/v8gV9dk8rjoWBJ7zeZZolfZC3ra2Zn5eD7yYfC5Lfw5IfGa8E/output.png", width: 800, height: 600 },
          { src: "https://picsum.photos/id/1018/1920/1080", width: 1600, height: 900 },
          { src: "https://pic.wela.tech/selected/8xmkkg9b69rm20cjzn8sf1dxzw.png", width: 500, height: 500 },
          { src: "https://replicate.delivery/czjl/jxfigt1F5E0bA69T088pFh596wnXSGdQlTHfudO73mlUvoxTA/output.png", width: 600, height: 400 },
          { src: "https://replicate.delivery/czjl/0hhokRGvCyqHJVL1fUx0E2VlED8AqNYAerVQI7HZfTqrKRjnA/output.png", width: 400, height: 600 },
        ];
        // <MasonryPhotoAlbum photos={photos} />
    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                {t("gallery.title")}
            </h2>
            <Carousel items={cards} />
        </div>
    );
};

export default CarouselSection;
