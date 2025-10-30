import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content mt-12">
      <div className="container mx-auto px-4 py-8">
       
        <div className="flex flex-col md:flex-row justify-between items-start gap-100 mb-6">
      

          <nav className="flex-1">
            <h6 className="footer-title text-lg opacity-100 mb-4">Navegación</h6>
            <div className="flex flex-col gap-2">
              <Link href="/" className="link link-hover text-base hover:text-primary transition-colors">Inicio</Link>
              <Link href="/Productos" className="link link-hover text-base hover:text-primary transition-colors">Productos</Link>
              <Link href="/Carrito" className="link link-hover text-base hover:text-primary transition-colors">Carrito</Link>
              <Link href="/SobreNosotros" className="link link-hover text-base hover:text-primary transition-colors">Sobre Nosotros</Link>
              <Link href="/Contacto" className="link link-hover text-base hover:text-primary transition-colors">Contacto</Link>
            </div>
          </nav>

          {/* Columna central: Categorías */}
          <nav className="flex-1">
            <h6 className="footer-title text-lg opacity-100 mb-4">Categorías</h6>
            <div className="flex flex-col gap-2">
              <Link href="/Productos?categoria=equipaciones" className="link link-hover text-base hover:text-primary transition-colors">Equipaciones</Link>
              <Link href="/Productos?categoria=botas" className="link link-hover text-base hover:text-primary transition-colors">Botas</Link>
              <Link href="/Productos?categoria=accesorios" className="link link-hover text-base hover:text-primary transition-colors">Accesorios</Link>
            </div>
          </nav>

         
          <div className="flex-4 min-w-0"> 
            <h6 className="footer-title text-lg opacity-100 mb-4">Nuestra Tienda</h6>
            <div className="bg-base-300 p-2 rounded-lg">
              <img 
                src="/mapa.png" 
                alt="Nuestra tienda de fútbol" 
                className="w-full h-50 md:h-50 object-cover rounded-lg shadow-lg"
              />
              
            </div>
          </div>
        </div>

        
        <div className="border-t border-base-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <aside>
              <p className="text-base">© 2025 <strong>Fútbol Store</strong> - Todos los derechos reservados</p>
            </aside>

            {/* Redes sociales */}
            <nav>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors transform hover:scale-110" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors transform hover:scale-110" aria-label="Facebook">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors transform hover:scale-110" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors transform hover:scale-110" aria-label="TikTok">
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}