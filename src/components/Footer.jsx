import Container from "./Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#0b1b34] text-white pt-12 md:pt-16 pb-6">
      <Container>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* CONTACT */}
          <div>
            <h3 className="text-[18px] font-semibold font-['Quicksand'] mb-4">Contact Us</h3>

            <p className="text-gray-300 text-[14px] leading-relaxed font-['Quicksand'] mb-3">
              70 BC Rd, Khosbagan,<br />
              Bardhaman, West Bengal<br />
              713104
            </p>

            <p className="text-gray-300 text-[14px] font-['Quicksand'] mb-2">
              Phone: +91 7866819192 / +91 6297391710
            </p>

            <p className="text-gray-300 text-[14px] font-['Quicksand'] mb-4">
              Email: info@udaanfertility.com
            </p>

            <h4 className="font-semibold font-['Quicksand'] mb-2">Working Hours</h4>
            <p className="text-gray-300 text-[14px] font-['Quicksand']">
              Monday - Sunday : 8:00 AM - 6:00 PM
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[18px] font-semibold font-['Quicksand'] mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-300 text-[14px] font-['Quicksand']">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services/fertility-testing" className="hover:text-white">Services</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[18px] font-semibold font-['Quicksand'] mb-4">Services</h3>

            <ul className="space-y-2 text-gray-300 text-[14px] font-['Quicksand']">
              <li><Link to="/services/fertility-testing" className="hover:text-white">Fertility Testing</Link></li>
              <li><Link to="/services/iui" className="hover:text-white">IUI Treatment</Link></li>
              <li><Link to="/services/ivf" className="hover:text-white">IVF Treatment</Link></li>
              <li><Link to="/services/egg-freezing" className="hover:text-white">Egg Freezing</Link></li>
              <li><Link to="/services/sperm-banking" className="hover:text-white">Sperm Banking</Link></li>
              <li><Link to="/services/nt-scan" className="hover:text-white">Fetal Medicine Services</Link></li>
              <li><Link to="/services/genetic-counselling" className="hover:text-white">Genetic Counselling</Link></li>
            </ul>
          </div>

          {/* FOLLOW + NEWSLETTER */}
          <div>
            <h3 className="text-[18px] font-semibold font-['Quicksand'] mb-4">Follow Us</h3>

            <div className="flex gap-4 text-gray-300 text-[14px] font-['Quicksand'] mb-6">
              <p className="hover:text-white cursor-pointer">Facebook</p>
              <p className="hover:text-white cursor-pointer">Twitter</p>
              <p className="hover:text-white cursor-pointer">Instagram</p>
            </div>

            <h3 className="text-[18px] font-semibold font-['Quicksand'] mb-2">Newsletter</h3>

            <p className="text-gray-300 text-[14px] font-['Quicksand'] mb-4">
              Subscribe to our newsletter for updates and fertility tips
            </p>

            <button className="bg-teal-600 px-5 py-2 rounded-md font-['Quicksand'] hover:bg-teal-700 transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-[14px] font-['Quicksand']">
          © 2025 UDAAN Fertility Clinic. All rights reserved.
        </div>

      </Container>
    </div>
  );
}