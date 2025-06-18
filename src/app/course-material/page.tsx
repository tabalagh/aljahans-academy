import Link from "next/link";

export default function CourseMaterialPage() {
  const languages = [
    {
      name: "Arabic",
      flag: "🇸🇦",
      levels: ["Beginner", "Intermediate", "Advanced"],
      lessonsCount: 24,
      description: "Master Modern Standard Arabic and classical literature",
    },
    {
      name: "French",
      flag: "🇫🇷",
      levels: ["Beginner", "Intermediate", "Advanced"],
      lessonsCount: 32,
      description: "From basic conversation to business French",
    },
    {
      name: "Spanish",
      flag: "🇪🇸",
      levels: ["Beginner", "Intermediate", "Advanced"],
      lessonsCount: 28,
      description: "Communicate confidently in Spanish-speaking countries",
    },
    {
      name: "German",
      flag: "🇩🇪",
      levels: ["Beginner", "Intermediate"],
      lessonsCount: 20,
      description: "Navigate German culture and business environment",
    },
  ];

  const featuredLessons = [
    {
      title: "Arabic Alphabet Mastery",
      language: "Arabic",
      level: "Beginner",
      duration: "45 min",
      progress: 75,
      description:
        "Learn to read and write all 28 letters of the Arabic alphabet with proper pronunciation.",
    },
    {
      title: "French Conversation Essentials",
      language: "French",
      level: "Intermediate",
      duration: "60 min",
      progress: 60,
      description:
        "Practice everyday conversations including shopping, dining, and social interactions.",
    },
    {
      title: "Spanish Business Communication",
      language: "Spanish",
      level: "Advanced",
      duration: "90 min",
      progress: 30,
      description:
        "Master professional Spanish for meetings, presentations, and negotiations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
            <span className="text-xl font-bold text-white">
              Al-Jahans Academy
            </span>
          </Link>
          <div className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <a
              href="#languages"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Languages
            </a>
            <a
              href="#progress"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Progress
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Course Material
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              & Learning Resources
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
            Access comprehensive language learning materials designed by expert
            instructors. Start your journey or continue where you left off.
          </p>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="bg-black/20 px-6 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Continue Learning
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredLessons.map((lesson, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 text-sm text-white">
                    {lesson.language}
                  </span>
                  <span className="text-sm text-gray-400">
                    {lesson.duration}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {lesson.title}
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  {lesson.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{lesson.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300"
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                    Continue Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Overview */}
      <section id="languages" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Available Languages
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {languages.map((language, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4 text-4xl">{language.flag}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {language.name}
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  {language.description}
                </p>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Lessons</span>
                    <span className="text-white">{language.lessonsCount}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {language.levels.map((level, levelIndex) => (
                      <span
                        key={levelIndex}
                        className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 py-2 text-white transition-all duration-300 hover:from-amber-600 hover:to-orange-700">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tools */}
      <section className="bg-black/20 px-6 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Learning Tools & Resources
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Audio Pronunciation
              </h3>
              <p className="mb-6 text-gray-300">
                Perfect your accent with native speaker audio and pronunciation
                guides.
              </p>
              <button className="rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700">
                Practice Now
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Interactive Flashcards
              </h3>
              <p className="mb-6 text-gray-300">
                Memorize vocabulary and phrases with our spaced repetition
                system.
              </p>
              <button className="rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700">
                Study Cards
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Grammar Exercises
              </h3>
              <p className="mb-6 text-gray-300">
                Master grammar rules with interactive exercises and instant
                feedback.
              </p>
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                Practice Grammar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section id="progress" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Your Learning Progress
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Weekly Goals
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-300">Lessons Completed</span>
                    <span className="text-white">8/10</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-300">Practice Time</span>
                    <span className="text-white">4.5/5.0 hours</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-700">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                    <span className="text-sm text-white">🏆</span>
                  </div>
                  <span className="text-gray-300">7-day streak</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500">
                    <span className="text-sm text-white">📚</span>
                  </div>
                  <span className="text-gray-300">100 words learned</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500">
                    <span className="text-sm text-white">🎯</span>
                  </div>
                  <span className="text-gray-300">Level 1 completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © 2024 Al-Jahans Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
