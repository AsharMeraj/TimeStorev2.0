import HomePage from "./_components/HomePage";
import About from "./_components/About";
import Arrival from "./_components/Arrival";
import Showcase from "./_components/Showcase";
import SliderMenu from "./_components/SliderMenu";

export default async function Home() {
  return (
      <main>
        <HomePage />
        <About />
        <Arrival />
        <Showcase />
        <SliderMenu/>
      </main>
  );
}
