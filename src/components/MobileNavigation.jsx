import PropTypes from "prop-types";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#howAppWorking", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNavigation({ handleMobileClick }) {
  return (
    <>
      <nav>
        <ul
          className={`flex flex-col items-center justify-center space-y-3 p-8 text-lg font-normal`}
        >
          {links.map(({ href, label }) => (
            <li
              key={`${href}-${label}`}
              className="group relative flex cursor-pointer items-center justify-center text-nowrap"
            >
              <a
                onClick={() => handleMobileClick(href)}
                className="relative z-10 inline-block px-1"
              >
                {label}
              </a>
              <span className="absolute -bottom-1 left-0 h-[2px] w-[0%] bg-black/60 transition-all duration-500 ease-in-out group-hover:w-[100%]"></span>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => handleMobileClick("#contact")}
        className="w-[200px] rounded-[12px] border bg-stone-800 py-2 text-white shadow-none transition-all duration-500 ease-in-out hover:rounded-[30px] hover:bg-stone-700 hover:shadow-xl"
      >
        Log In
      </button>
    </>
  );
}

MobileNavigation.propTypes = {
  handleMobileClick: PropTypes.func,
};
