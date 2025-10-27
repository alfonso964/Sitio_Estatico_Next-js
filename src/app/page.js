// app/page.js
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import RadialProgress from "@/components/RadialProgress";

export default function Home() {
  return (
    <section className="space-y-8">
      {/* Sección de presentación de la tienda */}
      <div className="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
          {/* Imagen decorativa */}
          <div className="max-w-md">
            <img 
              src="/tienda-futbol.jpg" 
              alt="Fútbol Store" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Texto de presentación */}
          <div className="max-w-2xl text-primary-content">
            <h1 className="text-5xl font-bold mb-6">⚽ FOOTBALL LEGENDS</h1>
            <p className="text-xl mb-6 leading-relaxed">
              Tu destino definitivo para todo lo relacionado con el fútbol. Desde las últimas equipaciones 
              de tus equipos favoritos hasta el calzado más avanzado, tenemos todo lo que necesitas 
              para vivir tu pasión por el deporte rey.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <span>Equipaciones oficiales de LaLiga, Premier League y más</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <span>Botas de fútbol de las mejores marcas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <span>Accesorios y material deportivo de calidad</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link href="/Productos" className="btn btn-accent btn-lg">
                Ver Productos
              </Link>
              <Link href="/SobreNosotros" className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
                Conócenos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="container mx-auto px-4">
        <AutoCarousel />
      </div>

      {/* Resto de tu contenido existente */}
      <div className="container mx-auto px-4 space-y-8">
        <div className="tooltip" data-tip="hello world">
          <p className="btn">Hover me</p>
        </div>

        <CountDown />
        <RadialProgress />

        {/* Tabs */}
        <div className="tabs tabs-box">
          <input type="radio" name="my_tabs" className="tab" aria-label="Tab 1" />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p>Tab content 1</p>
            <details className="dropdown">
              <summary className="btn m-1">open or close</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
          </div>

          <input type="radio" name="my_tabs" className="tab" aria-label="Tab 2" />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p>Tab content 2</p>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">Click</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>

          <input type="radio" name="my_tabs" className="tab" aria-label="Tab 3" defaultChecked />
        </div>

        <div className="p-10 bg-white"></div>
      </div>
    </section>
  );
}