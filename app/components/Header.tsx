import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800">
          The Momenta Photography
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              className="text-gray-600 hover:text-gray-900"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
