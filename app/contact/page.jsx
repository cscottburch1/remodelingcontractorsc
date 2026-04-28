import UniversalPageTemplate from '@/components/UniversalPageTemplate';

export default function ContactPage() {
  return (
    <UniversalPageTemplate
      title="Contact"
      subtitle="Tell us your goals and timeline. We will send a clear next-step plan and estimate path."
    >
      <form className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Name
          <input className="rounded-lg border border-slate-300 px-3 py-2" type="text" required />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Phone
          <input className="rounded-lg border border-slate-300 px-3 py-2" type="tel" required />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 md:col-span-2">
          Email
          <input className="rounded-lg border border-slate-300 px-3 py-2" type="email" required />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 md:col-span-2">
          Project Details
          <textarea className="rounded-lg border border-slate-300 px-3 py-2" rows="5" required />
        </label>
        <button className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white md:col-span-2" type="submit">
          Send Request
        </button>
      </form>
    </UniversalPageTemplate>
  );
}
