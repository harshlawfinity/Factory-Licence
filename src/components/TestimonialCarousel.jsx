import { lazy, useEffect, useRef, useState } from 'react';
const Star = lazy(() =>
  import('lucide-react').then((mod) => ({ default: mod.Star }))
);import innobev from '../assets/logo/innobev.webp';
import lathar from '../assets/logo/lathar.webp';
import servotec from '../assets/logo/servotec.webp';
import sleepy from '../assets/logo/sleepy.webp';
import smc from '../assets/logo/smc.webp';
import sugar from '../assets/logo/sugar.webp';
import syfo from '../assets/logo/syfo.webp';
// import jaypee from '../assets/logo/jaypee.webp';
// 
const testimonials = [
  {
    name: 'Sarika Bhatia',
    role: 'Director, Servotech Power System Ltd.',
    avatar: servotec,
    quote:
      'FactoryLicence.in made the entire process of getting our factory licence smooth and stress-free. Their team was responsive, well-informed, and extremely professional.',
    others: ['/avatar2.png', '/avatar3.png'],
  },
  {
    name: 'Amit',
    role: 'Purchase Manager, Jaypee Infratech Limited',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACoCAMAAACCN0gDAAABOFBMVEX////1eSH1+fv3eCAAWqkAWaqLpcUAV6z1eCP++/nz9/v9//9uj7S+ytcAVKSxxd0AR5bicADvw6QASZJSdqGXt9qlvt8AVJ4AU6YAW6XyeiLl7PGAnb0AW6wVXKN3lL0ATKMwYqDpnm3ubACatc8AXq377ODz2cUATJoAUKcARZsARZNrlsYya6jtmV0UYJ8AQZxMd7TttI0AT6tCcKb9690ATKYAULDZ5vWasc789OzbezDtr4EAU5b5dRtKcqFagbLofy7318DrupfrcADgZwDop3jihT4wY6jI2egEW7htncnwm2TYhUPozLbikFPccRrjwqvVmWzSeC7vjUzclVzvhDn3za3xgjP4aQDZdCLgtJPcpn7SfTjskFLyrHgASIVhk8uyy+YvX5I8dLdym85xkrFZh7Q1inPbAAAVVklEQVR4nO2ci1/aSNfHiUkYEQ0321w0qQICwSoWxUskUSAVSW3FrRVrd3W77S7//3/wziRcksmA1O371Od95/fZC2Qmycw3Z86cORmMRKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKh+ioxawSgYBvy3UMCK4h8Mf8XCUEZsfNA7d3TIvZARrgcV846NL+N9Hd0i5i+pDar6yp+DYs1s+06BSr3/VI0FywrHTV/F3vs7hUE1j6tjisXqZaPR6B5XvSPG1W8fYY2ccnf88bh7e/3QHBOr/X55p9jwRsrx8d3dHfpPt3HcuKwN7/bl03FKUbopeNRV+7jRvb17jz/DX6tYLduFPbysxTBYkYfPWf8ho3lsK/Pdm17gcdduct2z2rBezOjdzitKuwlNtXnWSHWPP42Jx3rHltKFZa711GrN3sNx7qY4KjZaDYW5u++hMle9avuzXYw8LzUZi2WrocNG93M32NSqzVqWUgvWus49BDBf2Az7yftYSN/mPh/3RsWx+5zFZv2Va+8D9vtgW93A1YqNu+dGq5CyGSXcqGaOST0EjsSqDdtSWoFjvdT7IL4qa82P0DdvcqlGb1R21lWs4OlVP61Is2t1g+XFj83I81IN0Qo1ytjOKYqNGdJ211IC/Su02xjntG2zZ6NvxTsr1xjVuMhZVtCIi9sf/N9SVipI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',
    quote:
      'Pollution NOC ka process initially bahut confusing tha, lekin Lawfinity India ne pura kaam handle kiya—from documentation to approvals. Bohot hi efficient aur trustworthy service.',
    others: ['/avatar3.png', '/avatar4.png'],
  },
  {
    name: 'Tanul Rustagi',
    role: 'Director, Innobev Solution Private Limited',
    avatar: innobev,
    quote:
      'With FactoryLicence.in, we secured our factory licence without a hitch. Their end-to-end support helped us launch production on time with complete legal compliance.',
    others: ['/avatar4.png', '/avatar5.png'],
  },
  {
    name: 'Anil Kakkar',
    role: 'Director, SPRU Products Pvt Ltd',
    avatar: syfo,
    quote:
      'We highly recommend FactoryLicence.in for factory setup compliance. Their detailed knowledge and proactive approach helped us avoid delays and penalties.',
    others: ['/avatar5.png', '/avatar6.png'],
  },
  {
    name: 'Jhanvi Mishra',
    role: 'Product Manager, Sugar Cosmetics',
    avatar: sugar,
    quote:
      'FactoryLicence.in ensured that every form and requirement for our factory licence was handled efficiently. The service was prompt and saved us countless hours.',
    others: ['/avatar6.png', '/avatar7.png'],
  },
  {
    name: 'Mithilesh Gautam',
    role: 'Product Manager, Lather Green Energy Pvt Ltd',
    avatar: lathar,
    quote:
      'Lawfinity India ke through Pollution NOC lena kaafi asaan ho gaya. Har step par proper guidance mila. Compliance ke bina kaam start karna risk hota hai – unhone woh risk hata diya.',
    others: ['/avatar7.png', '/avatar8.png'],
  },
  {
    name: 'Prakash Raj',
    role: 'Sleepy Owl Private Coffee Pvt Ltd',
    avatar: sleepy,
    quote:
      'Hamari factory ke liye sabhi licences jaise Factory Licence, Pollution NOC, Labour aur Fire Safety approvals ek hi jagah – Lawfinity India – se mile. Ek hi trusted source se saara compliance complete karna bahut hi suvidha janak aur safe tha.',
    others: ['/avatar8.png', '/avatar1.png'],
  },
  {
    name: 'Nawam Gupta',
    role: 'SMC Enterprises',
    avatar: smc,
    quote:
      'We obtained all our factory-related licences—such as the Factory Licence, Pollution NOC, Labour Compliance, and Fire Safety Approvals—from a single source: Lawfinity India. Completing all compliances through one trusted partner was extremely convenient and ensured full legal safety.',
    others: ['/avatar1.png', '/avatar2.png'],
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
const intervalRef = useRef(null); // ✅ JavaScript-compatible

  // Start auto-play
  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  // Stop auto-play
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Effect for auto-play
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const { name, role, avatar, quote } = testimonials[index];

  return (
    <div
      className="py-16 px-4 text-center"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Over 1000+ People Trusted Us</h2>

     <div className='mt-5'>
       <div className="flex justify-center items-center space-x-6 mb-6 mt-5">
        <img
          src={avatar}
          alt={name}
            loading="lazy"

          className="h-32 border-4 border-white   scale-110"
        />
      </div>

      <h3 className="font-semibold text-gray-900 text-lg">
        {name}<br />
        <span className="text-gray-400 text-sm font-medium">{role}</span>
      </h3>
      <p className="mt-4 text-xl font-semibold text-gray-700 max-w-2xl italic mx-auto">
        "{quote}"
      </p>

      <div className="flex justify-center mt-6 space-x-1 text-purple-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
     </div>
    </div>
  );
}