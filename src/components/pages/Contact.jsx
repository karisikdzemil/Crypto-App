import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#1A1C22ff] flex flex-col items-center justify-center p-10 gap-10">
      <h1 className="text-5xl font-bold text-white text-center">
        Get in Touch
      </h1>
      <p className="text-gray-400 text-lg text-center max-w-2xl">
        I'm always open to new opportunities, collaborations, or just a chat.
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10">
        {/* Email */}
        <div className="bg-[#2A2D36] p-8 rounded-2xl shadow-lg hover:shadow-yellow-400 transition duration-300 flex flex-col items-center gap-6 text-center">
          <Mail size={40} className="text-[#F0B90B]" />
          <h2 className="text-2xl font-bold text-white">Email</h2>
          <p className="text-gray-300">
            You can email me directly with your inquiries or ideas.
          </p>
          <a
            href="mailto:karisikdzemil@gmail.com"
            className="text-[#F0B90B] font-semibold hover:underline"
          >
            karisikdzemil@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-[#2A2D36] p-8 rounded-2xl shadow-lg hover:shadow-yellow-400 transition duration-300 flex flex-col items-center gap-6 text-center">
          <Linkedin size={40} className="text-[#F0B90B]" />
          <h2 className="text-2xl font-bold text-white">LinkedIn</h2>
          <p className="text-gray-300">
            Let’s connect professionally and grow our networks.
          </p>
          <a
            href="https://www.linkedin.com/in/karisikdzemil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0B90B] font-semibold hover:underline"
          >
            linkedin.com/in/karisikdzemil
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-[#2A2D36] p-8 rounded-2xl shadow-lg hover:shadow-yellow-400 transition duration-300 flex flex-col items-center gap-6 text-center">
          <Github size={40} className="text-[#F0B90B]" />
          <h2 className="text-2xl font-bold text-white">GitHub</h2>
          <p className="text-gray-300">
            Explore my projects, code, and contributions on GitHub.
          </p>
          <a
            href="https://github.com/karisikdzemil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0B90B] font-semibold hover:underline"
          >
            github.com/karisikdzemil
          </a>
        </div>
      </div>
    </section>
  );
}
