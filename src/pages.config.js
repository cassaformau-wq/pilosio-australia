/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductMultidirectional from './pages/ProductMultidirectional';
import ProductFrameSocket from './pages/ProductFrameSocket';
import ProductFramePin from './pages/ProductFramePin';
import ProductAluminiumScaffolding from './pages/ProductAluminiumScaffolding';
import ProductTubeCoupler from './pages/ProductTubeCoupler';
import ProductMobileTowers from './pages/ProductMobileTowers';
import ProductFlydeck from './pages/ProductFlydeck';
import ProductIXITruss from './pages/ProductIXITruss';
import ProductSuspended from './pages/ProductSuspended';
import ProductEventStructures from './pages/ProductEventStructures';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Products": Products,
    "Contact": Contact,
    "ProductMultidirectional": ProductMultidirectional,
    "ProductFrameSocket": ProductFrameSocket,
    "ProductFramePin": ProductFramePin,
    "ProductAluminiumScaffolding": ProductAluminiumScaffolding,
    "ProductTubeCoupler": ProductTubeCoupler,
    "ProductMobileTowers": ProductMobileTowers,
    "ProductFlydeck": ProductFlydeck,
    "ProductIXITruss": ProductIXITruss,
    "ProductSuspended": ProductSuspended,
    "ProductEventStructures": ProductEventStructures,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};