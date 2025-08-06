import Link from "next/link";

const tutorials = [
  {
    id: "typescript",
    title: "Introduction to Typescript",
    description:
      "Learn the fundamentals of building user interfaces with React.",
    level: "Beginner",
  },
  {
    id: "nextjs",
    title: "Next.js Fundamentals",
    description:
      "Master the basics of building full-stack applications with Next.js.",
    level: "Intermediate",
  },
  {
    id: "reactjs",
    title: "Advanced TypeScript",
    description:
      "Dive deep into advanced TypeScript concepts like generics and utility types.",
    level: "Advanced",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto p-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Learn to Code, One Tutorial at a Time
          </h1>
          <p className="text-xl text-gray-400">
            Explore our curated list of tutorials on the latest programming
            languages and frameworks.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Featured Tutorials
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <Link href={`/docs/${tutorial.id}`} key={tutorial.id} passHref>
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{tutorial.description}</p>
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      tutorial.level === "Beginner"
                        ? "bg-green-500 text-green-900"
                        : tutorial.level === "Intermediate"
                        ? "bg-yellow-500 text-yellow-900"
                        : "bg-red-500 text-red-900"
                    }`}
                  >
                    {tutorial.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
