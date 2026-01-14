import { preloadImages } from './utils';

// Global image registry - all images used across the app
export const APP_IMAGES = {
  // Homepage images
  solarPowerStation: "https://www.figma.com/api/mcp/asset/a9e47ebf-4692-4333-baf9-daf806ae8a3b",
  finalLogo: "https://www.figma.com/api/mcp/asset/7cea5e76-8198-4f6a-8c2d-b66b7517f1ec",
  image7: "https://www.figma.com/api/mcp/asset/89e0d562-6cc4-4f75-9eb3-8c9e3829489b",
  image8: "https://www.figma.com/api/mcp/asset/be0ecbd5-00a8-47f2-9419-ac4b257a4041",
  image5: "https://www.figma.com/api/mcp/asset/5d860aaa-7442-4786-b641-912d72946341",
  image6: "https://www.figma.com/api/mcp/asset/65fdf17b-4603-4a9d-b6c7-8593bfd2aade",
  image4: "https://www.figma.com/api/mcp/asset/00896eb0-9ded-4224-a6f1-bab6507a5242",
  phone1401: "https://www.figma.com/api/mcp/asset/bd77c174-f30e-4dcb-aab3-905030c9f7d0",
  sun21: "https://www.figma.com/api/mcp/asset/f761f512-59ce-4859-9db8-dabac1fbf6a6",
  smartHouse1: "https://www.figma.com/api/mcp/asset/fc29c2cc-a17e-4105-b7c3-0cce93b6c978",
  solarCard: "https://www.figma.com/api/mcp/asset/672c3adb-1b61-4d4a-a244-976c56bc6b35",
  technicianSolarPanels: "https://www.figma.com/api/mcp/asset/630cbf1a-7da9-4382-8df2-df22cb05e08a",
  digitalTablet: "https://www.figma.com/api/mcp/asset/2ed6dcd4-404b-46ed-bf8b-86d9ea8544b5",
  digitalTabletHero: "https://www.figma.com/api/mcp/asset/2ed6dcd4-404b-46ed-bf8b-86d9ea8544b5",
  iconSavings: "https://www.figma.com/api/mcp/asset/9148982c-9717-42db-a5dc-58065318ca9f",
  iconEnergy: "https://www.figma.com/api/mcp/asset/ee7f6e5b-117a-4084-89a7-608aebb66b73",
  iconEco: "https://www.figma.com/api/mcp/asset/474dab3b-b349-4032-86d1-4690716c3c92",
  iconAuto: "https://www.figma.com/api/mcp/asset/ab5dc17e-2ee9-450a-97a2-02d37a50dbe6",
  iconEmail: "https://www.figma.com/api/mcp/asset/a55d7c00-790d-4cb2-864a-4eaa9b0e8baa",
  iconPhone: "https://www.figma.com/api/mcp/asset/85d4eb03-e4e5-44ab-98dc-c3b345b0746a",
  iconLocation: "https://www.figma.com/api/mcp/asset/78add6cf-ca77-4586-8c6c-9f943b5c5b27",
  iconAnalytics: "https://www.figma.com/api/mcp/asset/66d9289b-5fbe-4032-859c-2d38a2fc76e8",
  iconDevice: "https://www.figma.com/api/mcp/asset/76857da0-a383-488f-bc08-6c8e241522cb",
  iconHealth: "https://www.figma.com/api/mcp/asset/76db6576-85ec-492a-a283-1e11b145aae3",
  iconBill: "https://www.figma.com/api/mcp/asset/ee2da032-78f3-42ec-8d2e-fb41a543abb9",
  iconSmartHome: "https://www.figma.com/api/mcp/asset/3ff658f2-dd98-43db-96e0-7287e4f56c39",
  iconTwitter: "https://www.figma.com/api/mcp/asset/8da9f6bb-6f79-4084-b866-b7c17c13aab7",

  // About page assets
  aboutHero: "https://www.figma.com/api/mcp/asset/b812438f-3e11-4c82-ad41-9d798f8d0deb",
  aboutLogo: "https://www.figma.com/api/mcp/asset/b7ab34fc-9121-4c3b-afb3-a2e3e7048b8e",
  aboutIdea: "https://www.figma.com/api/mcp/asset/48c8799f-aaf3-47ec-b3f9-483163433087",
  aboutWalk: "https://www.figma.com/api/mcp/asset/6c133d60-5e7f-4e99-95cc-08b3dda62a7c",
  aboutForSale: "https://www.figma.com/api/mcp/asset/4d2dacf8-50ce-4846-8d81-ae0cfc8e8317",
  aboutSmartHome: "https://www.figma.com/api/mcp/asset/cc0aff17-784e-474e-994d-564778315db3",
  aboutVector: "https://www.figma.com/api/mcp/asset/1689195b-7250-47a4-bb8c-0c446316cbd8",
  aboutAvatar: "https://www.figma.com/api/mcp/asset/8f883786-b5fa-464d-99fb-1eef0ba071d2",
  aboutSocialX: "https://www.figma.com/api/mcp/asset/8397200c-22d6-4cbb-aaf4-268e0c164388",
  aboutSocialIn: "https://www.figma.com/api/mcp/asset/b5cd641e-42f8-43aa-8121-c6012c9125f6",

  // Team member photos
  teamSrinath: "/team-srinath.jpeg",
  teamHariprasad: "/team-hariprasad.jpeg",
  teamParvathi: "/team-parvathi.jpeg",
  teamSelvaNancy: "/team-selva-nancy.jpeg",
  teamRajeev: "/team-rajeev.jpeg",

  // Solutions images
  solarHero: "https://www.figma.com/api/mcp/asset/0dbcfaa9-fc6c-409f-896b-36bda57c47e9",
  smartHomeHero: "https://www.figma.com/api/mcp/asset/2ed6dcd4-404b-46ed-bf8b-86d9ea8544b5",
  solutionsVideo: "/VID-20251219-WA0000.mp4",
  solutionsSolarHouse: "https://www.figma.com/api/mcp/asset/934e8579-2a9c-4ad8-aa2a-a74138513bbd",
  solutionsSmartHomeScene: "https://www.figma.com/api/mcp/asset/e26ab183-6c14-44c6-af8e-43c6452c11cb",
  solutionsAppPhoneHero: "https://www.figma.com/api/mcp/asset/9cefad9b-b8e2-4957-80ce-c25139de5af7",
  solutionsAppPhoneInsights: "https://www.figma.com/api/mcp/asset/6d785e01-7482-42e3-a394-f76532180c77",
  solutionsAppPhoneMonitor: "https://www.figma.com/api/mcp/asset/76d1138d-cc46-49bb-97f0-34696c920b43",
  solutionsAppPhoneSchedule: "https://www.figma.com/api/mcp/asset/681325b7-86be-4c43-b655-962c17f60a5f",
  solutionsAppPhoneModes: "https://www.figma.com/api/mcp/asset/0a8ee5df-cc14-418b-ae1b-12cbe3c8be84",
} as const;

// Preload all critical images on app start
export const preloadAllImages = () => {
  const criticalImages = [
    APP_IMAGES.finalLogo,
    APP_IMAGES.solarHero,
    APP_IMAGES.smartHomeHero,
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