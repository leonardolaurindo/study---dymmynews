import Link from "next/link";

export default function NewsPage() {
    return (
        <ul>
            <li>
                <Link href="/news/01">News 01</Link>
            </li>
            <li>
                <Link href="/news/02">News 02</Link>
            </li>
            <li>
                <Link href="/news/03">News 03</Link>
            </li>
        </ul>
    )
}