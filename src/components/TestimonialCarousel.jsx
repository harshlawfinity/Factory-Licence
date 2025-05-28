import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Paulson',
    role: 'Designer',
    avatar: '/avatar2.png', // center avatar
    quote:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    others: ['/avatar1.png', '/avatar3.png'],
  },
  {
    name: 'Emily Carter',
    role: 'Strategist',
    avatar: '/avatar1.png',
    quote:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi.',
    others: ['/avatar2.png', '/avatar3.png'],
  },
  {
    name: 'Sophia Lee',
    role: 'Consultant',
    avatar: '/avatar3.png',
    quote:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    others: ['/avatar1.png', '/avatar2.png'],
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(auto);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const { name, role, avatar, quote, others } = testimonials[index];

  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Over 10,000 People Trusted Us</h2>
      <p className="text-gray-400 max-w-xl mx-auto mt-2 mb-8">
        Here we publish the reviews of our customers, which they left on Google or sent to us by mail.
      </p>

      <div className="flex justify-center items-center space-x-6 mb-6">
        {others.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Other reviewer"
            className="w-16 h-16 rounded-full opacity-60"
          />
        ))}
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg scale-110"
        />
      </div>

      <h3 className="font-bold text-gray-900 text-lg">{name} <span className="text-gray-400 font-medium">{role}</span></h3>
      <p className="mt-4 text-xl font-semibold text-gray-700 max-w-2xl mx-auto">{quote}</p>

      <div className="flex justify-center mt-6 space-x-1 text-purple-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>

      {/* <div className="flex justify-between items-center mt-10 max-w-xs mx-auto">
        <button onClick={prev} className="p-3 bg-purple-100 rounded-full hover:bg-purple-200">
          <ArrowLeft className="text-purple-700" />
        </button>
        <button onClick={next} className="p-3 bg-purple-600 rounded-full hover:bg-purple-700">
          <ArrowRight className="text-white" />
        </button>
      </div> */}
    </div>
  );
}
