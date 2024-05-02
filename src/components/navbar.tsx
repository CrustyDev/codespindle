import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-base text-text flex h-[10vh] flex-row items-center justify-between align-middle">
            <div className="mx-4 w-full">
                <ul className="align-center flex flex-row items-center gap-4">
                    <li>Tutorials</li>
                    <li>Courses</li>
                </ul>
            </div>
            <div className="w-auto flex-grow text-center">
                <span className="text-text mx-auto text-center text-xl font-semibold">
                    CodeSpindle
                </span>
            </div>
            <div className="mx-4 w-full">
                <ul className="flex w-auto flex-row items-center justify-end gap-6">
                    <li className="rounded-sm p-2 hover:bg-gray-50/30">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="rounded-sm p-2 hover:bg-gray-50/30">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="rounded-sm p-3 hover:bg-gray-50/30">
                        <Link href="/login">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
