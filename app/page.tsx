import Image from "next/image";
import Link from "next/link";
import heroImg from "../public/hero.jpg";
import ankitImg from "../public/ankitNatkar.jpg";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={heroImg}
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Capturing Your Precious Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Elegant and timeless wedding photography
          </p>
          <div className="space-x-4">
            <Link
              href="/portfolio"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About the Photographer
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={ankitImg}
                alt="Ankit Natkar"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Hi, I&apos;m Ankit Natkar, a passionate wedding photographer
                with over 10 years of experience. I believe in capturing the raw
                emotions, the stolen glances, and the joyous celebrations that
                make each wedding unique.
              </p>
              <p className="text-lg mb-4">
                My style is a blend of photojournalism and fine art, ensuring
                that every image tells a story and becomes a timeless piece of
                art for you to cherish.
              </p>
              <Link
                href="https://www.instagram.com/ankit_natkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn more about my journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
