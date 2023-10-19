import Link from "next/link";

export default function Header() {

    return (
        <div>
            <h1>header</h1>
            <nav className="bg-blue-700 flex justify-center items-center  text-white">
                <Link className="btn py-3 px-4 mx-1" href="/">home</Link><br/>
                <Link className="btn py-3 px-4 mx-1" href="/rgatnaou">rgatnaou</Link><br/>
                <Link className="btn py-3 px-4 mx-1" href="/about">about me</Link><br/>
                <Link className="btn py-3 px-4 mx-1" href="/posts">post</Link><br/>
            </nav>
        </div>
    );
}