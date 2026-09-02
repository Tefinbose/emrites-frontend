import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#183247] px-6 py-12 text-white md:px-16 lg:px-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-light leading-tight md:text-4xl">
              Turn Your <span className="font-bold">Business</span>
              <br />
              Vision Into <span className="font-bold">Reality</span>
            </h2>

            {/* Free Consultation */}
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#183247] transition hover:scale-105">
                Free Consultation
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#183247] transition hover:scale-110">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold">Our Phone</h3>

              <p className="mt-2 text-sm text-gray-300">
                +971 00 000 000
              </p>

              <p className="text-sm text-gray-300">
                +971 00 000 000
              </p>

              <p className="text-sm text-gray-300">
                +971 00 000 000
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Our Email</h3>

              <p className="mt-2 text-sm text-gray-300">
                emiratesclassic@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3 md:justify-end">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded bg-white text-[#183247] transition hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded bg-white text-[#183247] transition hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded bg-white text-[#183247] transition hover:scale-110"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded bg-white text-[#183247] transition hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#d4bd83] px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-white">
          
          <a href="#services" className="hover:text-[#183247]">
            Services <span>›</span>
          </a>

          <a href="#about" className="hover:text-[#183247]">
            Who we are <span>›</span>
          </a>

          <a href="#services" className="hover:text-[#183247]">
            Services <span>›</span>
          </a>

          <a href="#careers" className="hover:text-[#183247]">
            Careers <span>›</span>
          </a>

          <a href="#team" className="hover:text-[#183247]">
            Team <span>›</span>
          </a>

          <a href="#contact" className="hover:text-[#183247]">
            Contact Us <span>›</span>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;