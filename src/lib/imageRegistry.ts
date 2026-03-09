import { preloadImages } from './utils';

// Global image registry - all images used across the app
export const APP_IMAGES = {
  // Homepage images
  smartEnergy: "/smartEnergy.webp",
  solarPowerStation: "/solarPowerStation.webp",
  finalLogo: "/final-logo-png-4x-1.png",
  footerLogo: "/logo_with_font.png",
  image7: "/image7.webp",
  image8: "/image8.webp",
  image5: "/image5.webp",
  image6: "/image6.webp",
  image4: "/image4.webp",
  phone1401: "/phonecover.webp",
  sun21: "/sun.png",
  smartHouse1: "/smarthouse.png",
  technicianSolarPanels: "/technicianSolarPanels.webp",
  digitalTablet: "/digitaltablet.webp",
  iconSavings: "/IconSavings.svg",
  iconEnergy: "/iconEnergy.svg",
  iconEco: "/iconEco.svg",
  iconAuto: "/iconAuto.svg",
  iconEmail: "/iconEmail.svg",
  iconPhone: "/iconPhone.svg",
  iconLocation: "/iconLocation.svg",
  iconSmartHome: "/iconSmartHome.svg",

  // About page assets
  aboutHero: "/aboutHero.webp",
  aboutLogo: "/logo_with_font.png",
  aboutIdea: "/aboutIdea.png",
  aboutWalk: "/aboutWalk.png",
  aboutForSale: "/aboutForSale.png",
  aboutSmartHome: "/aboutSmartHome.png",
  aboutAvatar: "/96272e93cd756ab385e25714009039f290d0b16d.png",
  aboutSocialX: "/Icon-3.svg",
  aboutSocialIn: "/Icon-4.svg",

  // App feature icons
  appIcon1: "/appIcon01.svg",
  appIcon2: "/appIcon02.svg",
  appIcon3: "/appIcon03.svg",
  appIcon4: "/appIcon04.svg",

  // Team member photos
  teamSrinath: "/team-srinath.webp",
  teamHariprasad: "/team-hariprasad.webp",
  teamParvathi: "/team-parvathi.webp",
  teamSelvaNancy: "/team-selva-nancy.webp",
  teamRajeev: "/team-rajeev.webp",

  // Solutions images
  solutionsVideo: "/VID-20251219-WA0000.mp4",
  solutionsSolarHouse: "/solutionsSolarHouse.webp",
  solutionsSmartHomeScene: "/solutionsSmartHomeScene.webp",
  solutionsAppPhoneHero: "/image12.webp",
  solutionsAppPhoneInsights: "/image4.webp",
  solutionsAppPhoneMonitor: "/image7.webp",
  solutionsAppPhoneModes: "/image10.webp",
} as const;

const isImageAsset = (url: string) => /\.(png|jpe?g|svg|webp)$/i.test(url);

let hasPreloaded = false;

// Preload critical images on app start, then lazily warm the rest.
export const preloadAllImages = () => {
  if (hasPreloaded || typeof window === "undefined") return;
  hasPreloaded = true;

  // Only preload small assets needed just after the hero — hero slide 1 is
  // preloaded via <link rel="preload"> in index.html so it is excluded here.
  const criticalImages = [
    APP_IMAGES.finalLogo,
    APP_IMAGES.solarPowerStation, // slide 2 (402 KB WebP → 62 KB at 1280w in index.html preload)
  ].filter(isImageAsset) as readonly string[];

  const allImages = Array.from(
    new Set(Object.values(APP_IMAGES).filter(isImageAsset))
  );
  const remainingImages = allImages.filter((img) => !criticalImages.includes(img));

  preloadImages(Array.from(criticalImages)).then(() => {
    window.setTimeout(() => {
      preloadImages(remainingImages);
    }, 1200);
  });
};
