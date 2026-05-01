/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Books from './components/Books';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-premium-white text-accent">
      <Navbar />
      <main>
        <Hero />
        <Books />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
