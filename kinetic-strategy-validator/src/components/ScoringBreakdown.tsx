import { Calculator, TrendingUp, TrendingDown, X } from 'lucide-react'

interface ScoringBreakdownProps {
  breakdown: {
    baseScore: number
    staticFrictionPenalties: number
    velocityBonuses: number
    multipliers: Array<{type: string, multiplier: number, value: number}>
    finalScore: number
    detectedKeywords: {
      highVelocity: string[]
      staticFriction: string[]
      metrics: string[]
      timelines: string[]
      techStack: string[]
    }
  }
}

export function ScoringBreakdown({ breakdown }: ScoringBreakdownProps) {
  const totalMultiplier = breakdown.multipliers.reduce((acc, mult) => acc * mult.multiplier, 1.0)
  
  return (
    <div className="executive-card">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-6 h-6 text-kinetic-blue" />
        <h2 className="text-2xl font-bold text-white">Scoring Logic Breakdown</h2>
      </div>
      
      <div className="space-y-6">
        {/* Base Score */}
        <div className="flex items-center justify-between p-4 bg-executive-slate rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-kinetic-blue/20 rounded-full flex items-center justify-center">
              <Calculator className="w-4 h-4 text-kinetic-blue" />
            </div>
            <span className="text-white font-medium">Base Score</span>
          </div>
          <span className="text-2xl font-bold text-kinetic-blue">{breakdown.baseScore}</span>
        </div>

        {/* Static Friction Penalties */}
        {breakdown.staticFrictionPenalties !== 0 && (
          <div className="flex items-center justify-between p-4 bg-red-900/20 rounded-lg border border-red-800/30">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-kinetic-red/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-kinetic-red" />
              </div>
              <div>
                <span className="text-white font-medium">Static Friction Penalties</span>
                <div className="text-xs text-gray-400 mt-1">
                  {breakdown.detectedKeywords.staticFriction.length > 0 && 
                    `Words: ${breakdown.detectedKeywords.staticFriction.join(', ')}`
                  }
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-kinetic-red">{breakdown.staticFrictionPenalties}</span>
          </div>
        )}

        {/* Velocity Bonuses */}
        {breakdown.velocityBonuses !== 0 && (
          <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg border border-green-800/30">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-kinetic-green/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-kinetic-green" />
              </div>
              <div>
                <span className="text-white font-medium">Velocity Bonuses</span>
                <div className="text-xs text-gray-400 mt-1">
                  {breakdown.detectedKeywords.highVelocity.length > 0 && 
                    `Keywords: ${breakdown.detectedKeywords.highVelocity.join(', ')}`
                  }
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-kinetic-green">+{breakdown.velocityBonuses}</span>
          </div>
        )}

        {/* Multipliers */}
        {breakdown.multipliers.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">Execution Multipliers</h3>
            {breakdown.multipliers.map((mult, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-executive-slate rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-kinetic-yellow/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-kinetic-yellow">×{mult.multiplier}</span>
                  </div>
                  <span className="text-white">{mult.type}</span>
                </div>
                <span className="text-kinetic-yellow font-medium">{mult.multiplier}x</span>
              </div>
            ))}
            <div className="flex items-center justify-between p-3 bg-executive-gray rounded-lg border-l-4 border-kinetic-yellow">
              <span className="text-white font-medium">Total Multiplier</span>
              <span className="text-xl font-bold text-kinetic-yellow">{totalMultiplier.toFixed(2)}x</span>
            </div>
          </div>
        )}

        {/* Detected Keywords */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-3">Detected Keywords</h3>
          
          {breakdown.detectedKeywords.metrics.length > 0 && (
            <div className="p-3 bg-executive-slate rounded-lg">
              <div className="text-sm text-gray-400 mb-2">Metrics</div>
              <div className="flex flex-wrap gap-2">
                {breakdown.detectedKeywords.metrics.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-kinetic-green/20 text-kinetic-green text-xs rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {breakdown.detectedKeywords.timelines.length > 0 && (
            <div className="p-3 bg-executive-slate rounded-lg">
              <div className="text-sm text-gray-400 mb-2">Timelines</div>
              <div className="flex flex-wrap gap-2">
                {breakdown.detectedKeywords.timelines.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-kinetic-blue/20 text-kinetic-blue text-xs rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {breakdown.detectedKeywords.techStack.length > 0 && (
            <div className="p-3 bg-executive-slate rounded-lg">
              <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {breakdown.detectedKeywords.techStack.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-kinetic-yellow/20 text-kinetic-yellow text-xs rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Final Score Calculation */}
        <div className="p-4 bg-gradient-to-r from-kinetic-blue/20 to-kinetic-green/20 rounded-lg border border-kinetic-blue/30">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-2">Final Score Calculation</div>
            <div className="text-lg text-white mb-2">
              ({breakdown.baseScore} {breakdown.staticFrictionPenalties !== 0 && `${breakdown.staticFrictionPenalties}`} {breakdown.velocityBonuses !== 0 && `+ ${breakdown.velocityBonuses}`}) × {totalMultiplier.toFixed(2)}
            </div>
            <div className="text-3xl font-bold kinetic-text">
              {breakdown.finalScore}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
