import { layout, blackTitle, greySubtitle } from "./theme.js";

const FEATURES_DATA = [
  {
    title: "Fast Delivery",
    subtitle:
      "Get your orders delivered to your doorstep quickly and efficiently.",
    icon: "fa-truck",
  },
  {
    title: "24/7 Support",
    subtitle: "Our support team is available around the clock to assist you.",
    icon: "fa-headset",
  },
  {
    title: "Secure Payment",
    subtitle:
      "Experience safe and secure transactions with our encrypted payment systems.",
    icon: "fa-shield-alt",
  },
  {
    title: "Easy Returns",
    subtitle: "Not satisfied? Return your products easily within 30 days.",
    icon: "fa-sync-alt",
  },
];

const ShowFeatures = () => {
  const title = "Why Choose Us";
  const subtitle =
    "We provide the best shopping experience with top-notch services.";

  return `
    <div class="bg-gray-100 py-16">
      <div class="${layout}">
        <div class="text-center pb-16">
          <h1 class="${blackTitle} mb-2">${title}</h1>
          <p class="${greySubtitle}">${subtitle}</p>        
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          ${Cards()}
        </div>
      </div>
    </div>
`;
};

const Cards = () => {
  return FEATURES_DATA.map(
    (card) => `
        <div class="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1">
          <div class="absolute -top-6 left-8 bg-blue-50 p-4 rounded-xl border-2 border-white shadow-sm">
            <i class="fas ${card.icon} text-primary text-2xl" aria-hidden="true"></i>
          </div>
          
          <div class="mt-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">${card.title}</h3>
            <p class="${greySubtitle} leading-relaxed">${card.subtitle}</p>
          </div>
        </div>
      `,
  ).join("");
};

const showFeaturesElement = document.getElementById("show-features");
if (showFeaturesElement) {
  showFeaturesElement.innerHTML = ShowFeatures();
}
