// app/SobreNosotros/page.js
import Link from "next/link";
import Alert from "@/components/Alert";

export default function SobreNosotros() {
  return (
    <section className="space-y-12 py-8">
      {/* Hero Section con nuevo color y botón de contactar */}
      <div className="hero min-h-[50vh] bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Más de 10 años apasionados por el fútbol y comprometidos con ofrecerte lo mejor
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/Productos" className="btn btn-primary btn-lg">
                Ver Productos
              </Link>
              <Link href="/Contacto" className="btn btn-accent btn-lg">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestra Historia */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-6 flex items-center gap-3">
                  <span className="text-3xl">📜</span>
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    <strong>Fútbol Store</strong> nació en 2018 de la pasión compartida por el deporte rey. 
                    Lo que comenzó como un pequeño local en el centro de la ciudad, hoy se ha convertido 
                    en la tienda de referencia para los amantes del fútbol.
                  </p>
                  <p>
                    Comenzamos vendiendo equipaciones locales y poco a poco fuimos expandiendo 
                    nuestro catálogo hasta incluir las mejores marcas internacionales y productos 
                    de la más alta calidad.
                  </p>
                  <p>
                    Hoy, seguimos manteniendo esa esencia familiar y el trato personalizado que 
                    nos caracteriza desde el primer día.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <span className="text-3xl">👥</span>
                </div>
                <div className="stat-title">Clientes Satisfechos</div>
                <div className="stat-value">15.000+</div>
                <div className="stat-desc">Desde 2018</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <span className="text-3xl">🏆</span>
                </div>
                <div className="stat-title">Marcas Premium</div>
                <div className="stat-value">25+</div>
                <div className="stat-desc">Las mejores del mercado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestra Misión, Visión y Valores */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Misión */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body text-center">
              <span className="text-4xl mb-4">🎯</span>
              <h3 className="card-title text-2xl justify-center">Misión</h3>
              <p className="text-base-content/80">
                Ofrecer productos de fútbol de la más alta calidad, brindando una experiencia 
                de compra excepcional y fomentando la pasión por este deporte en cada uno de 
                nuestros clientes.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body text-center">
              <span className="text-4xl mb-4">👁️</span>
              <h3 className="card-title text-2xl justify-center">Visión</h3>
              <p className="text-base-content/80">
                Ser la tienda de referencia en fútbol a nivel nacional, reconocida por nuestra 
                calidad, servicio al cliente y compromiso con la comunidad futbolística.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body text-center">
              <span className="text-4xl mb-4">🤝</span>
              <h3 className="card-title text-2xl justify-center">Valores</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-success text-xl">✓</span>
                  <span>Pasión por el fútbol</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success text-xl">✓</span>
                  <span>Calidad garantizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success text-xl">✓</span>
                  <span>Atención personalizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success text-xl">✓</span>
                  <span>Compromiso social</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compromiso Social Expandido */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Compromiso</h2>
        </div>
        
        <Alert type="success">
          <div className="space-y-4">
            <p>
              <strong>Compromiso con la comunidad:</strong> En Fútbol Store no solo vendemos productos, 
              sino que formamos parte de la comunidad futbolística. Apoyamos activamente a equipos locales 
              y promovemos el fútbol base en nuestra ciudad.
            </p>
            <p>
              <strong>Iniciativas sociales:</strong> Destinamos un porcentaje de nuestras ganancias a 
              escuelas de fútbol para niños en situación vulnerable, creemos en el poder del deporte 
              para transformar vidas.
            </p>
            <p>
              <strong>Sostenibilidad:</strong> Nos comprometemos a reducir nuestro impacto ambiental 
              utilizando materiales reciclados en nuestros empaques y apoyando iniciativas de reciclaje 
              de material deportivo.
            </p>
            <p>
              <strong>Compromiso con el cliente:</strong> Tu satisfacción es nuestra prioridad. Ofrecemos 
              garantía en todos nuestros productos y un servicio post-venta que te acompañará en todo momento.
            </p>
          </div>
        </Alert>
      </div>
    </section>
  );
}