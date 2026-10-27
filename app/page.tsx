import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Expect from "@/components/Expect";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Recognition from "@/components/Recognition";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <Hero />
        <Expect />
        <Work />
        <Stack />
        <Recognition />
        <Leadership />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
