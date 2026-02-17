import { blackTitle, layout } from "./theme.js";
import { loadProducts } from "./loadProducts.js";

const Trending = () => {
  return `
    <div class="${layout} py-16">
      <h1 class="${blackTitle} pb-12">Trending Now</h1>
      <div id="trending-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <p class="text-gray-400">Loading amazing deals...</p>
      </div>
    </div>
  `;
};

const trendElement = document.getElementById("trending-now");
if (trendElement) {
  trendElement.innerHTML = Trending();
  loadProducts("https://fakestoreapi.com/products?limit=3", "trending-grid");
}
