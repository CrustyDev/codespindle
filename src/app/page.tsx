"use client";
import CourseCard from "~/components/course-card";
import { type ChangeEvent, type FormEvent, useState } from "react";

const discounted = [
    {
        img: "/placeholder.png",
        title: "Javascript Fundamentals",
        desc: "Learn to Code",
        alt: "Javascript course image",
        buyLink: "/jscourse",
        price: 2999,
        oldPrice: 9999,
    },
    {
        img: "/placeholder.png",
        title: "Javascript Fundamentals",
        desc: "Learn to Code",
        alt: "Javascript course image",
        buyLink: "/jscourse",
        price: 2999,
        oldPrice: 9999,
    },
    {
        img: "/placeholder.png",
        title: "Javascript Fundamentals",
        desc: "Learn to Code",
        alt: "Javascript course image",
        buyLink: "/jscourse",
        price: 2999,
        oldPrice: 9999,
    },
    {
        img: "/placeholder.png",
        title: "Javascript Fundamentals",
        desc: "Learn to Code",
        alt: "Javascript course image",
        buyLink: "/jscourse",
        price: 2999,
        oldPrice: 9999,
    },
];

export default function HomePage() {
    const [query, setQuery] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <main className="text-text min-h-screen bg-[#1e1e2e]">
            <h1 className="text-text from-peach to-catred m-auto mb-4 bg-gradient-to-r bg-clip-text p-4 text-center text-5xl font-bold text-transparent">
                Let&apos;s Learn Something New!!
            </h1>
            <form
                onSubmit={handleSubmit}
                className="mb-8 flex items-center justify-center"
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    className="bg-crust rounded-l-md px-4 py-2 font-semibold focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-mauve from-catpink to-mauve text-crust rounded-r-md bg-gradient-to-r px-4 py-2 font-semibold transition-all duration-300 ease-in-out focus:outline-none"
                >
                    Search
                </button>
            </form>
            <div className="flex flex-row items-center justify-center gap-4">
                {discounted.map((course, index) => (
                    <CourseCard
                        key={index}
                        img={course.img}
                        title={course.title}
                        desc={course.desc}
                        alt={course.alt}
                        buyLink={course.buyLink}
                        price={course.price}
                        oldPrice={course.oldPrice}
                    />
                ))}
            </div>
        </main>
    );
}
