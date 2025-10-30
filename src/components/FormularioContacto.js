// components/FormularioContacto.js
export default function ContactForm() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-8">📩 Envíanos un mensaje</h2>
        <form className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold mb-2">Nombre completo</span>
            </label>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="input input-bordered input-lg mt-2" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold mb-2">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="input input-bordered input-lg mt-2" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold mb-2">Asunto</span>
            </label>
            {/* FORMA CORRECTA: usar defaultValue en el select */}
            <select className="select select-bordered select-lg mt-2" defaultValue="">
              <option disabled value="">Selecciona un asunto</option>
              <option value="consulta">Consulta sobre productos</option>
              <option value="problema">Problema con mi pedido</option>
              <option value="devolucion">Devolución o cambio</option>
              <option value="sugerencia">Sugerencia o mejora</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold mb-2">Mensaje</span>
            </label>
            <textarea 
              className="textarea textarea-bordered h-32 mt-2 text-lg" 
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          
          <div className="form-control mt-8">
            <button type="submit" className="btn btn-primary btn-lg">
              📤 Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}