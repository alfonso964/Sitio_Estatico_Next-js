// app/Contacto/page.js
import Hero from "@/components/Hero";
import FormularioContacto from "@/components/FormularioContacto";
import ContactInfo from "@/components/ContactInfo";


export default function Contacto() {
  return (
    <section className="space-y-12 py-8">
      {/* Hero Section usando el componente */}
      <Hero 
        title="Contacto"
        subtitle="Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!"
        bgGradient="from-green-500 to-blue-600"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Información de contacto */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Columna central - Formulario */}
          <div className="lg:col-span-2">
            <FormularioContacto />
          </div>
        </div>
      </div>
    </section>
  );
}