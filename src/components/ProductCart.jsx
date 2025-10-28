'use client';

export default function ProductCart({ product }) {
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const exists = cart.some((p) => p.id === product.id);

        if (exists) {
            alert(`${product.name} ya está en el carrito`);
            return;
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} añadido al carrito`);
    };

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            <figure className="px-6 pt-6 flex-1 min-h-[280px]"> {/* Más altura para la imagen */}
                <img 
                    src={product.image || "/placeholder-product.jpg"} 
                    alt={product.name}
                    className="rounded-xl w-full h-full object-cover"
                />
            </figure>
            <div className="card-body flex-none min-h-[180px]"> {/* Más altura para el contenido */}
                <h3 className="card-title text-xl mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{product.price} €</p>
                <div className="card-actions mt-auto">
                    <button 
                        onClick={addToCart} 
                        className="btn btn-primary w-full text-lg py-3"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}