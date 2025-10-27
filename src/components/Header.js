// components/Header.js
import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { FaHome, FaShoppingCart, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaChevronDown } from 'react-icons/fa';

function Header() {
    return (
        <>
            
            {/* Header principal - menos padding y dropdown corregido */}
            <div className="navbar bg-base-100 shadow-lg px-4">
                {/* Parte IZQUIERDA: Inicio + ThemeSelector - pegados al borde */}
                <div className="flex-1 flex items-center gap-2">
                    <Link href="/" className="btn btn-ghost text-lg px-2">
                        <FaHome className="w-4 h-4" />
                        Inicio
                    </Link>
                    <ThemeSelect />
                </div>

                {/* Parte DERECHA: Menú de navegación EN LÍNEA - pegados al borde */}
                <div className="flex-none flex items-center gap-4">
                    <Link href="/Productos" className="hover:text-primary font-medium px-2">
                        Productos
                    </Link>
                    
                    <Link href="/Carrito" className="hover:text-primary font-medium flex items-center gap-1 px-2">
                        <FaShoppingCart className="w-4 h-4" />
                        Carrito
                    </Link>

                    {/* Dropdown Información CORREGIDO */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="hover:text-primary font-medium flex items-center gap-1 px-2">
                            Información
                            <FaChevronDown className="w-3 h-3" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow-lg border">
                            <li><Link href="/SobreNosotros">Sobre nosotros</Link></li>
                            <li><Link href="/Contacto">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;