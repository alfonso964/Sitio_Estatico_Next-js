// components/CartSummary.js
import Link from "next/link";

export default function CartSummary({ 
  subtotal, 
  shipping, 
  tax, 
  total,
  itemCount 
}) {
  return (
    <div className="card bg-base-100 shadow-lg sticky top-4">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">📋 Resumen del pedido</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Productos ({itemCount})</span>
            <span className="font-medium">€{subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Envío</span>
            <span className="font-medium">
              {shipping === 0 ? 'Gratis' : `€${shipping.toFixed(2)}`}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Impuestos (21%)</span>
            <span className="font-medium">€{tax.toFixed(2)}</span>
          </div>
          
          <div className="divider"></div>
          
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">€{total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="card-actions mt-6">
          <button className="btn btn-primary btn-lg w-full">
            🛒 Proceder al pago
          </button>
          
          <Link href="/Productos" className="btn btn-outline btn-lg w-full">
            🏠 Seguir comprando
          </Link>
        </div>
        
        {/* Garantías */}
        <div className="mt-6 space-y-2 text-sm text-base-content/70">
          <div className="flex items-center gap-2">
            <span className="text-success">🛡️</span>
            <span>Garantía de devolución en 30 días</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">🚚</span>
            <span>Envío gratis en pedidos superiores a €50</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">🔒</span>
            <span>Pago seguro SSL</span>
          </div>
        </div>
      </div>
    </div>
  );
}