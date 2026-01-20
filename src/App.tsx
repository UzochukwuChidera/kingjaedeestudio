import { useState } from "react";

import {
  Play,
  Menu,
  X,
  Mail,
  Instagram,
  ArrowRight,
  Film,
  ArrowLeft,
  Download,
  Shield,
  FileText,
} from "lucide-react";
import { FaTiktok, FaPhone } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  size: string;
  videoLink?: string;
};

type Page = "home" | "contact" | "privacy" | "terms";

const MagazinePortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const [showReelOpen, setShowReelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for your interest! We'll contact you at ${email}`);
      setEmail("");
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdaanedv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert(
          `Thank you ${formData.name}! We've received your inquiry and will respond within 24 hours.`
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });

        setCurrentPage("home");
      } else {
        alert("Message failed to send. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
    }
  };

  const handleDownloadResume = () => {
    alert(
      "Resume download would start here. You would link to your actual PDF resume file."
    );
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const projects = [
    {
      id: 1,
      title: "PR 2025",
      client: "Precious and Richard",
      category: "Wedding coverage",
      year: "2025",
      description:
        "A powerful narrative celebrating athletes who overcome adversity",
      size: "large",
      videoLink: "", 
    },
    {
      id: 2,
      title: "Urban Pulse",
      client: "Adidas",
      category: "Music Video",
      year: "2024",
      description: "High-energy visual storytelling through city landscapes",
      size: "medium",
    },
    {
      id: 3,
      title: "Midnight Runway",
      client: "Vogue",
      category: "Fashion Film",
      year: "2024",
      description: "Elegant cinematography showcasing haute couture",
      size: "small",
      
    },
    {
      id: 4,
      title: "Opening",
      client: "Crunches",
      category: "Commercial",
      year: "2025",
      description: "Sleek product showcase with innovative camera work",
      size: "medium",
      videoLink: "https://youtube.com/embed/shorts/VaMMeSfzpx4?si=BKUss9xGb7vmfXut",
    },
    {
      id: 5,
      title: "Wild Horizons",
      client: "National Geographic",
      category: "Documentary",
      year: "2024",
      description: "Breathtaking nature cinematography across continents",
      size: "large",
    },
    {
      id: 6,
      title: "Street Symphony",
      client: "Independent",
      category: "Short Film",
      year: "2025",
      description: "Raw storytelling capturing urban life",
      size: "small",
    },
  ];

  // Privacy Policy Page
  if (currentPage === "privacy") {
    return (
      <div className="bg-white text-black min-h-screen">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => navigateToPage("home")}
              className="flex items-center gap-2 hover:text-red-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">Back to Home</span>
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield size={40} className="text-red-600" />
            <h1 className="text-5xl font-black">Privacy Policy</h1>
          </div>

          <p className="text-gray-600 mb-8">Last updated: January 3, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                When you visit our website or contact us, we may collect the
                following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Personal identification information (Name, email address,
                  phone number)
                </li>
                <li>
                  Project details and inquiries you submit through contact forms
                </li>
                <li>
                  Technical data including IP address, browser type, and device
                  information
                </li>
                <li>Cookies and usage data to improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                3. Data Protection
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure. Your data is stored securely and we never sell your
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience.
                You can choose to disable cookies through your browser settings,
                though this may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party services such as Google Analytics to
                analyze website traffic. These services have their own privacy
                policies governing their use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us at:
              </p>
              <p className="mt-4 font-semibold">contact@alexmorrison.com</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  // Terms of Service Page
  if (currentPage === "terms") {
    return (
      <div className="bg-white text-black min-h-screen">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => navigateToPage("home")}
              className="flex items-center gap-2 hover:text-red-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">Back to Home</span>
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText size={40} className="text-red-600" />
            <h1 className="text-5xl font-black">Terms of Service</h1>
          </div>

          <p className="text-gray-600 mb-8">Last updated: January 3, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                2. Use of Website
              </h2>
              <p className="mb-4">
                You agree to use this website only for lawful purposes. You must
                not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Copy, reproduce, or distribute content without permission
                </li>
                <li>Use automated systems to access the website</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>
                  Use the website in any way that could damage or impair it
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website, including videos, photographs,
                graphics, and text, is protected by copyright and owned by King
                Jaedee or licensed to us. You may not use any content without
                our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                4. Services and Projects
              </h2>
              <p className="mb-4">When engaging our videography services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Project Scope:</strong> All projects require a signed
                  agreement detailing deliverables, timeline, and payment terms
                </li>
                <li>
                  <strong>Payment:</strong> A 50% deposit is required to begin
                  work, with the balance due upon delivery
                </li>
                <li>
                  <strong>Revisions:</strong> Two rounds of revisions are
                  included in the quoted price
                </li>
                <li>
                  <strong>Cancellation:</strong> Deposits are non-refundable.
                  Cancellations within 48 hours of scheduled shoots incur a 50%
                  fee
                </li>
                <li>
                  <strong>Ownership:</strong> Final deliverables are licensed to
                  the client for agreed-upon usage rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                We strive to provide excellent service but cannot guarantee
                results. We are not liable for any indirect, consequential, or
                special damages arising from the use of our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                6. Portfolio Usage
              </h2>
              <p>
                Unless otherwise agreed in writing, we reserve the right to
                feature completed work in our portfolio, website, and
                promotional materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time.
                Continued use of the website after changes constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">
                8. Contact Information
              </h2>
              <p>For questions about these Terms of Service, please contact:</p>
              <p className="mt-4 font-semibold">@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  // Contact Page
  if (currentPage === "contact") {
    return (
      <div className="bg-zinc-50 text-black min-h-screen">
        <nav className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => navigateToPage("home")}
              className="flex items-center gap-2 hover:text-red-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">Back to Home</span>
            </button>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black mb-6">Let's Work Together</h1>
            <p className="text-xl text-gray-600">
              Tell me about your project and let's create something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Project Type *
                  </label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition"
                  >
                    <option value="">Select a project type</option>
                    <option value="brand">Brand Campaign</option>
                    <option value="music">Music Video</option>
                    <option value="documentary">Documentary</option>
                    <option value="fashion">Fashion Film</option>
                    <option value="corporate">Corporate Video</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Budget Range *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition"
                  >
                    <option value="">Select a budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-600 outline-none transition resize-none"
                    placeholder="Tell me about your project, timeline, and vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition text-lg font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-red-600 mt-1" size={24} />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <a
                        href="mailto:contact@alexmorrison.com"
                        className="text-gray-300 hover:text-red-600 transition"
                      >
                        contact@alexmorrison.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Instagram className="text-red-600 mt-1" size={24} />
                    <div>
                      <p className="font-bold mb-1">Instagram</p>
                      <a
                        href="https://www.instagram.com/kingjaedeestudio?utm_source=qr&igsh=bnJ2empyZW5ndDlt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-600 transition"
                      >
                        @kingjaedeestudio
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaTiktok className="text-red-600 mt-1" size={24} />
                    <div>
                      <p className="font-bold mb-1">Tiktok</p>
                      <a
                        href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40kingjaedeestudio%3F_r%3D1%26_t%3DZS-92OOaebo05B%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5W-cbHbJKYjom7oFomqV_WXf_yGXzOZipI7OXIyDFqBGkrGoI5EMELiWKKw_aem_emJbxzm7glwMlVH4tjbjVw&e=AT0Qa_wYWduVc0xGUsUERrJGordmzmTAEcGfnj0my992lR39BGPY2jo5bQJoiUywNeqCfr1vizM94VQVgis-bq8LdTY1fa2x9kNYZp36Ow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-600 transition"
                      >
                        @kingjaedeestudio
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-red-600 mt-1" size={24} />
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <a
                        href="https://wa.me/234 706 264 9120"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-600 transition"
                      >
                        +234 706 264 9120
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-700 mb-4">
                  I typically respond to all inquiries within 24 hours during
                  business days.
                </p>
                <p className="text-gray-700">
                  Based in Aba, Abia state Nigeria
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">What to Include</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Project goals and vision</li>
                  <li>• Timeline and deadlines</li>
                  <li>• Budget expectations</li>
                  <li>• Reference materials</li>
                  <li>• Target audience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home Page (existing portfolio)
  return (
    <div className="bg-zinc-50 text-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight">
            KING JAEDEE STUDIO
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#work" className="hover:text-red-600 transition">
              Work
            </a>
            <a href="#about" className="hover:text-red-600 transition">
              About
            </a>
            <a href="#services" className="hover:text-red-600 transition">
              Services
            </a>
            <button
              onClick={() => navigateToPage("contact")}
              className="px-6 py-2 bg-red-600 text-white hover:bg-red-700 transition"
            >
              Contact
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 p-6 space-y-4">
            <a
              href="#work"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <button
              onClick={() => navigateToPage("contact")}
              className="block text-lg text-red-600 w-full text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-sm font-bold tracking-widest text-red-600">
                FEATURED WORK
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-none">
                Stories That Move
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Award-winning photographer and cinematographer crafting
                compelling visual narratives for brands, events, personal
                projects and storytellers worldwide
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setShowReelOpen(true)}
                  className="px-8 py-3 bg-red-600 text-white hover:bg-red-700 transition flex items-center gap-2"
                >
                  View Showreel <Play size={18} className="ml-1" />
                </button>
                <button
                  onClick={() => navigateToPage("contact")}
                  className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div
                onClick={() => setShowReelOpen(true)}
                className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="text-sm mb-1">Latest Project</div>
                  <div className="text-2xl font-bold">
                    Nike Spring Campaign 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">5</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">80+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">7+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-4">Selected Work</h2>
            <p className="text-xl text-gray-600">
              A collection of my recent projects
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="space-y-16">
            {/* Row 1 - Large Left, Small Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div
                className="lg:col-span-7 group cursor-pointer"
                onClick={() => setSelectedVideo(projects[0])}
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-3xl font-bold">{projects[0].title}</h3>
                  <span className="text-sm text-red-600 font-bold">
                    {projects[0].category}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  {projects[0].client} • {projects[0].year}
                </p>
                <p className="text-gray-700">{projects[0].description}</p>
              </div>

              <div className="lg:col-span-5 flex items-end">
                <div
                  className="w-full group cursor-pointer"
                  onClick={() => setSelectedVideo(projects[2])}
                >
                  <div className="relative aspect-square bg-gradient-to-br from-red-200 to-red-300 mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center">
                        <Play size={24} className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {projects[2].title}
                  </h3>
                  <p className="text-gray-600">
                    {projects[2].client} • {projects[2].year}
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 - Three Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects
                .slice(1, 2)
                .concat(projects.slice(3, 5))
                .map((project) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedVideo(project)}
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 mb-4 overflow-hidden">
                      <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center">
                          <Play size={24} className="ml-1" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {project.client} • {project.year}
                    </p>
                  </div>
                ))}
            </div>

            {/* Row 3 - Large Right, Small Left */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div
                className="lg:col-span-5 group cursor-pointer"
                onClick={() => setSelectedVideo(projects[5])}
              >
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-600 mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{projects[5].title}</h3>
                <p className="text-gray-600">
                  {projects[5].client} • {projects[5].year}
                </p>
              </div>

              <div className="lg:col-span-7 flex items-center">
                <div className="w-full">
                  <div className="bg-black text-white p-8 lg:p-12">
                    <h3 className="text-4xl font-black mb-4">
                      Let's Create Something Amazing
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Available for select projects in 2026
                    </p>
                    <button
                      onClick={() => navigateToPage("contact")}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 transition"
                    >
                      Start a Project <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-600">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://i.imgur.com/4p1qIHE.jpeg"
                alt="Photographer portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-sm font-bold tracking-widest text-red-600">
              ABOUT ME
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Crafting Visual Stories For Over five a Decade
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a photographer, cinematographer and director based in Aba,
              specializing in brand campaigns, music videos, event coverage,
              personal projects, photoshoots, documentaries and many more . My
              approach combines technical precision with emotional storytelling.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience working alongside major brands and independent
              artists, I bring a unique perspective to every project, ensuring
              each frame serves the story.
            </p>
            <a
              href="/King-Jaedee-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Campaigns",
                desc: "High-impact commercial work for global brands",
              },
              {
                title: "Music Videos",
                desc: "Creative visual storytelling for artists",
              },
              {
                title: "Documentary",
                desc: "Authentic narratives with cinematic quality",
              },
              {
                title: "Fashion Films",
                desc: "Elegant cinematography for fashion houses",
              },
              {
                title: "Corporate Videos",
                desc: "Professional content for businesses",
              },
              {
                title: "Event Coverage",
                desc: "Capturing special moments with style",
              },
              {
                title: "Personal projects",
                desc: "Creative concepts driven by passion and storytelling.",
              },
              {
                title: "Photography",
                desc: "Professional photography that captures moments, emotions, and details with precision.",
              },
              {
                title: "Photo Book And Photo Frame",
                desc: "Beautifully curated photo books and premium photo frames designed to preserve memories that last a lifetime.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 p-6 hover:border-red-600 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate and create something extraordinary together
          </p>
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-6 py-4 text-black text-lg w-full sm:w-96"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black hover:bg-gray-900 transition text-lg font-bold"
            >
              Get Started
            </button>
          </form>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:contact@alexmorrison.com"
              className="hover:opacity-70 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.instagram.com/kingjaedeestudio?utm_source=qr&igsh=bnJ2empyZW5ndDlt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40kingjaedeestudio%3F_r%3D1%26_t%3DZS-92OOaebo05B%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5W-cbHbJKYjom7oFomqV_WXf_yGXzOZipI7OXIyDFqBGkrGoI5EMELiWKKw_aem_emJbxzm7glwMlVH4tjbjVw&e=AT0Qa_wYWduVc0xGUsUERrJGordmzmTAEcGfnj0my992lR39BGPY2jo5bQJoiUywNeqCfr1vizM94VQVgis-bq8LdTY1fa2x9kNYZp36Ow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
              aria-label="Vimeo"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://wa.me/234 706 264 9120"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
              aria-label="Vimeo"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black">KING JAEDEE STUDIO</div>
          <div className="text-gray-400">© 2026 All rights reserved</div>
          <div className="flex gap-6">
            <button
              onClick={() => navigateToPage("privacy")}
              className="hover:text-red-600 transition"
            >
              Privacy
            </button>
            <button
              onClick={() => navigateToPage("terms")}
              className="hover:text-red-600 transition"
            >
              Terms
            </button>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-400">
                  {selectedVideo.client} • {selectedVideo.category} •{" "}
                  {selectedVideo.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-red-600 transition"
              >
                <X size={32} />
              </button>
            </div>
            <div className="aspect-video bg-black overflow-hidden rounded-lg">
  <iframe
    src={selectedVideo.videoLink}
    className="w-full h-full"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title={selectedVideo.title}
  />
</div>

            <p className="text-white mt-6 text-lg">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      )}

      {/* Showreel Modal */}
      {showReelOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setShowReelOpen(false)}
        >
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-white">
                <h3 className="text-4xl font-bold mb-2">2025 Showreel</h3>
                <p className="text-gray-400">A collection of my best work</p>
              </div>
              <button
                onClick={() => setShowReelOpen(false)}
                className="text-white hover:text-red-600 transition"
              >
                <X size={32} />
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <Play size={80} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl">Showreel Video Player</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazinePortfolio;
