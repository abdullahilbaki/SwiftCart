export const ItemCard = (product) => {
  return `
    <div class="card bg-base-100 border border-base-300 rounded-xl overflow-hidden shadow-sm">  
      <figure>
        <div class="bg-base-300 rounded-t-lg w-full h-72 flex items-center justify-center">
        <img
            src="${product.image}"
            alt="${product.title}"
            loading="lazy"
            class="object-contain max-h-full w-full drop-shadow-md mix-blend-multiply"
        />
        </div>
      </figure>

      <div class="p-5 flex flex-col gap-1">
        <div class="flex justify-between items-center mb-2">
          <span class="badge badge-sm bg-indigo-100 text-indigo-600 rounded-xl border-none font-semibold px-3 py-3">
            ${product.category}
          </span>
          <div class="flex items-center gap-1 text-sm">
            <i class="fa-solid fa-star text-warning text-md"></i>
            <span class="text-gray-500 font-semibold">${product.rating.rate} (${product.rating.count})</span>
          </div>
        </div>

        <h2 class="text-lg text-gray-700 font-semibold text-base-content line-clamp-1 leading-tight">
          ${product.title}
        </h2>
        <p class="text-xl font-bold text-base-content mb-4">$${product.price}</p>
        
        <div class="grid grid-cols-2 gap-3 mt-auto">
          <button class="btn btn-outline border-base-300 shadow-sm rounded-xl text-gray-600 font-semibold no-animation hover:bg-base-200">
            <i class="fa-regular fa-eye text-sm"></i> Details
          </button>
          <button class="btn btn-primary rounded-xl border-none bg-indigo-600 hover:bg-indigo-700 font-medium no-animation">
            <i class="fa-solid fa-cart-shopping text-xs"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
};
