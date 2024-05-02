import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex h-[10vh] flex-row items-center justify-between bg-black align-middle text-white">
            <div className="mx-4 flex flex-row items-center">
                <ul>
                    <li>Tutorials</li>
                </ul>
            </div>
            <div className="mx-4 w-auto">
                <ul className="flex w-auto flex-row items-center justify-between gap-6">
                    <li className="rounded-sm p-2 hover:bg-gray-50/30">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="rounded-sm p-2 hover:bg-gray-50/30">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/login" className="rounded-sm p-3 hover:bg-gray-50/30">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
