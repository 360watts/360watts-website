import { preloadImages } from './utils';

// Global image registry - all images used across the app
export const APP_IMAGES = {
  // Homepage images
  solarPowerStation: "/solarPowerStation.jpg",
  finalLogo: "/final-logo-png-4x-1.png",
  footerLogo: "/logo_with_font.png",
  image7: "/image7.png",
  image8: "/image8.png",
  image5: "/image5.png",
  image6: "/image6.png",
  image4: "/image4.png",
  phone1401: "/phonecover.png",
  sun21: "/sun.png",
  smartHouse1: "/smarthouse.png",
  technicianSolarPanels: "/technicianSolarPanels.jpg",
  digitalTablet: "/digitaltablet.jpg",
  iconSavings: "/IconSavings.svg",
  iconEnergy: "/iconEnergy.svg",
  iconEco: "/iconEco.svg",
  iconAuto: "/iconAuto.svg",
  iconEmail: "/iconEmail.svg",
  iconPhone: "/iconPhone.svg",
  iconLocation: "/iconLocation.svg",
  iconSmartHome: "/iconSmartHome.svg",

  // About page assets
  aboutHero: "/aboutHero.jpg",
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
  teamSrinath: "/team-srinath.jpeg",
  teamHariprasad: "/team-hariprasad.jpeg",
  teamParvathi: "/team-parvathi.jpeg",
  teamSelvaNancy: "/team-selva-nancy.jpeg",
  teamRajeev: "/team-rajeev.jpeg",

  // Solutions images
  solutionsVideo: "/VID-20251219-WA0000.mp4",
  solutionsSolarHouse: "/solutionsSolarHouse.jpg",
  solutionsSmartHomeScene: "/solutionsSmartHomeScene.png",
  solutionsAppPhoneHero: "/image12.png",
  solutionsAppPhoneInsights: "/image4.png",
  solutionsAppPhoneMonitor: "/image7.png",
  solutionsAppPhoneModes: "/image10.png",
} as const;

// Preload all critical images on app start
export const preloadAllImages = () => {
  const criticalImages = [
    APP_IMAGES.finalLogo,
    APP_IMAGES.solutionsSolarHouse,
    APP_IMAGES.solutionsSmartHomeScene,
    APP_IMAGES.sun21,
    APP_IMAGES.smartHouse1,
  ];

  const allImages = Object.values(APP_IMAGES) as string[];

  // Preload critical images first
  preloadImages(criticalImages).then(() => {
    // Then preload the rest in background
    preloadImages(allImages.filter(img => !(criticalImages as string[]).includes(img)));
  });
};

// Initialize preloading when module loads
if (typeof window !== 'undefined') {
  preloadAllImages();
}