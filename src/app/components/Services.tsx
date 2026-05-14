import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Package, Truck, FileCheck, HeadphonesIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Coffee Supply & Export",
      description:
        "Premium Ugandan coffee beans, carefully sourced from select farms and exported to international markets. We specialize in Arabica and Robusta varieties, ensuring quality control from farm to port.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
      features: [
        "Arabica and Robusta varieties",
        "Quality grading and sorting",
        "Export documentation and logistics",
        "Direct farm partnerships",
      ],
      link: "/coffee-supply",
    },
    {
      title: "Precious Metals Trading",
      description:
        "We facilitate the trade of gold, silver, and other precious metals, ensuring secure transactions, proper documentation, and compliance with international standards.",
      image: "https://images.unsplash.com/photo-1718752773283-de1f92513671",
      features: [
        "Gold and silver trading",
        "Certified quality assurance",
        "Secure handling and transport",
        "International compliance",
      ],
      link: "/contact",
    },
    {
      title: "Agricultural Produce",
      description:
        "From grains to fresh produce, we connect Uganda's rich agricultural output with global buyers. Our network ensures freshness, quality, and timely delivery.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
      features: [
        "Grains and cereals",
        "Fresh fruits and vegetables",
        "Organic and conventional options",
        "Cold chain logistics available",
      ],
      link: "/contact",
    },
    {
      title: "Construction Materials",
      description:
        "Comprehensive supply of construction materials including cement, steel, timber, and finishing materials for projects of any scale.",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea",
      features: [
        "Cement and aggregates",
        "Steel and reinforcement",
        "Timber and wood products",
        "Bulk delivery options",
      ],
      link: "/contact",
    },
  ];

  const process = [
    {
      icon: <FileCheck size={32} />,
      title: "1. Consultation",
      description: "We discuss your requirements and provide detailed quotes",
    },
    {
      icon: <Package size={32} />,
      title: "2. Sourcing",
      description: "We source the highest quality products from trusted suppliers",
    },
    {
      icon: <FileCheck size={32} />,
      title: "3. Quality Check",
      description: "Rigorous quality control and documentation",
    },
    {
      icon: <Truck size={32} />,
      title: "4. Delivery",
      description: "Secure logistics and timely delivery to your destination",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Multi-dimensional trading solutions across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    {service.link === "/coffee-supply" ? "Learn More" : "Get a Quote"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures quality and reliability at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Food & Beverage",
              "Construction",
              "Manufacturing",
              "Retail",
              "Hospitality",
              "Mining",
              "Agriculture",
              "Export/Import",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center hover:border-amber-600 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-slate-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HeadphonesIcon size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Our team is ready to discuss your specific requirements
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
