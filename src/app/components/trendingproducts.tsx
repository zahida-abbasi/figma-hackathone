export default function Trendingproducts() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Trending Products Heading */}
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">Trending Products</h1>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair1.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair2.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair3.png" },
            { title: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/chair4.png" },
          ].map((product, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <img src={product.image} alt={product.title} className="rounded mb-4" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">
                <span className="text-black font-bold">{product.price}</span>{" "}
                <span className="line-through">{product.originalPrice}</span>
              </p>
            </div>
          ))}
        </div>
  
        {/* Promo and Side Products Section */}
       <div className="flex flex-wrap gap-6 mb-8">

        {/* Promo Section Left and Right Divs */}
        <div className="flex-1 max-w-[650px] max-h-[300px] bg-pink-50 p-4 border rounded-lg">
        {[ 
            { discount: "23% off in all products", linkText: "Shop Now", image: "/clock.png" }
        ].map((promo, index) => (
            <div key={index} className="flex flex-col items-center justify-between">
            <div>
                <p className="text-xl font-bold">{promo.discount}</p>
                <a href="#" className="text-blue-500 underline">{promo.linkText}</a>
            </div>
            <img src={promo.image} alt="Promo" className="w-32 h-32 object-cover rounded" />
            </div>
        ))}
        </div>

        <div className="flex-1 max-w-[600px] max-h-[300px] bg-gray-50 p-4 border rounded-lg ">
        {[ 
            { discount: "23% off in all products", linkText: "View Collection", image: "/furniture.png" }
        ].map((promo, index) => (
            <div key={index} className="flex  flex-col items-center justify-between">
            <div>
                <p className="text-xl font-bold">{promo.discount}</p>
                <a href="#" className="text-blue-500 underline">{promo.linkText}</a>
            </div>
            <img src={promo.image} alt="Promo" className="w-50 h-32  object-cover rounded" />
            </div>
        ))}
        </div>

    {/* Side Products Section */}
    <div className="flex-1 grid grid-cols-1 gap-2">
    {[
        { title: "Executive Seat chair", price: "$32.00", image: "/seat-chair1.png" },
        { title: "Executive Seat chair", price: "$32.00", image: "/seat-chair2.png" },
        { title: "Executive Seat chair", price: "$32.00", image: "/seat-chair3.png" },
    ].map((product, index) => (
        <div
        key={index}
        className="inline-flex items-center max-w-fit space-x-4 border rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
        >
        {/* Image */}
        <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-cover rounded bg-gray-100"
        />
        
        {/* Text and Price */}
        <div>
            <p className="text-lg font-semibold text-blue-900">{product.title}</p>
            <p className="text-xl font-bold">{product.price}</p>
        </div>
        </div>
    ))}
    </div>

    </div>

    </div>
    );
  }
  
