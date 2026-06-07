function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          Dharmavarshini
        </h1>

        <div className="space-x-5">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="text-center py-24">

        <h2 className="text-5xl font-bold mb-4">
          <span className="text-cyan-400"> Dharmavarshini</span>
        </h2>

        <p className="text-gray-400 text-lg">
          React Developer | Frontend Learner | Creative Designer
        </p>

      </section>

      {/* About */}

      <section
        id="about"
        className="max-w-5xl mx-auto p-6"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          I am Dharmavarshini, a passionate frontend developer
          interested in React and Tailwind CSS.
          I enjoy creating beautiful websites,
          solving problems, and learning new technologies.
          I also love drawing and painting.
        </p>
      </section>

{/* Certificates */}

<section
  id="certificates"
  className="max-w-5xl mx-auto p-6 mt-16"
>
  <h2 className="text-4xl font-bold text-cyan-400 mb-8">
    Certificates
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Certificate 1 */}

    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-3">
        Code Craft
      </h3>

      <p className="text-gray-400">
        Holy Cross College (Autonomous)
      </p>

      <span className="inline-block mt-4 bg-cyan-500 text-black px-4 py-2 rounded-full font-semibold">
        Certified
      </span>
    </div>

    {/* Certificate 2 */}

    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-3">
        Gesture Control + Obstacle Avoiding Car
      </h3>

      <p className="text-gray-400">
        Jamal Mohamed College (Autonomous), Trichy
      </p>

      <span className="inline-block mt-4 bg-cyan-500 text-black px-4 py-2 rounded-full font-semibold">
        Project Certificate
      </span>
    </div>

  </div>
</section>
      {/* Skills */}

      <section
        id="skills"
        className="max-w-5xl mx-auto p-6 mt-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Responsive Design",
            "UI Design",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 px-5 py-3 rounded-lg border border-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}

      <section
        id="projects"
        className="max-w-5xl mx-auto p-6 mt-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Featured Project
        </h2>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition">

          <h3 className="text-2xl font-bold mb-3">
            Placement Prep Portal
          </h3>

          <p className="text-gray-400 mb-5">
            A student placement preparation portal built
            using React. It helps students prepare for
            placements with aptitude practice, resources,
            and dashboard features.
          </p>

          <a
            href="https://github.com/dharmavarshini567-svg/placement-prep-portal.git"
            target="_blank"
            className="bg-cyan-500 px-5 py-3 rounded-lg text-black font-bold hover:bg-cyan-400"
          >
            View Project
          </a>

        </div>
      </section>

     {/* Contact */}

<section
  id="contact"
  className="max-w-5xl mx-auto p-6 mt-16"
>
  <h2 className="text-4xl font-bold text-cyan-400 mb-8">
    Contact Me
  </h2>

  <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">

    <div className="space-y-4">

      <p>
        <span className="font-bold text-cyan-400">
          📧 Email:
        </span>
        <br />
        dharmavarshini567@gmail.com
      </p>

      <p>
        <span className="font-bold text-cyan-400">
          📱 Phone:
        </span>
        <br />
        9361629676
      </p>

      <p>
        <span className="font-bold text-cyan-400">
          📍 Address:
        </span>
        <br />
        303, Trichy Main Road,
        <br />
        Keeranur,
        <br />
        Pudukkottai District - 622502
      </p>

    </div>

  </div>
</section>
{/* Footer */}

<footer className="text-center py-8 mt-16 border-t border-gray-800">

  <p className="text-gray-500">
    © 2026 Dharmavarshini | Thank You For Visiting ❤️
  </p>

</footer>

</div>
);
}

export default App;