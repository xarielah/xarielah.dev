import Link from "next/link";
import RestictWidth from "../layout/restrict-width";
import SocialLinks from "../ui-elements/social-icons/social-icons";

type Route = {
  path: string;
  name: string;
  target?: string;
};

const Navigation = () => {
  const routes: Route[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "https://github.com/xarielah",
      name: "@GitHub",
      target: "_blank",
    },
  ];

  return (
    <div className="flex justify-center">
      <RestictWidth className="fixed w-full top-0">
        <nav className="text-slate-700 backdrop-blur-sm p-4">
          <div className="flex relative justify-between items-center sm:space-x-10">
            <div className="text-xl font-bold hidden sm:block">
              <Link href="/">xarielah.dev</Link>
            </div>
            <ul className="flex sm:absolute sm:right-[50%] sm:translate-x-[50%] w-full justify-center space-x-5 sm:space-x-10 font-medium">
              {routes.map((route) => (
                <li
                  key={route.name}
                  className="hover:text-slate-500 mx-2 ease-in-out duration-300 rounded-xl"
                >
                  <Link href={route.path} target={route.target}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex sm:w-full w-max justify-end">
              <SocialLinks />
            </div>
          </div>
        </nav>
      </RestictWidth>
    </div>
  );
};

export default Navigation;
