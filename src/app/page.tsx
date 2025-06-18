import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
            <span className="text-xl font-bold text-white">
              Al-Jahans Academy
            </span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a
              href="#about"
              className="text-gray-300 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative px-6 pt-20 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
              Master Languages
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                with Excellence
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              Unlock new opportunities and connect with the world through our
              innovative language learning programs. Expert instructors, proven
              methods, extraordinary results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/course-material"
                className="transform rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-orange-700"
              >
                View Course Material
              </Link>
              <button className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"></div>
        <div className="absolute top-1/3 right-20 h-16 w-16 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 h-12 w-12 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-20 delay-2000"></div>
      </main>

      {/* Features Section */}
      <section className="bg-black/20 px-6 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Why Choose Al-Jahans Academy?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
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
                Expert Instructors
              </h3>
              <p className="text-gray-300">
                Learn from native speakers and certified language experts with
                years of teaching experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-600">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Fast-Track Learning
              </h3>
              <p className="text-gray-300">
                Our proven methodology helps you achieve fluency faster than
                traditional learning methods.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Proven Results
              </h3>
              <p className="text-gray-300">
                Join thousands of successful students who have achieved their
                language learning goals with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Join Al-Jahans Academy today and take the first step towards
            mastering a new language.
          </p>
          <Link
            href="/course-material"
            className="inline-block transform rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-5 text-xl font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-orange-700"
          >
            Explore Our Courses
          </Link>
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
