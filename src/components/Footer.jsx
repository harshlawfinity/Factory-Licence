import { Mail, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-10 text-sm">
        
        {/* Column 1 */}
        <div>
          <h4 className="text-xl font-bold mb-4">Your Business is<br />Our Work</h4>
          <p className="text-gray-400 mb-2">Work with:</p>
          <div className="flex space-x-4 text-gray-500 text-2xl">
            <i className="fab fa-windows" />
            <i className="fab fa-chrome" />
            <i className="fab fa-apple" />
            <i className="fab fa-android" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contacts</h4>
          <p className="text-gray-400">3rd Avenue, 128<br />Manhatten, New York, USA</p>
          <p className="mt-1 font-medium underline text-sm">Google map</p>
          <p className="text-gray-400 mt-4">Mon – Fri: 8am – 7pm<br />Weekend: Time Off</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 text-gray-500">
              <PhoneCall size={16} className="text-purple-600" />
              <span>+1 212 425 8617</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Mail size={16} className="text-purple-600" />
              <span>information@office.com</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-purple-600 text-xl">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-bold mb-4">Our Support</h4>
          <p className="text-purple-600 font-bold text-lg">+1 212 425 8617</p>
          <p className="text-gray-400 mt-2">
            Our online scheduling and payment system is safe.
          </p>
          <p className="text-gray-400 mt-6">
            Need help? <span className="font-semibold text-black">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs text-gray-500 border-t pt-6">
        © Uno 128. All Rights Reserved 2024.
        <span className="ml-2 text-purple-600 underline">Licensing Webflow Templates</span>
        <span className="text-gray-400"> by </span>
        <span className="text-purple-600 font-medium">128.digital</span>.
        <span className="text-gray-400"> Powered by </span>
        <span className="text-purple-600 font-medium">Webflow</span>
      </div>
    </footer>
  );
}
