import { Zap, Target, Eye } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-executive-gray border-b border-executive-slate">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="kinetic-gradient p-3 rounded-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold kinetic-text">Kinetic Strategy Validator</h1>
              <p className="text-gray-400 mt-1">Bridge Boardroom Strategy to Engineering Execution</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-kinetic-blue" />
              <span className="text-gray-300">Velocity</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-kinetic-green" />
              <span className="text-gray-300">Observability</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
