import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, Award, Truck, Shield, MapPin, CheckCircle } from "lucide-react";

export function CoffeeSupply() {
  const coffeeTypes = [
    {
      name: "Arabica",
      description: "Premium quality Arabica beans from high-altitude regions of Uganda",
      characteristics: ["Smooth flavor", "Low acidity", "Complex aroma", "Specialty grade"],
    },
    {
      name: "Robusta",
      description: "Bold, strong Robusta beans known for their rich body and crema",
      characteristics: ["Strong body", "High caffeine", "Chocolatey notes", "Excellent crema"],
    },
  ];

  const exportProcess = [
    {
      step: "1",
      title: "Farm Selection",
      description: "We partner with certified farms in Uganda's premier coffee-growing regions",
    },
    {
      step: "2",
      title: "Quality Grading",
      description: "Each batch undergoes rigorous quality control and grading by experts",
    },
    {
      step: "3",
      title: "Processing",
      description: "Professional processing, drying, and hulling to preserve bean quality",
    },
    {
      step: "4",
      title: "Export Documentation",
      description: "Complete handling of all export paperwork and certifications",
    },
    {
      step: "5",
      title: "Logistics",
      description: "Efficient shipping to European ports including Napoli, Italy",
    },
    {
      step: "6",
      title: "Delivery",
      description: "Timely delivery with full tracking and insurance coverage",
    },
  ];

  const certifications = [
    "Fair Trade Certified",
    "Organic Certified",
    "Rainforest Alliance",
    "UTZ Certified",
    "ISO 9001 Quality Management",
  ];

  const regions = [
    { name: "Mount Elgon", specialty: "High-altitude Arabica" },
    { name: "Rwenzori Mountains", specialty: "Premium Arabica" },
    { name: "Central Region", specialty: "Quality Robusta" },
    { name: "Western Uganda", specialty: "Specialty Arabica" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4"
            alt="Coffee beans"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Premium Coffee Supply to Europe
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Direct from Uganda's finest coffee regions to Napoli and beyond
            </p>
            <div className="flex items-center gap-6 text-amber-400">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Uganda → Italy</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Coffee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Ugandan Coffee?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uganda is the 8th largest coffee producer globally, renowned for quality and unique flavor profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Ideal Growing Conditions</h3>
              <p className="text-gray-600">
                Perfect altitude, rainfall, and soil create exceptional coffee beans
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality Certified</h3>
              <p className="text-gray-600">
                Multiple international certifications ensuring top standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600">
                Ethical partnerships with local farmers and communities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reliable Export</h3>
              <p className="text-gray-600">
                Streamlined logistics to European markets including Napoli
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Varieties */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Coffee Varieties</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coffeeTypes.map((coffee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-slate-200">
                  <ImageWithFallback
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1447933601403-0c6688de566e"
                        : "https://images.unsplash.com/photo-1675306408031-a9aad9f23308"
                    }
                    alt={coffee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{coffee.name}</h3>
                  <p className="text-gray-700 mb-6">{coffee.description}</p>

                  <div className="space-y-2">
                    {coffee.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Export Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From farm to your facility in Napoli - complete transparency at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportProcess.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-amber-600 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Regions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coffee Growing Regions</h2>
            <p className="text-xl text-gray-600">
              We source from Uganda's premier coffee-producing areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <MapPin className="text-amber-600 mx-auto mb-3" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{region.name}</h3>
                <p className="text-gray-600 text-sm">{region.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Certifications & Standards
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-amber-600 rounded-lg px-6 py-3 font-medium text-slate-900"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Import Premium Ugandan Coffee?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact us today to discuss volumes, pricing, and delivery to Napoli
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
