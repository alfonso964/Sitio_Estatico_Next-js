
export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">📞 Información de contacto</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-base-content/70">info@futbolstore.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-bold">Teléfono</h3>
                <p className="text-base-content/70">+34 912 345 678</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold">Dirección</h3>
                <p className="text-base-content/70">
                  Calle Bravo Murillo,30<br />
                  28000 Madrid, España
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
              <span className="text-2xl">🕒</span>
              <div>
                <h3 className="font-bold">Horario de atención</h3>
                <p className="text-base-content/70">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-lg mb-3">🚗 ¿Cómo llegar?</h3>
          <div className="bg-base-200 rounded-lg p-4 text-center">
            <p className="text-base-content/70 mb-2">📍 Nuestra tienda física</p>
            <p className="text-sm text-base-content/60">
              Metro: Línea 5 - Puerta del Sol<br />
              Autobús: 3, 5, 15, 20, 51
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}