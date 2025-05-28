import { MousePointerClick, Users, Eye } from 'lucide-react';
import g1 from '../assets/g1.gif';

export default function StatsSection() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl p-8 md:flex md:items-center md:justify-between md:space-x-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-left text-center font-semibold text-gray-900 mb-8">
            Software Success In Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-2xl font-bold text-gray-900">10k</div>
              <div className="text-gray-400 text-sm mt-1">New clicks on the site</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-2xl font-bold text-gray-900">250+</div>
              <div className="text-gray-400 text-sm mt-1">Site Visitors</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-2xl font-bold text-gray-900">360+</div>
              <div className="text-gray-400 text-sm mt-1">Pageviews</div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
