const Banner = () => {
  const title = "Best Collection For You";
  const subtitle =
    "Discover the latest trends in fashion, electronics, and more. Shop with confidence and style at SwiftCart.";
  const btnText = "Shop Now";

  return `
    <div class="hero h-[600px] relative overflow-hidden" 
         style="background-image: url('assets/banner-image.png'); background-position: center; background-size: cover;">
      
      <div class="hero-overlay bg-black/70"></div>

      <div class="hero-content text-neutral-content justify-start w-full px-10">
        <div class="max-w-2xl text-left">
          <h1 class="mb-2 md:text-5xl text-4xl font-bold">${title}</h1>
          <p class="mb-5 text-lg opacity-90">${subtitle}</p>
          <button class="btn btn-primary">${btnText}</button>
        </div>
      </div>
    </div>
  `;
};

const bannerElement = document.getElementById("banner");
if (bannerElement) {
  bannerElement.innerHTML = Banner();
}
