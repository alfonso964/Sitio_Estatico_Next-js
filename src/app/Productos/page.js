import Hero from '../../components/Hero';
import ProductList from '../../components/ProductList';

export default function Productos() {
    return (
        <div>
            <Hero 
                title="Nuestros Productos"
                subtitle="Descubre la mejor equipación y material deportivo"
                imageUrl="/productos-hero.jpg"
                showButton={false}
            />
            <ProductList />
        </div>
    );
}