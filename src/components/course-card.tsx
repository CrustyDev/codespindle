import { type CourseCardProps } from "~/types/course-card";
import Image from "next/image";

export default function CourseCard(props: CourseCardProps) {
    return (
        <>
            <div className={`${props.className} bg-crust h-96 w-64 rounded-xl`}>
                <Image
                    src={props.img}
                    width={0}
                    height={0}
                    alt={props.alt}
                    className="h-[50%] w-[100%] rounded-t-xl"
                    style={{ objectFit: "cover" }}
                />
                <div className="min-h-[30%]">
                    <div className="text-lg font-bold">{props.title}</div>
                    <p className="text-sm">{props.desc}</p>
                </div>
                <div className="bg-mantle text-yellow mt-auto flex min-h-[20%] cursor-pointer select-none flex-col items-center justify-between rounded-b-xl">
                    <span className="mr-auto font-semibold">
                        &#8377;{props.price}{" "}
                        {props.oldPrice ? (
                            <span className="text-gray-400 line-through">
                                &#8377;{props.oldPrice}
                            </span>
                        ) : (
                            <></>
                        )}
                    </span>
                    <button className="bg-peach border-base text-crust from-peach to-catred my-2 flex w-[80%] items-center justify-center gap-[.5rem] rounded-full border-2 border-solid bg-gradient-to-r font-semibold transition-all duration-300 ease-in-out">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
}
