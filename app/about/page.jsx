import UniversalPageTemplate from '@/components/UniversalPageTemplate';

export default function AboutPage() {
  return (
    <UniversalPageTemplate
      title="About Burch Contracting"
      subtitle="A local team focused on quality execution, honest scope, and smooth project delivery."
    >
      <div className="space-y-4 text-slate-700">
        <p>Burch Contracting serves Upstate SC homeowners with a straightforward process: plan clearly, build cleanly, and finish strong.</p>
        <p>Our work is built around long-term performance, not quick cosmetic fixes. That means code-compliant framing, moisture control, and durable finish selections.</p>
        <p>If you want a professional remodel with transparent pricing and clear communication, this is the team built for it.</p>
      </div>
    </UniversalPageTemplate>
  );
}
