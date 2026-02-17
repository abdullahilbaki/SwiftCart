export const ItemCard = (product) => {
  return `
    <div class="card w-full bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">  
      <figure class="relative">
        <div class="bg-slate-50 w-full h-80 flex items-center justify-center p-8 overflow-hidden">
          <img
              src="${product.image}"
              alt="${product.title}"
              loading="lazy"
              class="object-contain h-full w-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </figure>

      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-3">
          <span class="badge badge-md bg-indigo-50 text-indigo-600 rounded-lg border-none font-bold px-3 py-4 capitalize">
            ${product.category}
          </span>
          <div class="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
            <i class="fa-solid fa-star text-warning text-xs"></i>
            <span class="text-slate-700 font-bold text-xs">${product.rating.rate}</span>
          </div>
        </div>

        <h2 class="text-lg text-slate-800 font-bold line-clamp-2 mb-2 min-h-[3.5rem] leading-snug">
          ${product.title}
        </h2>
        
        <div class="flex items-baseline gap-1 mb-6">
          <span class="text-2xl font-black text-slate-900">$${product.price}</span>
          <span class="text-xs text-slate-400 font-medium">USD</span>
        </div>
        
        <div class="grid grid-cols-2 gap-3 mt-auto">
          <button 
            data-id="${product.id}"
            class="details-btn btn btn-outline border-slate-200 hover:bg-slate-800 hover:border-slate-800 rounded-xl text-slate-600 font-bold transition-colors">
            Details
          </button>
          <button class="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none rounded-xl font-bold shadow-lg shadow-indigo-100">
            <i class="fa-solid fa-cart-shopping"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
};