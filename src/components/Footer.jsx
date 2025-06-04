import React, { lazy, Suspense } from 'react';

const Mail = lazy(() => import('lucide-react').then(mod => ({ default: mod.Mail })));
const PhoneCall = lazy(() => import('lucide-react').then(mod => ({ default: mod.PhoneCall })));
const Facebook = lazy(() => import('lucide-react').then(mod => ({ default: mod.Facebook })));
const Twitter = lazy(() => import('lucide-react').then(mod => ({ default: mod.Twitter })));
const Instagram = lazy(() => import('lucide-react').then(mod => ({ default: mod.Instagram })));
const Linkedin = lazy(() => import('lucide-react').then(mod => ({ default: mod.Linkedin })));
import FL from './FL2.jsx'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
<footer className="bg-[#8653F4] text-gray-200 px-6 py-16 border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12 text-sm">
        
        {/* Column 1 */}
        <div className='w-full flex items- justify-center flex-col'>
                    <FL />

          <h4 className="text-2xl text- mt-10  italic font-semibold mb-6 tracking-wide text-purple-100  ">
            Factory Licencing   Made Simple With factorylicence.in
          </h4>

           
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100  ">Contacts</h4>
          <address className="not-italic text-gray-100 leading-relaxed">
           T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078
          </address>
          
          <p className="text-gray-100 mt-6 leading-relaxed">
            <span className="font-semibold">Mon – Sat:</span> 10am – 7pm<br />
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-gray-00">
              <PhoneCall size={20} className="" />
              <a href="tel:+12124258617" className="hover:text-purple-100   transition-colors font-medium">
                          +91 99107 74687

              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-00">
              <Mail size={20} className="" />
              <a href="mailto:information@office.com" className="hover:text-purple-100   transition-colors font-medium">
info@factorylicence.in              </a>
            </div>
          </div>
          <div className="flex space-x-6 mt-8 ">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
              <Linkedin size={28} />
            </a>

          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100  ">Our Support</h4>
          <p className="text-purple-100   font-semibold text-2xl mb-3 flex gap-2 items-center">              <PhoneCall size={24} className="" />
            +91 99107 74687
</p>
           
          {/* <p className="text-gray-00 text-lg">
            Need help?{' '}
            <a href="/contact" className="font-semibold text-purple-100   hover:text-purple-900 transition-colors">
              Contact Us
            </a>
          </p> */}
        </div>
      </div>

      {/* Footer bottom */}
      {/* Footer bottom */}
<div className="text-center text-xs text-gray-100 border-t border-gray-200 pt-6 space-y-2">
  <p>
    All Rights Reserved 2025.{' '}
    <Link to="/" className="text-purple-100 hover:text-purple-800 transition-colors font-semibold">
      factorylicence.in |
    </Link>{' '}
    <span className="font- italic"> Powered by{' '} Lawfinity India PVT. LTD. </span> 
  </p>
  <div className="space-x-4">
    <Link to="/privacy-policy" className="hover:text-purple-800 transition-colors underline">
      Privacy Policy
    </Link>
    <Link to="/refund-cancellation" className="hover:text-purple-800 transition-colors underline">
      Refund & Cancellation
    </Link>
    <Link to="/terms-conditions" className="hover:text-purple-800 transition-colors underline">
      Terms & Conditions
    </Link>
  </div>
</div>

    </footer>
  );
}
