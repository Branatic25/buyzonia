
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700 bg-brand-blue py-10">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-2 text-2xl font-bold">Stay Updated</h3>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border-0 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-brand-orange px-4 py-2 font-medium text-white hover:bg-brand-orange/90 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <h4 className="mb-4 text-lg font-bold">About Buyzonia</h4>
            <p className="mb-4 text-sm text-white/70">
              We're dedicated to providing the best electronics shopping experience with competitive prices and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="grid gap-2">
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/70 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-white/70 hover:text-white">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white/70 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h4 className="mb-4 text-lg font-bold">My Account</h4>
            <ul className="grid gap-2">
              <li>
                <Link to="/account" className="text-sm text-white/70 hover:text-white">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-white/70 hover:text-white">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm text-white/70 hover:text-white">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-white/70 hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-white/70 hover:text-white">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                <span className="text-sm text-white/70">
                  1234 Electronics Way, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-brand-orange" />
                <span className="text-sm text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-brand-orange" />
                <span className="text-sm text-white/70">support@buyzonia.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Buyzonia. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                alt="Visa" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                alt="Mastercard" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" 
                alt="PayPal" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" 
                alt="Stripe" 
                className="h-6 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
