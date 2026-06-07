import { FaImages, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <FaImages className="mx-auto text-4xl sm:text-5xl text-blue-600 mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">About</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500">
          A modern image gallery built with React.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            What is ImageGallery?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            ImageGallery is a beautifully designed web application for browsing
            and discovering high-quality images. Built with modern web
            technologies, it offers a seamless experience for exploring curated
            collections across various categories.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "React 19", desc: "UI Framework" },
              { name: "Vite", desc: "Build Tool" },
              { name: "Tailwind CSS", desc: "Styling" },
              { name: "Material UI", desc: "Components" },
              { name: "React Router", desc: "Routing" },
              { name: "React Icons", desc: "Icons" },
            ].map(({ name, desc }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="font-semibold text-gray-800 text-xs sm:text-sm">
                  {name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
          >
            <FaGithub />
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  );
}
