'use client';

import AdvancedCalculator from '@/components/AdvancedCalculator';

export default function ServicePageContent({ service }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      
      {/* Introduction */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold text-slate-900">
          How We Build Your {service.name}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mt-4">
          {service.intro || `Burch Contracting builds high-quality ${service.name.toLowerCase()} across Upstate South Carolina with clear planning, code-compliant construction, and lasting quality.`}
        </p>
      </div>

      {/* Process + Local Context */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Proven Process</h3>
          <ul className="space-y-6">
            {service.process && service.process.length > 0 ? (
              service.process.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-emerald-600 font-semibold text-xl w-8 flex-shrink-0">{index + 1}</span>
                  <div>
                    <p className="font-medium text-slate-900">{step.title}</p>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </li>
              ))
            ) : (
              // Fallback process if no data provided
              <>
                <li className="flex gap-4">
                  <span className="text-emerald-600 font-semibold text-xl w-8 flex-shrink-0">01</span>
                  <div>
                    <p className="font-medium text-slate-900">Clear Planning</p>
                    <p className="text-slate-600 text-sm">Detailed scope and line-item estimate so you know exactly what to expect.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-emerald-600 font-semibold text-xl w-8 flex-shrink-0">02</span>
                  <div>
                    <p className="font-medium text-slate-900">Permit-Ready Execution</p>
                    <p className="text-slate-600 text-sm">All plans built to meet Upstate SC building codes from day one.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-emerald-600 font-semibold text-xl w-8 flex-shrink-0">03</span>
                  <div>
                    <p className="font-medium text-slate-900">Daily Cleanliness &amp; Communication</p>
                    <p className="text-slate-600 text-sm">Your property stays clean with regular updates throughout the project.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-emerald-600 font-semibold text-xl w-8 flex-shrink-0">04</span>
                  <div>
                    <p className="font-medium text-slate-900">Final Walkthrough</p>
                    <p className="text-slate-600 text-sm">We don't leave until you're 100% satisfied.</p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Local Context Sidebar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-sm">
          <p className="font-medium text-slate-900 mb-4">Why this process matters in Upstate SC:</p>
          <ul className="space-y-3 text-slate-600">
            <li>• Proper moisture control for our humid climate</li>
            <li>• Reinforced foundations built for local clay soil conditions</li>
            <li>• 35+ years of experience with Upstate SC permitting and inspections</li>
            <li>• Transparent communication so there are no surprises</li>
          </ul>
        </div>
      </div>

      {/* Mini Calculator */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Get Your Instant {service.name} Estimate</h3>
        <AdvancedCalculator 
          serviceName={service.name} 
          defaults={service.miniDefaults} 
          mini 
        />
      </div>
    </div>
  );
}
