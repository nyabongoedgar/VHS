import { Target, Users, Lightbulb, CheckCircle } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <CheckCircle size={32} />,
      title: "Integrity",
      description: "We conduct all business with the highest ethical standards and transparency.",
    },
    {
      icon: <Target size={32} />,
      title: "Excellence",
      description: "We strive for excellence in every transaction and relationship.",
    },
    {
      icon: <Users size={32} />,
      title: "Partnership",
      description: "We build long-term relationships based on mutual trust and success.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We continuously adapt to meet the evolving needs of global trade.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Vathy Frontier Holdings
            </h1>
            <p className="text-xl text-gray-300">
              Building bridges between Uganda and the world through reliable, multi-dimensional trade solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Vathy Frontier Holdings (U) LTD is a dynamic, multi-dimensional enterprise based in Uganda,
                  specializing in global trade and supply chain solutions across diverse industries.
                </p>
                <p>
                  Our company was founded on the principle that Uganda's rich resources deserve access to
                  global markets, and that international buyers deserve a reliable, professional partner
                  in East Africa.
                </p>
                <p>
                  From precious metals to agricultural produce, from construction materials to specialty
                  commodities like premium coffee, we handle it all with expertise, professionalism, and
                  an unwavering commitment to quality.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 text-lg mb-8">
                To connect Uganda's finest products and resources to global markets through reliable,
                efficient, and sustainable trade practices that benefit all stakeholders.
              </p>

              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become East Africa's most trusted multi-dimensional trading partner, recognized for
                excellence, reliability, and our commitment to long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
              What Makes Us Different
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Multi-Dimensional Expertise
                </h3>
                <p className="text-gray-700">
                  Unlike specialized traders, we handle diverse commodities from precious metals to
                  agricultural products, giving you a single, trusted partner for all your needs.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Local Knowledge, Global Standards
                </h3>
                <p className="text-gray-700">
                  We combine deep understanding of Uganda's markets and resources with international
                  best practices in trade, logistics, and quality control.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Relationship-Focused Approach
                </h3>
                <p className="text-gray-700">
                  We're not just about transactions. We build lasting partnerships, understanding that
                  your success is our success.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-700">
                  Our growing portfolio of international clients, including major coffee importers in
                  Europe, demonstrates our ability to deliver on promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Discover how Vathy Frontier Holdings can support your business needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
