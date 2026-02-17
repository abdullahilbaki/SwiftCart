import { loadProducts } from "./loadProducts.js";
import { layout } from "./theme.js";
import { initModalListener } from "./modalController.js";

const ShowProducts = async () => {
  let categories = [];
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
    );
    categories = await response.json();
  } catch (err) {
    console.error("Failed to fetch categories", err);
  }

  const categoryButtons = ["all", ...categories]
    .map((cat) => {
      const isActive = cat === "all";
      return `
      <button 
        data-category="${cat}"
        class="category-btn btn ${isActive ? "btn-primary border-none shadow-md px-8" : "btn-outline border-slate-200 text-slate-600 px-6"} 
        rounded-full capitalize text-base transition-all duration-200">
        ${cat}
      </button>
    `;
    })
    .join("");

  return `
    <div class="${layout}">
        <div id="category-container" class="flex justify-center flex-wrap gap-3 p-6 bg-white">
            ${categoryButtons}
        </div>
        <div id="all-products-grid" class="pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 min-h-[400px]">
            </div>
    </div>  
  `;
};

const productsElement = document.getElementById("products");

if (productsElement) {
  ShowProducts().then((html) => {
    productsElement.innerHTML = html;

    const gridId = "all-products-grid";

    loadProducts("https://fakestoreapi.com/products", gridId);

    initModalListener("products");

    const container = document.getElementById("category-container");
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;

      container.querySelectorAll(".category-btn").forEach((b) => {
        b.classList.remove("btn-primary", "border-none", "shadow-md");
        b.classList.add("btn-outline", "border-slate-200", "text-slate-600");
      });
      btn.classList.add("btn-primary", "border-none", "shadow-md");
      btn.classList.remove("btn-outline", "border-slate-200", "text-slate-600");

      const category = btn.dataset.category;
      const url =
        category === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`;

      document.getElementById(gridId).innerHTML = `
        <div class="col-span-full flex justify-center py-20">
            <span class="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>`;

      loadProducts(url, gridId);
    });
  });
}
