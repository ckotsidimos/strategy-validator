import { AlertTriangle, Clock, Users, BarChart } from 'lucide-react'

interface Bottleneck {
  category: string
  severity: 'high' | 'medium' | 'low'
  description: string
  impact: string
}

interface BottleneckDetectorProps {
  bottlenecks: Bottleneck[]
}

export function BottleneckDetector({ bottlenecks }: BottleneckDetectorProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-kinetic-red bg-kinetic-red/10 border-kinetic-red/30'
      case 'medium':
        return 'text-kinetic-yellow bg-kinetic-yellow/10 border-kinetic-yellow/30'
      case 'low':
        return 'text-kinetic-green bg-kinetic-green/10 border-kinetic-green/30'
      default:
        return 'text-gray-400 bg-gray-800/30 border-gray-600/30'
    }
  }

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'resource allocation':
        return <Users className="w-5 h-5" />
      case 'stakeholder alignment':
        return <Users className="w-5 h-5" />
      case 'measurement framework':
        return <BarChart className="w-5 h-5" />
      default:
        return <AlertTriangle className="w-5 h-5" />
    }
  }

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'Critical Risk'
      case 'medium':
        return 'Moderate Risk'
      case 'low':
        return 'Minor Risk'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="executive-card">
      <div className="flex items-center space-x-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-kinetic-red" />
        <h2 className="text-2xl font-bold text-white">Bottleneck Detector</h2>
      </div>
      
      <div className="space-y-4">
        {bottlenecks.map((bottleneck, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${getSeverityColor(bottleneck.severity)} transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getIcon(bottleneck.category)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {bottleneck.category}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(bottleneck.severity)}`}>
                    {getSeverityLabel(bottleneck.severity)}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-2">
                  {bottleneck.description}
                </p>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span className="text-gray-400">
                    Impact: {bottleneck.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {bottlenecks.length === 0 && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-kinetic-green/10 rounded-full mb-4">
              <BarChart className="w-8 h-8 text-kinetic-green" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No Critical Bottlenecks Detected
            </h3>
            <p className="text-gray-400">
              Your strategy appears to have clear execution pathways
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-6 p-4 bg-executive-slate rounded-lg">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">
          Execution Risk Summary
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-kinetic-red">
              {bottlenecks.filter(b => b.severity === 'high').length}
            </div>
            <div className="text-xs text-gray-400">Critical</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-kinetic-yellow">
              {bottlenecks.filter(b => b.severity === 'medium').length}
            </div>
            <div className="text-xs text-gray-400">Moderate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-kinetic-green">
              {bottlenecks.filter(b => b.severity === 'low').length}
            </div>
            <div className="text-xs text-gray-400">Minor</div>
          </div>
        </div>
      </div>
    </div>
  )
}
