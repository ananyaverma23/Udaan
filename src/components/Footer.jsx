import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-[#f1f5f9] py-12">
      <Container>

        <div className="grid grid-cols-4 gap-8 text-sm text-gray-600">

          {/* Brand */}
          <div>
            <h2 className="text-blue-600 font-semibold mb-3">UDAAN</h2>
            <p className="text-xs">
              Advanced fertility & fetal medicine care with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Doctors</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-xs">
              <li>IVF Treatment</li>
              <li>IUI Treatment</li>
              <li>Fetal Medicine</li>
              <li>Genetic Counselling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li>Bardhaman, India</li>
              <li>+91 XXXXX XXXXX</li>
              <li>info@udaan.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs text-gray-400 mt-10">
          © 2026 UDAAN. All rights reserved.
        </div>

      </Container>
    </div>
  );
}