import { FileText, Zap } from 'lucide-react'

interface StrategyInputProps {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
  isAnalyzing: boolean
}

export function StrategyInput({ value, onChange, onAnalyze, isAnalyzing }: StrategyInputProps) {
  return (
    <div className="executive-card">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="w-6 h-6 text-kinetic-blue" />
        <h2 className="text-2xl font-bold text-white">Strategy Statement</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Enter your enterprise strategy statement
          </label>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Example: 'We will become the market leader in sustainable technology by leveraging AI-driven innovation and strategic partnerships to deliver 10x customer value by 2025...'"
            className="w-full h-32 px-4 py-3 bg-executive-slate border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kinetic-blue focus:border-transparent resize-none"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {value.length} characters
          </div>
          
          <button
            onClick={onAnalyze}
            disabled={!value.trim() || isAnalyzing}
            className={`kinetic-button flex items-center space-x-2 ${
              !value.trim() || isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Analyze Strategy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
