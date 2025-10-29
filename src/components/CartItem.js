// components/CartItem.js
'use client';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="card bg-base-100 shadow-lg mb-4">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Imagen del producto */}
          <div className="flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
            />
          </div>
          
          {/* Información del producto */}
          <div className="flex-1 min-w-0">
            <h3 className="card-title text-lg mb-2">{item.name}</h3>
            <p className="text-lg font-bold text-primary">€{item.price}</p>
          </div>
          
          {/* Controles de cantidad y acciones */}
          <div className="flex items-center gap-4">
            {/* Selector de cantidad */}
            <div className="flex items-center gap-2">
              <button 
                className="btn btn-sm btn-circle btn-outline"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              
              <button 
                className="btn btn-sm btn-circle btn-outline"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            
            {/* Precio total del item */}
            <div className="text-right min-w-20">
              <p className="text-xl font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
            </div>
            
            {/* Botón eliminar */}
            <button 
              className="btn btn-sm btn-error btn-circle"
              onClick={() => onRemove(item.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}