import { testimonials } from '../../content/testimonials';

export default function ProgressShowcase() {
  // Get a student with significant improvement for showcase
  const showcaseStudent = testimonials.find(t => t.id === 'priya-sharma') || testimonials[0];

  return (
    <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-3xl p-8 lg:p-12 border border-primary-200 shadow-soft">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-primary-600 mb-4">
          Echter Fortschritt, messbare Ergebnisse
        </h3>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Sieh, wie {showcaseStudent.name} in nur {showcaseStudent.duration} Monaten von {showcaseStudent.beforeLevel} auf {showcaseStudent.afterLevel} gekommen ist.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Before Dashboard Mockup */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-lg font-bold inline-block mb-4">
              Vorher ({showcaseStudent.beforeLevel})
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-200">
            <h4 className="text-lg font-semibold text-neutral-800 mb-4">Wöchentlicher Progress</h4>
            
            {/* Mock metrics - before */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Sprechzeit/Woche</span>
                <span className="font-semibold text-red-600">18 Min</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Szenarien gemeistert</span>
                <span className="font-semibold text-red-600">3/12</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Füllwörter-Reduktion</span>
                <span className="font-semibold text-red-600">-5%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Aktive Wörter</span>
                <span className="font-semibold text-red-600">850</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center items-center lg:flex-col">
          <div className="hidden lg:block">
            <svg className="w-16 h-16 text-success-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="lg:hidden">
            <svg className="w-16 h-16 text-success-500 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center px-4">
            <div className="bg-success-100 text-success-800 px-4 py-2 rounded-full text-sm font-bold">
              {showcaseStudent.duration} Monate später
            </div>
          </div>
        </div>

        {/* After Dashboard Mockup */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-success-100 text-success-800 px-4 py-2 rounded-full text-lg font-bold inline-block mb-4">
              Nachher ({showcaseStudent.afterLevel})
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-success-200">
            <h4 className="text-lg font-semibold text-neutral-800 mb-4">Wöchentlicher Progress</h4>
            
            {/* Mock metrics - after */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Sprechzeit/Woche</span>
                <span className="font-semibold text-success-600">{showcaseStudent.metrics.sprechzeit} Min</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-success-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Szenarien gemeistert</span>
                <span className="font-semibold text-success-600">{showcaseStudent.metrics.scenarios}/12</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-success-500 h-2 rounded-full" style={{ width: `${(showcaseStudent.metrics.scenarios / 12) * 100}%` }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Füllwörter-Reduktion</span>
                <span className="font-semibold text-success-600">{showcaseStudent.metrics.fillwords}%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-success-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Aktive Wörter</span>
                <span className="font-semibold text-success-600">{showcaseStudent.metrics.activeWords}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-success-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <div className="bg-white rounded-2xl px-6 py-3 shadow-soft border border-success-200 flex items-center">
          <svg className="w-6 h-6 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-success-800">Über +180% Sprechzeit-Steigerung</span>
        </div>
        <div className="bg-white rounded-2xl px-6 py-3 shadow-soft border border-primary-200 flex items-center">
          <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-primary-800">9 neue Szenarien gemeistert</span>
        </div>
        <div className="bg-white rounded-2xl px-6 py-3 shadow-soft border border-accent-200 flex items-center">
          <svg className="w-6 h-6 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-accent-800">+1.250 neue aktive Wörter</span>
        </div>
      </div>
    </div>
  );
}