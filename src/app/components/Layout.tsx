import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const brandMontserrat = {
  fontFamily: "'Montserrat', sans-serif",
  fontOpticalSizing: "auto" as const,
};

function BrandMonogram() {
  return (
    <div
      className="flex size-11 shrink-0 items-center justify-center rounded-sm border-2 text-[11px] font-semibold leading-none tracking-[0.22em] text-[var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:size-[52px] sm:text-sm sm:tracking-[0.18em]"
      style={{ borderColor: "var(--gold)", ...brandMontserrat }}
      aria-hidden
    >
      VFH
    </div>
  );
}

function BrandWordmark() {
  return (
    <div className="flex min-w-0 flex-col">
      <span
        className="text-[0.9375rem] font-medium leading-[1.1] tracking-[0.12em] text-white antialiased sm:text-xl md:text-2xl"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        Vathy Frontier
      </span>
      <span
        className="mt-0.5 text-[10px] font-medium tracking-[0.28em] text-[var(--gold-light)] sm:text-xs sm:tracking-[0.32em]"
        style={{ fontFamily: "Cinzel, serif", fontOpticalSizing: "auto" }}
      >
        Holdings
      </span>
    </div>
  );
}

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Coffee Supply", path: "/coffee-supply" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-white sticky top-0 z-50 border-b backdrop-blur-sm" style={{
        backgroundColor: 'rgba(10, 22, 40, 0.95)',
        borderColor: 'rgba(197, 165, 114, 0.2)'
      }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Vathy Frontier Holdings, home"
              className="group flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2.5 rounded-sm outline-none ring-offset-2 ring-offset-[rgba(10,22,40,0.95)] transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[var(--gold)] sm:max-w-none sm:gap-3.5"
            >
              <BrandMonogram />
              <BrandWordmark />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2 text-sm font-light tracking-wide transition-all ${
                    isActive(item.path)
                      ? "text-white border-b-2"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={isActive(item.path) ? { borderColor: 'var(--gold)' } : {}}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden shrink-0 p-2 text-gray-300 hover:text-white"
              style={{ color: mobileMenuOpen ? 'var(--gold)' : undefined }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t" style={{ borderColor: 'rgba(197, 165, 114, 0.2)' }}>
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-light transition-colors ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={isActive(item.path) ? { color: 'var(--gold)' } : {}}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-white mt-auto" style={{ backgroundColor: 'var(--navy-900)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6 flex items-center gap-2.5 sm:gap-3.5">
                <BrandMonogram />
                <BrandWordmark />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A distinguished multi-dimensional enterprise delivering excellence across precious metals,
                agriculture, construction, and global supply chains.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-6 tracking-wide" style={{ color: 'var(--gold)' }}>Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-6 tracking-wide" style={{ color: 'var(--gold)' }}>Contact Information</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="font-light">Email: info@vathyfrontier.com</li>
                <li className="font-light">Phone: +256 XXX XXX XXX</li>
                <li className="font-light">Location: Kampala, Uganda</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-gray-500 text-sm font-light"
            style={{ borderColor: 'rgba(197, 165, 114, 0.2)' }}
          >
            <p>&copy; {new Date().getFullYear()} Vathy Frontier Holdings (U) LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
