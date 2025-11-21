import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  const mockBooks = [
    {
      id: 1,
      title: 'A Ray of Light in the Dark',
      status: 'Published',
      year: 2022,
      description:
        "A collection of inspirational stories focusing on hope, resilience, and finding purpose in challenging times. (Inspired by your old site!)",
      coverImageUrl:
        'https://placehold.co/300x450/1f2937/a5b4fc?text=Book+1+Cover',
      amazonLink: '#amazon-link-for-book-1',
      pdfLink: '#pdf-download-link-for-book-1',
    },
    {
      id: 2,
      title: 'Echoes of the Forgotten Sun',
      status: 'Published',
      year: 2021,
      description:
        "A thrilling space opera detailing humanity's first contact with an ancient, silent alien race and the choices that define our future.",
      coverImageUrl:
        'https://placehold.co/300x450/1f2937/a5b4fc?text=Book+2+Cover',
      amazonLink: '#amazon-link-for-book-2',
      pdfLink: '#pdf-download-link-for-book-2',
    },
    {
      id: 3,
      title: 'The Silent Cartographer',
      status: 'Published',
      year: 2020,
      description:
        "A historical mystery set in 16th-century Venice, following a young mapmaker who uncovers a conspiracy hidden within the city's canals.",
      coverImageUrl:
        'https://placehold.co/300x450/1f2937/a5b4fc?text=Book+3+Cover',
      amazonLink: '#amazon-link-for-book-3',
      pdfLink: '#pdf-download-link-for-book-3',
    },
    {
      id: 4,
      title: 'Chronicles of the Ironwood',
      status: 'Writing in Progress',
      year: 'Expected 2024',
      description:
        'The first book in a new epic fantasy series, exploring a world where trees hold ancient power and nature is a ruthless deity.',
      coverImageUrl:
        'https://placehold.co/300x450/1f2937/a5b4fc?text=WIP+Cover',
      amazonLink: null,
      pdfLink: null,
    },
  ];

  const BookCard = ({ book }) => {
    const isWip =
      book.status?.toLowerCase().includes('writing') || !book.amazonLink;

    return (
      <div className="bg-gray-800/70 border border-gray-700/60 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex flex-col h-full">
          <div className="relative w-full aspect-[2/3] bg-gray-900">
            <img
              src={book.coverImageUrl}
              alt={`${book.title} cover`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-3 top-3 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900/80 text-sky-300 border border-gray-700">
              {book.status}
            </div>
          </div>

          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white leading-tight">
                {book.title}
              </h3>
              <span className="text-xs text-indigo-300/80 bg-gray-900/50 border border-gray-700 rounded-full px-2 py-1 whitespace-nowrap">
                {book.year}
              </span>
            </div>
            <p className="text-sm text-gray-300/90 leading-relaxed">
              {book.description}
            </p>

            <div className="mt-2">
              {isWip ? (
                <div className="text-sm text-amber-300/90 font-medium">
                  Coming Soon • {book.year}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {book.amazonLink && (
                    <a
                      href={book.amazonLink}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-0 transition"
                    >
                      Buy on Amazon
                    </a>
                  )}
                  {book.pdfLink && (
                    <a
                      href={book.pdfLink}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-700 text-sky-300 font-medium border border-gray-600 hover:border-sky-400 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                    >
                      Free PDF Download
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 bg-gray-900/90 border-b border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              [Your Author Name]
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#home" className="text-gray-300 hover:text-white transition">
                Home
              </a>
              <a href="#books" className="text-gray-300 hover:text-white transition">
                Books
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section id="home" className="relative">
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Spline
            scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Gradient overlay (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent"></div>
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl bg-gray-900/60 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Stories that illuminate the dark.
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-300">
                  I write across genres to explore resilience, wonder, and the fragile lines between what we fear and what we become.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#books"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    Explore Books
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-800 text-sky-300 border border-gray-700 font-medium hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section id="books" className="relative py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Books & Works
              </h2>
              <p className="text-gray-300/80 mt-2 text-sm md:text-base">
                A selection of published titles and upcoming projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Stay in the loop
            </h3>
            <p className="mt-2 text-gray-300/90 text-sm md:text-base">
              Want release updates, writing notes, or event announcements? Drop your email below.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-400">
              Prefer email? Reach out at
              <a href="mailto:author@example.com" className="text-sky-300 hover:text-sky-200 ml-1">
                author@example.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} [Your Author Name]. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
