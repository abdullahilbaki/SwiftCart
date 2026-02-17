import { ItemCard } from "./itemCard.js";
import { initModalListener } from "./modalController.js";
import { blackTitle, layout } from "./theme.js";

const trendingSection = document.getElementById("trending-now");

const loadTrendingProducts = async () => {
  if (!trendingSection) return;

  trendingSection.className = `${layout} py-16`;
  trendingSection.innerHTML = `
    <h1 class="${blackTitle} text-center mb-10">Trending Now</h1>
    <div id="trending-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="col-span-full flex justify-center py-20">
            <span class="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
    </div>
  `;

  const gridContainer = document.getElementById("trending-grid");

  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const products = await res.json();

    gridContainer.innerHTML = products
      .map((product) => ItemCard(product))
      .join("");

    initModalListener("trending-now");
  } catch (err) {
    console.error("Error loading trending products:", err);
    gridContainer.innerHTML = `<p class="col-span-full text-center text-error">Failed to load trending items.</p>`;
  }
};

loadTrendingProducts();
