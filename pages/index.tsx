import SearchProjects from "../components/pages/home/search-projects";

export default function Home() {
  return (
    <section>
      <div className="text-center flex flex-col space-y-6 min-h-[100vh] items-center justify-center">
        <h1 className="main-title">Magic happens here.</h1>
        <p className="text-xl">
          Hi, My name is Ariel &amp; I'm a Web-Developer based in{" "}
          <span className="font-bold">Israel</span>. start
        </p>
      </div>
      {/* <SearchProjects /> */}
    </section>
  );
}
