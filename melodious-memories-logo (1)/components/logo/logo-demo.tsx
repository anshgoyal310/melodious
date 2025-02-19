import { Logo } from "./logo"
import { LogoVariations } from "./logo-variations"

export function LogoDemo() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Full Logo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <Logo size={200} />
            <p className="text-center mt-2">Default (200px)</p>
          </div>
          <div className="p-4 bg-gray-900">
            <Logo size={150} className="text-white" />
            <p className="text-center mt-2 text-white">On Dark Background (150px)</p>
          </div>
          <div className="p-4">
            <Logo size={100} />
            <p className="text-center mt-2">Small (100px)</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Simplified Logo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <Logo variation={LogoVariations.SIMPLIFIED} size={200} />
            <p className="text-center mt-2">Default (200px)</p>
          </div>
          <div className="p-4 bg-gray-900">
            <Logo variation={LogoVariations.SIMPLIFIED} size={150} className="text-white" />
            <p className="text-center mt-2 text-white">On Dark Background (150px)</p>
          </div>
          <div className="p-4">
            <Logo variation={LogoVariations.SIMPLIFIED} size={100} />
            <p className="text-center mt-2">Small (100px)</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Monochrome Logo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <Logo variation={LogoVariations.MONOCHROME} size={200} className="text-gray-900" />
            <p className="text-center mt-2">Default (200px)</p>
          </div>
          <div className="p-4 bg-gray-900">
            <Logo variation={LogoVariations.MONOCHROME} size={150} className="text-white" />
            <p className="text-center mt-2 text-white">On Dark Background (150px)</p>
          </div>
          <div className="p-4">
            <Logo variation={LogoVariations.MONOCHROME} size={100} className="text-pink-600" />
            <p className="text-center mt-2">Brand Color (100px)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

