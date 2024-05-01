import FaturedLink from "../components/FaturedLink";
import Search from "../components/Search";
import Section from "../components/Section";
import { GoogleLogo } from "@phosphor-icons/react";
import faturedLinks from "../data/faturedLinks";

const Home = () => {
  return (
    <Section classList="py-6 my-40 flex text-center justify-center items-center">
      <h2 className="text-4xl mb-6 font-bold inline-flex gap-2 items-center">
        <GoogleLogo
          size={48}
          weight="fill"
          className="text-lime-300 bg-zinc-800 rounded-full"
        />
        Search Genius
      </h2>
      <div className="w-[800px] max-w-full mx-auto">
        <Search classList="px-3 py-3 shadow-md" />

        <div className="grid grid-cols-3 md:flex justify-center items-center gap-8 mt-6">
          {faturedLinks.map((link) => {
            return (
              <FaturedLink
                key={link.id}
                title={link.title}
                link={link.link}
                Logo={link.logo}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Home;
