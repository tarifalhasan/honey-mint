import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#FF9D38] py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-[#5F3804] text-xs lg:text-xl hover:text-[#ffe2cc]"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-[#5F3804] text-xs lg:text-xl hover:text-[#ffe2cc]"
          >
            About Us
          </a>
          <a
            href="/icons"
            className="text-[#5F3804] text-xs lg:text-xl hover:text-[#ffe2cc]"
          >
            Icons of Infiltration
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#5F3804] text-xs lg:text-xl hover:text-[#ffe2cc]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-[#5F3804] text-xs lg:text-xl hover:text-[#ffe2cc]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
