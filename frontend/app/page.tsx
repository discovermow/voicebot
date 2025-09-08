import { Conversation } from "./components/conversation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 text-slate-800 dark:text-slate-100">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        {/* Header */}
        <header className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            real-time voice • private • supportive
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            AI Therapist
          </h1>
          <p className="max-w-2xl text-balance text-base text-slate-600 dark:text-slate-300">
            A compassionate voice companion that helps you explore past experiences,
            understand patterns, and plan small, helpful next steps.
          </p>
        </header>

        {/* Content grid */}
        <div className="grid gap-6 md:grid-cols-5">
          {/* Left: info card */}
          <section className="md:col-span-2">
            <div className="rounded-2xl bg-white/60 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10">
              <h2 className="mb-3 text-lg font-semibold">What to expect</h2>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Reflective questions linking past to present.</li>
              </ul>

              <div className="mt-5 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-200 dark:from-emerald-400/10 dark:to-emerald-400/5 dark:text-emerald-200 dark:ring-emerald-400/20">
                <strong className="font-semibold">Note:</strong> This is not
                medical care. If you’re in danger or thinking about self-harm,
                contact local emergency services or a crisis line.
              </div>
            </div>
          </section>

          {/* Right: conversation card */}
          <section className="md:col-span-3">
            <div className="rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10">
              <h2 className="mb-2 text-lg font-semibold">Talk to your therapist</h2>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                Press <em>Start</em>, allow microphone access, and speak naturally.
              </p>

              <Conversation />


            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Rimma K. • Privacy-first • No data sold
        </footer>
      </div>
    </main>
  );
}
