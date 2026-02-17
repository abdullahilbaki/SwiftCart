import { layout } from "./theme.js";

const Banner = () => {
  const title = "Best Collection For You";
  const subtitle =
    "Discover the latest trends in fashion, electronics, and more. " +
    "Shop with confidence and style at SwiftCart.";
  const btnText = "Shop Now";

  return `
    <section class="hero min-h-[500px] md:h-[600px] relative overflow-hidden flex items-center" 
      style="background-image: url('assets/banner-image.png'); background-position: center; background-size: cover;">
      
      <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      
      <div class="${layout} relative z-10">
        <div class="max-w-2xl text-white">
          <h1 class="mb-2 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            ${title}
          </h1>
          <p class="mb-5 text-base md:text-xl text-gray-200 leading-relaxed">
            ${subtitle}
          </p>
          <button class="btn btn-primary px-8 hover:scale-105 transition-transform duration-300">
            ${btnText}
          </button>
        </div>
      </div>
    </section>
  `;
};

const bannerElement = document.getElementById("banner");
if (bannerElement) {
  bannerElement.innerHTML = Banner();
}
