// components/Hero.js
export default function Hero({ 
  title, 
  subtitle, 
  bgGradient = "from-green-500 to-blue-600",
  textColor = "text-white" 
}) {
  return (
    <div className={`hero min-h-[40vh] bg-gradient-to-br ${bgGradient}`}>
      <div className={`hero-content text-center ${textColor}`}>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}