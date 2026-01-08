import { Gauge } from 'lucide-react'

interface KineticScoreProps {
  analysis: {
    kineticScore: number
    velocity: number
    alignment: number
    observability: number
    strategyType: string
    isKinetic: boolean
    isStatic: boolean
  }
}

export function KineticScore({ analysis }: KineticScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-kinetic-green'
    if (score >= 60) return 'text-kinetic-yellow'
    return 'text-kinetic-red'
  }

  const getStrategyTypeColor = (type: string) => {
    switch (type) {
      case 'Kinetic':
        return 'text-kinetic-green bg-kinetic-green/10 border-kinetic-green/30'
      case 'Static':
        return 'text-kinetic-red bg-kinetic-red/10 border-kinetic-red/30'
      default:
        return 'text-gray-400 bg-gray-800/30 border-gray-600/30'
    }
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Needs Improvement'
    return 'Critical'
  }

  return (
    <div className="executive-card">
      <div className="flex items-center space-x-3 mb-6">
        <Gauge className="w-6 h-6 text-kinetic-blue" />
        <h2 className="text-2xl font-bold text-white">Kinetic Scale Score</h2>
      </div>
      
      <div className="text-center">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-executive-slate flex items-center justify-center">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(analysis.kineticScore)}`}>
                {analysis.kineticScore}
              </div>
              <div className="text-xs text-gray-400 mt-1">/ 100</div>
            </div>
          </div>
          
          <div className="absolute -top-2 -right-2">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              analysis.kineticScore >= 80 ? 'bg-kinetic-green/20 text-kinetic-green' :
              analysis.kineticScore >= 60 ? 'bg-kinetic-yellow/20 text-kinetic-yellow' :
              'bg-kinetic-red/20 text-kinetic-red'
            }`}>
              {getScoreLabel(analysis.kineticScore)}
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <div className="text-lg font-semibold kinetic-text">
            Strategy Execution Potential
          </div>
          <div className="text-gray-400">
            {analysis.isKinetic && 'Kinetic strategy with clear execution path and technical specificity'}
            {analysis.isStatic && 'Static strategy lacking actionable execution details'}
            {!analysis.isKinetic && !analysis.isStatic && 'Neutral strategy requiring more definition'}
          </div>
          
          <div className="mt-4">
            <div className={`inline-flex px-4 py-2 rounded-full border ${getStrategyTypeColor(analysis.strategyType)}`}>
              <span className="font-bold">{analysis.strategyType} Strategy</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-kinetic-green">{analysis.velocity}%</div>
            <div className="text-xs text-gray-400">Velocity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-kinetic-blue">{analysis.alignment}%</div>
            <div className="text-xs text-gray-400">Alignment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-kinetic-yellow">{analysis.observability}%</div>
            <div className="text-xs text-gray-400">Observability</div>
          </div>
        </div>
      </div>
    </div>
  )
}
