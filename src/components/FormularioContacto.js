
export default function FormularioContacto() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">📩 Envíanos un mensaje</h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nombre completo</span>
            </label>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="input input-bordered" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="input input-bordered" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Asunto</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>Selecciona un asunto</option>
              <option>Consulta sobre productos</option>
              <option>Problema con mi pedido</option>
              <option>Devolución o cambio</option>
              <option>Sugerencia o mejora</option>
              <option>Otro</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mensaje</span>
            </label>
            <textarea 
              className="textarea textarea-bordered h-32" 
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              📤 Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}