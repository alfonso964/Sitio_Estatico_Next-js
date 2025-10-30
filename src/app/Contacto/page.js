import Hero from '../../components/Hero';
import FormularioContacto from '../../components/FormularioContacto';

export default function Contacto() {
  return (
    <div>
      <Hero 
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad"
        imageUrl="/contact-hero.jpg"
        showButton={false}
      />
      
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <FormularioContacto />
            </div>
            
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold">Dirección</h3>
                      <p>C/Bravo Murillo,30<br />Madrid, España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold">Teléfono</h3>
                      <p>+34 905-689-410</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">✉️</div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@mitienda.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🕒</div>
                    <div>
                      <h3 className="font-semibold">Horario de Atención</h3>
                      <p>Lunes a Viernes: 9:00 - 18:00<br />
                         Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}