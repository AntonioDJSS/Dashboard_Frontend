/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: "IKTAN TRAINING", href: "/" },
    /*   { name: "Servicios", href: "servicios" },
    { name: "Conocenos", href: "conocenos" }, */
    /*   { name: "Contactanos", href: "email" }, */
  ];
  
  export default function HeaderFragment() {
    return (
      <header className="bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-teal-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">IKTAN Training</span>
                <img
                  className="h-10 w-auto"
                  src="https://i.imgur.com/BgtpwdS.png"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-teal-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-teal-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }
  