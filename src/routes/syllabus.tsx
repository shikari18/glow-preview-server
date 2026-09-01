import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ChevronDown, CircleCheck, Plus, Send, Settings2, SlidersHorizontal, Sparkles } from "lucide-react";

import { DashboardLayout } from "@/components/dashboard-page";

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "Study Plan — your syllabus, topic by topic | ExamGlow" },
      {
        name: "description",
        content:
          "Follow a generated study plan built from your syllabus: every topic ordered, tracked and ready to revise.",
      },
      { property: "og:title", content: "Study Plan | ExamGlow" },
      { property: "og:description", content: "Every topic from your syllabus, ordered and tracked." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SyllabusPage,
});

const topics = [
  "Rational Choice Theory",
  "Bounded Rationality and Satisficing",
  "Dual Process Model",
  "Heuristics and Biases",
  "Availability and Representativeness Heuristics",
  "Anchoring and Adjustment",
  "Prospect Theory",
  "Loss Aversion and Framing",
];

function SyllabusPage() {
  return (
    <DashboardLayout crumbs={[{ label: "My First Study Set" }, { label: "Study Plan" }]}>
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-5">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-mint text-ink">
          <BookOpen className="size-6" aria-hidden />
        </span>
        <div className="min-w-0">
          <h1 className="flex min-w-0 items-center gap-2 truncate text-[clamp(1.6rem,3vw,2.2rem)]">
            My First Study Set <Settings2 className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="flex items-center gap-1.5"><BookOpen className="size-4" aria-hidden /> 15 Topics</span>
            <span className="flex items-center gap-1.5 text-muted-foreground"><CircleCheck className="size-4 text-lavender" aria-hidden /> 0 Covered</span>
            <span className="flex items-center gap-1.5 text-muted-foreground"><CircleCheck className="size-4 text-lavender" aria-hidden /> 0 Mastered</span>
            <span className="h-1.5 min-w-24 flex-1 rounded-full bg-secondary" />
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <section className="rounded-3xl bg-surface p-4">
            <p className="text-sm text-muted-foreground">Customize your Study Plan</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-muted-foreground">Mode</span>
              <button type="button" className="rounded-full bg-card px-4 py-2 font-medium">Comprehensive</button>
              <span className="text-muted-foreground">Sort By</span>
              <button type="button" className="flex items-center gap-1.5 rounded-full bg-card px-4 py-2 font-medium">
                Recommended <Sparkles className="size-3.5" aria-hidden />
              </button>
              <SlidersHorizontal className="size-4 text-muted-foreground" aria-hidden />
              <Settings2 className="size-4 text-muted-foreground" aria-hidden />
            </div>
          </section>

          <div className="mt-6 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-lilac text-ink">
              <Send className="size-4" aria-hidden />
            </span>
            <span className="font-medium">Start learning here</span>
          </div>

          <section className="mt-3 rounded-3xl border border-border p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <ChevronDown className="size-4 text-muted-foreground" aria-hidden />
              <span className="size-4 rounded-full border border-border" />
              <h2 className="text-lg font-semibold">Behavioral Economics Foundations</h2>
            </div>

            <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-lilac/25 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-medium">See what you already know</p>
                <p className="text-sm text-muted-foreground">Takes 3 minutes</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button type="button" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-foreground">Save Time</button>
                <button type="button" className="rounded-full px-3 py-2 text-sm text-muted-foreground">Skip</button>
              </div>
            </div>

            <ul className="mt-2 border-l border-border pl-4">
              {topics.map((topic) => (
                <li key={topic} className="flex items-center gap-3 py-3">
                  <span className="size-4 shrink-0 rounded-full border border-border" />
                  <span className="min-w-0 truncate text-[15px]">{topic}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-4">
          <section className="rounded-3xl bg-surface p-5">
            <h2 className="text-lg">Your Progress</h2>
            <span className="mt-3 block h-1.5 rounded-full bg-secondary" />
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><BookOpen className="size-4" aria-hidden /> 15 Topics</li>
              <li className="flex items-center gap-2 text-muted-foreground"><CircleCheck className="size-4 text-lavender" aria-hidden /> 0 Covered</li>
              <li className="flex items-center gap-2 text-muted-foreground"><CircleCheck className="size-4 text-lavender" aria-hidden /> 0 Mastered</li>
            </ul>
          </section>
          <section className="rounded-3xl bg-surface p-5">
            <h2 className="text-lg">Add your syllabus</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tailor your study plan schedule and priorities.</p>
            <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-medium">
              <Plus className="size-4" aria-hidden /> Add syllabus
            </button>
          </section>
          <section className="rounded-3xl bg-surface p-5">
            <h2 className="text-lg">Exam Dates</h2>
            <p className="mt-1 text-sm text-muted-foreground">Ensure you are studying what matters before your exam.</p>
            <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-medium">
              <Plus className="size-4" aria-hidden /> Add exam date
            </button>
          </section>
        </aside>
      </div>
    </DashboardLayout>
  );
}
