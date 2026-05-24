import { Link } from "react-router";
import { ArrowRight, Globe, Shield, Award, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { holdingSectors } from "../data/sectors";

export function Home() {
  const services = [
    {
      title: "Coffee Supply",
      description: "Premium coffee beans sourced and exported worldwide, including to Europe.",
      link: "/coffee-supply",
    },
    {
      title: "Precious Metals",
      description: "Trading and supply of gold, silver, and other precious metals.",
      link: "/services",
    },
    {
      title: "Agriculture Produce",
      description: "Quality agricultural products from Uganda's fertile lands.",
      link: "/services",
    },
    {
      title: "Construction Materials",
      description: "Building materials and construction supplies for all project scales.",
      link: "/services",
    },
  ];

  const stats = [
    { value: "100+", label: "Global Partners" },
    { value: "15+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center" style={{ backgroundColor: 'var(--navy-900)' }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMHNoaXBwaW5nJTIwY29udGFpbmVycyUyMHBvcnR8ZW58MXx8fHwxNzc4NzYzNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global trade and shipping"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                Est. 2024
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-[1.1]">
              Vathy Frontier <br />
              <span className="font-medium italic">Holdings</span>
            </h1>
            <div className="w-24 h-0.5 mb-8" style={{ backgroundColor: 'var(--gold)' }}></div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              A distinguished multi-dimensional enterprise connecting Uganda's finest resources to global markets with uncompromising excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/coffee-supply"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-medium transition-all border-2 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--gold)',
                  borderColor: 'var(--gold)',
                }}
              >
                Explore Coffee Export
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-[var(--navy-900)] transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16" style={{ backgroundColor: 'var(--navy-800)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-light text-white mb-3" style={{ color: 'var(--gold)' }}>
                  {stat.value}
                </div>
                <div className="text-sm tracking-wider uppercase text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-[1.2]" style={{ color: 'var(--navy-900)' }}>
                Excellence in <br />
                <span className="font-medium italic">Global Trade</span>
              </h2>
              <div className="w-16 h-0.5 mb-8" style={{ backgroundColor: 'var(--gold)' }}></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vathy Frontier Holdings (U) LTD is a diversified holding company at the intersection of Uganda's rich resources and global commerce. Beyond precious metals, premium coffee, agricultural produce, and construction materials, we invest across hospitality, real estate, education, and more.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our commitment to quality, reliability, and ethical business practices has established us as a trusted partner in international trade.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-base font-medium"
                style={{ color: 'var(--gold)' }}
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
                  alt="Agriculture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 -z-10" style={{ borderColor: 'var(--gold)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                Our Portfolio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-[1.2]" style={{ color: 'var(--navy-900)' }}>
              Business <span className="font-medium italic">Sectors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A multi-sector holding company building value across trade, services, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holdingSectors.map((sector, index) => (
              <div
                key={index}
                className="group border border-gray-100 bg-[#f8f9fa] p-8 transition-all hover:border-[var(--gold)] hover:shadow-lg"
              >
                <div className="w-10 h-10 mb-5 border flex items-center justify-center text-sm font-medium"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-light mb-3" style={{ color: 'var(--navy-900)' }}>
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-[1.2]" style={{ color: 'var(--navy-900)' }}>
              Our <span className="font-medium italic">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white p-10 transition-all hover:shadow-2xl border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border transition-colors"
                    style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: 'var(--navy-900)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                Our Commitment
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-[1.2]" style={{ color: 'var(--navy-900)' }}>
              Why Choose <span className="font-medium italic">Vathy Frontier</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 mb-6"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              >
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--navy-900)' }}>Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Established trade networks spanning multiple continents, connecting markets seamlessly.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 mb-6"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              >
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--navy-900)' }}>Unwavering Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted partner for timely and secure deliveries with full transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 mb-6"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              >
                <Award size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--navy-900)' }}>Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quality standards ensuring excellence in every product we handle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy-900)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 leading-[1.2]">
            Ready to <span className="font-medium italic">Partner</span> With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Discover how Vathy Frontier Holdings can elevate your business with premium trade solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-medium transition-all border-2 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--gold)',
              borderColor: 'var(--gold)',
            }}
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
