import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsiteHomepage } from "./screens/WebsiteHomepage";
import { Solutions } from "./screens/Solutions";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { FAQ } from "./screens/FAQ";
import { ScrollToTop } from "./components/ScrollToTop";
import { preloadAllImages } from "./lib/imageRegistry";

// Start preloading images immediately
preloadAllImages();

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WebsiteHomepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
