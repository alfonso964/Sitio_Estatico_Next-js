
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";


export default function Home() {
  return (
    <section className="space-y-8">
      <div className="hero min-h-[70vh] bg-gradient-to-br from-primary to-secondary">
        <div className="hero-content flex-col lg:flex-row text-center lg:text-left w-full max-w-7xl lg:justify-start">
          <div className="flex-1 max-w-2xl lg:mr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-content">
              ⚽ FUTBOL STORE
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-primary-content opacity-90">
              Tu destino definitivo para todo lo relacionado con el fútbol. Desde las últimas equipaciones 
              de tus equipos favoritos hasta el calzado más avanzado, tenemos todo lo que necesitas 
              para vivir tu pasión por el deporte rey.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-primary-content">
                <span className="text-2xl">✅</span>
                <span className="text-lg">Equipaciones oficiales de LaLiga, Premier League y más</span>
              </div>
              <div className="flex items-center gap-3 text-primary-content">
                <span className="text-2xl">✅</span>
                <span className="text-lg">Botas de fútbol de las mejores marcas</span>
              </div>
              <div className="flex items-center gap-3 text-primary-content">
                <span className="text-2xl">✅</span>
                <span className="text-lg">Accesorios y material deportivo de calidad</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Link href="/Productos" className="btn btn-accent btn-lg shadow-lg">
                🛒 Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </div>

  
      <div className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <span className="text-4xl mb-4">🚚</span>
                <h3 className="card-title">Envío Rápido</h3>
                <p>Recibe tu pedido en 24-48 horas</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <span className="text-4xl mb-4">🛡️</span>
                <h3 className="card-title">Calidad Garantizada</h3>
                <p>Productos 100% originales</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <span className="text-4xl mb-4">📞</span>
                <h3 className="card-title">Soporte 24 horas</h3>
                <p>Estamos aquí para ayudarte</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <span className="text-4xl mb-4">🏆</span>
                <h3 className="card-title">Mejor Precio</h3>
                <p>Garantía de mejor precio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4">
        <AutoCarousel />
      </div>


      <div className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link href="/Productos?categoria=equipaciones" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <img 
                  src="/imagen_equipacion.jpg" 
                  alt="Equipaciones de fútbol" 
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Equipaciones</h3>
                <p className="text-base-content/70">Las últimas equipaciones oficiales</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Explorar</button>
                </div>
              </div>
            </Link>
            
            
            <Link href="/Productos?categoria=botas" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <img 
                  src="/imagen_botas.png"  
                  alt="Botas de fútbol" 
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Botas</h3>
                <p className="text-base-content/70">El mejor calzado deportivo</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Explorar</button>
                </div>
              </div>
            </Link>
            
          
            <Link href="/Productos?categoria=accesorios" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <figure className="px-4 pt-4">
                <img 
                  src="/imagen_accesorios.jpg"  
                  alt="Accesorios de fútbol" 
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Accesorios</h3>
                <p className="text-base-content/70">Completa tu equipamiento</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Explorar</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}