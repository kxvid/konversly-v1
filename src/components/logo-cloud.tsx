const logos = [{ name: "Cursor" }, { name: "Vercel" }, { name: "Bolt" }, { name: "Lovable" }, { name: "Replit" }]

export default function LogoCloud() {
  return (
    <div className="mt-20">
      <p className="text-center text-sm text-gray-400 mb-8 tracking-widest">OPTIMIZED FOR</p>
      <div className="flex gap-x-12 gap-y-8 items-center justify-center flex-wrap">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors font-semibold text-lg"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  )
}
