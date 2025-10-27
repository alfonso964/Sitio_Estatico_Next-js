// app/page.js
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import RadialProgress from "@/components/RadialProgress";

export default function Home() {
  return (
    <section className="space-y-6">
      {/* Sección de presentación - Texto a la izquierda, imagen a la derecha */}
      <div className="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary px-4">
        <div className="hero-content flex-col lg:flex-row text-center lg:text-left w-full max-w-6xl">
          {/* Texto de presentación - Ahora a la izquierda */}
          <div className="flex-1 max-w-2xl text-primary-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">⚽ FUTBOL STORE</h1>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              Tu destino definitivo para todo lo relacionado con el fútbol. Desde las últimas equipaciones 
              de tus equipos favoritos hasta el calzado más avanzado, tenemos todo lo que necesitas 
              para vivir tu pasión por el deporte rey.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Equipaciones oficiales de LaLiga, Premier League y más</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Botas de fútbol de las mejores marcas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Accesorios y material deportivo de calidad</span>
              </div>
            </div>
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <Link href="/Productos" className="btn btn-accent btn-md md:btn-lg">
                Ver Productos
              </Link>
              <Link href="/SobreNosotros" className="btn btn-outline btn-md md:btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
                Conócenos
              </Link>
            </div>
          </div>
          {/* Imagen decorativa - Ahora a la derecha */}
          <div className="flex-1 max-w-md">
            <img 
              src="/tienda-futbol.jpg" 
              alt="Fútbol Store" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="px-4">
        <AutoCarousel />
      </div>

      {/* Sección de Categorías */}
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Categoría 1 */}
            <Link href="/Productos?categoria=equipaciones" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img src="/equipaciones.jpg" alt="Equipaciones" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Equipaciones</h3>
                <p>Las últimas equipaciones de tus equipos favoritos</p>
              </div>
            </Link>
            {/* Categoría 2 */}
            <Link href="/Productos?categoria=botas" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img src="/botas.jpg" alt="Botas" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Botas</h3>
                <p>Encuentra las botas perfectas para el campo</p>
              </div>
            </Link>
            {/* Categoría 3 */}
            <Link href="/Productos?categoria=accesorios" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img src="/accesorios.jpg" alt="Accesorios" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Accesorios</h3>
                <p>Todo lo que necesitas para complementar tu equipamiento</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de Productos Destacados */}
      <div className="px-4 py-8 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Producto 1 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src="/producto1.jpg" alt="Producto 1" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Camiseta Real Madrid</h3>
                <p>Equipación local 2023/2024</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold">89,99€</span>
                  <button className="btn btn-primary">Añadir al carrito</button>
                </div>
              </div>
            </div>
            {/* Producto 2 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src="/producto2.jpg" alt="Producto 2" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Botas Nike Mercurial</h3>
                <p>Máxima velocidad y control</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold">129,99€</span>
                  <button className="btn btn-primary">Añadir al carrito</button>
                </div>
              </div>
            </div>
            {/* Producto 3 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src="/producto3.jpg" alt="Producto 3" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Balón Adidas</h3>
                <p>Balón oficial de la Champions League</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold">49,99€</span>
                  <button className="btn btn-primary">Añadir al carrito</button>
                </div>
              </div>
            </div>
            {/* Producto 4 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src="/producto4.jpg" alt="Producto 4" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Guantes Portero</h3>
                <p>Máxima adherencia y protección</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold">45,99€</span>
                  <button className="btn btn-primary">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/Productos" className="btn btn-primary btn-lg">Ver todos los productos</Link>
          </div>
        </div>
      </div>

      {/* Resto de contenido (CountDown, RadialProgress, etc.) */}
      <div className="px-4 space-y-6">
        <CountDown />
        <RadialProgress />
      </div>
    </section>
  );
}