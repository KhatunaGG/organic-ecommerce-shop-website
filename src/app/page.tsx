import Image from "next/image";
// import Header from './components/Header/Header'
import { Header, Nav, Products, SignSection } from "./components/index";


export default function Home() {
 
  return (
    <main className=" w-full h-full ">
      <SignSection />
      <Nav />
      <Header />
      

      <section className="max-w-screen-xl  mx-auto  px-[7%] ">
        <Products />

      </section>
    </main>
  );
}
