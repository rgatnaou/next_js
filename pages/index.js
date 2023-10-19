import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const router = useRouter();
  const name = 'rgatnaou';
  const age = 25;
  return (
    <>
      <Header></Header>
      <h1> home </h1>
   

      <button className="bg-blue-700 px-6 py-3 m-3 rounded-full text-gray-400" onClick={() => {router.push('/posts')}}>click post</button><br/>
      <button className="bg-blue-400 px-6 py-3 m-3 rounded-full text-white" onClick={() => {router.push(`/services/${name}/${age}`)}}>click name</button>
      <Footer></Footer>
    </>
  )
}
