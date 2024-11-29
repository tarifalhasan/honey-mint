import Logo from "./Logo";

export function Header() {
  return (
    <header className=" lg:pt-4 ">
      <nav className="container rounded-[10px] bg-[#FF9D38] py-4 px-6 mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-[#5F3804] text-base lg:text-xl hover:text-[#fff]"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-[#5F3804] text-base lg:text-xl hover:text-[#fff]"
          >
            About Us
          </a>
          <a
            href="/icons"
            className="text-[#5F3804] text-base lg:text-xl hover:text-[#fff]"
          >
            Icons of Infiltration
          </a>
        </div>

        <button className="bg-[#5F3804] text-white px-6 py-2.5 text-base lg:text-xl rounded-md hover:bg-[#4A3019]">
          CONNECT
        </button>
      </nav>
    </header>
  );
}
