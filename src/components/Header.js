// components/Header.js
import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { FaHome, FaShoppingCart, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaChevronDown } from 'react-icons/fa';

function Header() {
    return (
        <>
            {/* Header superior con redes sociales */}
            <div className="bg-primary text-primary-content py-2 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaFacebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaTwitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaTiktok className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto">
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost text-xl">
                            <FaHome className="w-5 h-5" />
                            Inicio
                        </Link>
                        <ThemeSelect />
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
                            {/* Productos */}
                            <li>
                                <Link href="/Productos" className="hover:text-primary">
                                    Productos
                                </Link>
                            </li>
                            
                            {/* Carrito con icono */}
                            <li>
                                <Link href="/Carrito" className="flex items-center gap-1 hover:text-primary">
                                    <FaShoppingCart className="w-4 h-4" />
                                    Carrito
                                </Link>
                            </li>

                          
                            <li>
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0} role="button" className="flex items-center gap-1 hover:text-primary">
                                        Información
                                        <FaChevronDown className="w-3 h-3" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 mt-4 w-52 p-2 shadow-lg border">
                                        <li>
                                            <Link href="/SobreNosotros">Sobre nosotros</Link>
                                        </li>
                                        <li>
                                            <Link href="/Contacto">Contacto</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;