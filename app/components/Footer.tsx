import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              The Momenta Photography
            </h3>
            <p>Capturing Your Precious Moments</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/team_momenta_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@Harshalkhadse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.facebook.com/harshal.khadse.338/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} The Momenta Photography. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
