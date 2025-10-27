import { FaHome, FaShoppingCart, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaChevronDown } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>© 2025 Legends- Todos los derechos reservados</p>
        <div className="bg-primary text-primary-content py-1 px-4">
                <div className="flex justify-between items-center">
                    
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaInstagram className="w-3 h-3" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaFacebook className="w-3 h-3" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaTwitter className="w-3 h-3" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaTiktok className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
      </aside>
    </footer>
  );
}
