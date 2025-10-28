import ProductCart from "./ProductCart";

const products = [
    { 
        id: 1, 
        name: 'Camiseta Deportiva', 
        price: 25,
        image: '/camiseta.jpg'
    },
    { 
        id: 2, 
        name: 'Pantalones Deportivos', 
        price: 50,
        image: '/pantalones_deportivos.jpg'
    },
    { 
        id: 3, 
        name: 'Botas Futbol Nike Phantom', 
        price: 60,
        image: '/bota_nike.png'
    },
    { 
        id: 4, 
        name: 'Balón de Fútbol', 
        price: 50,
        image: '/balon.jpg'
    },
    { 
        id: 5, 
        name: 'Guantes Portero', 
        price: 35,
        image: '/guantes.jpg'
    },
    { 
        id: 6, 
        name: 'Espinilleras', 
        price: 15,
        image: '/espinilleras.jpg'
    },
];

export default function ProductList() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product.id} className="h-full">
                        <ProductCart product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}