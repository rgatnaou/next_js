import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const name = 'rgatnaou';
  const age = 25;
  return (
    <>
      <h1> home </h1>
      <Link href="/rgatnaou">rgatnaou</Link><br/>
      <Link href="/about">about me</Link><br/>
      <Link href="/posts">post</Link><br/>

      <button onClick={() => {router.push('/posts')}}>click post</button><br/>
      <button onClick={() => {router.push(`/services/${name}/${age}`)}}>click name</button>
    </>
  )
}
