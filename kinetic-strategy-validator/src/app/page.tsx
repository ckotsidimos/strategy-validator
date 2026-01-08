'use client'

import { useState } from 'react'
import { StrategyInput } from '@/components/StrategyInput'
import { KineticScore } from '@/components/KineticScore'
import { BottleneckDetector } from '@/components/BottleneckDetector'
import { ScoringBreakdown } from '@/components/ScoringBreakdown'
import { Header } from '@/components/Header'
import { KINETIC_DOCTRINE } from '@/doctrine'

export default function Home() {
  const [strategy, setStrategy] = useState('')
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeStrategy = (strategyText: string) => {
    const text = strategyText.toLowerCase()
    const scoringBreakdown: {
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
    } = {
      baseScore: 50,
      staticFrictionPenalties: 0,
      velocityBonuses: 0,
      multipliers: [],
      finalScore: 0,
      detectedKeywords: {
        highVelocity: [],
        staticFriction: [],
        metrics: [],
        timelines: [],
        techStack: []
      }
    }
    
    let score = 50 // Base score
    
    // DETECT STATIC FRICTION WORDS
    KINETIC_DOCTRINE.static_friction_indicators.forEach((word: string) => {
      if (text.includes(word.toLowerCase())) {
        score -= 10
        scoringBreakdown.staticFrictionPenalties -= 10
        scoringBreakdown.detectedKeywords.staticFriction.push(word)
      }
    })
    
    // DETECT HIGH VELOCITY INDICATORS
    KINETIC_DOCTRINE.high_velocity_indicators.forEach((word: string) => {
      if (text.includes(word.toLowerCase())) {
        score += 15
        scoringBreakdown.velocityBonuses += 15
        scoringBreakdown.detectedKeywords.highVelocity.push(word)
      }
    })
    
    // CHECK FOR METRICS (%)
    const hasMetric = /\d+%/.test(text) || text.includes('percent') || text.includes('percentage')
    if (hasMetric) {
      scoringBreakdown.multipliers.push({
        type: 'Metric',
        multiplier: KINETIC_DOCTRINE.execution_multipliers.has_metric,
        value: 1.5
      })
      const match = text.match(/\d+%/)
      scoringBreakdown.detectedKeywords.metrics.push(match ? match[0] : 'metric detected')
    }
    
    // CHECK FOR TIMELINES (Q1-Q4, months)
    const timelineRegex = /\b(q[1-4]|january|february|march|april|may|june|july|august|september|october|november|december)\b/i
    const hasTimeline = timelineRegex.test(text)
    if (hasTimeline) {
      scoringBreakdown.multipliers.push({
        type: 'Timeline',
        multiplier: KINETIC_DOCTRINE.execution_multipliers.has_timeline,
        value: 1.3
      })
      const match = text.match(timelineRegex)
      scoringBreakdown.detectedKeywords.timelines.push(match ? match[1] : 'timeline detected')
    }
    
    // CHECK FOR TECH STACK
    const techStackRegex = /\b(rag|llm|kubernetes|docker|aws|azure|gcp|react|nodejs|python|java|microservices|terraform|serverless)\b/i
    const hasTechStack = techStackRegex.test(text)
    if (hasTechStack) {
      scoringBreakdown.multipliers.push({
        type: 'Tech Stack',
        multiplier: KINETIC_DOCTRINE.execution_multipliers.has_tech_stack,
        value: 2.0
      })
      const matches = text.match(techStackRegex)
      if (matches) {
        scoringBreakdown.detectedKeywords.techStack.push(...matches.slice(0, 3)) // Limit to first 3 matches
      }
    }
    
    // APPLY MULTIPLIERS
    let finalMultiplier = 1.0
    scoringBreakdown.multipliers.forEach(mult => {
      finalMultiplier *= mult.multiplier
    })
    
    const finalScore = Math.round(score * finalMultiplier)
    scoringBreakdown.finalScore = finalScore
    
    // Generate bottlenecks based on analysis
    const bottlenecks = []
    const recommendations = []
    
    if (scoringBreakdown.staticFrictionPenalties < -20) {
      bottlenecks.push({
        category: 'Static Friction',
        severity: 'high',
        description: `High concentration of static friction words detected: ${scoringBreakdown.detectedKeywords.staticFriction.join(', ')}`,
        impact: 'Strategy will face significant execution delays due to bureaucratic language'
      })
      recommendations.push('Replace static friction words with specific technical actions')
    }
    
    if (scoringBreakdown.multipliers.length === 0) {
      bottlenecks.push({
        category: 'Execution Specificity',
        severity: 'high',
        description: 'No metrics, timelines, or technical stack specified',
        impact: 'Strategy lacks the specificity needed for engineering execution'
      })
      recommendations.push('Add specific metrics, timelines, and technical stack details')
    }
    
    if (finalScore < 40) {
      bottlenecks.push({
        category: 'Strategic Viability',
        severity: 'critical',
        description: 'Strategy scores too low for successful execution',
        impact: 'High probability of failure - complete strategic revision needed'
      })
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Strategy shows strong execution potential')
    }
    
    // Determine strategy type
    let strategyType = 'Neutral'
    if (finalScore >= 70 && scoringBreakdown.multipliers.length >= 2) {
      strategyType = 'Kinetic'
    } else if (finalScore <= 45 && scoringBreakdown.staticFrictionPenalties < -10) {
      strategyType = 'Static'
    }
    
    return {
      kineticScore: finalScore,
      velocity: Math.min(100, Math.round(finalScore * 0.9)),
      alignment: Math.min(100, Math.round(finalScore * 0.8)),
      observability: Math.min(100, Math.round(finalScore * 0.85)),
      bottlenecks,
      recommendations,
      strategyType,
      isKinetic: strategyType === 'Kinetic',
      isStatic: strategyType === 'Static',
      scoringBreakdown
    }
  }

  const handleAnalyze = async () => {
    if (!strategy.trim()) return
    
    setIsAnalyzing(true)
    
    // Mock AI analysis with realistic scoring logic
    setTimeout(() => {
      const mockAnalysis = analyzeStrategy(strategy)
      
      setAnalysis(mockAnalysis)
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-executive-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <StrategyInput 
              value={strategy}
              onChange={setStrategy}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
            
            {analysis && (
              <div className="space-y-6">
                <KineticScore analysis={analysis} />
                <BottleneckDetector bottlenecks={analysis.bottlenecks} />
                <ScoringBreakdown breakdown={analysis.scoringBreakdown} />
              </div>
            )}
          </div>
          
          {/* Results Section */}
          <div className="space-y-6">
            {analysis && (
              <>
                <div className="executive-card">
                  <h3 className="text-xl font-bold kinetic-text mb-4">Strategic Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Velocity</span>
                        <span className="text-kinetic-green font-bold">{analysis.velocity}%</span>
                      </div>
                      <div className="w-full bg-executive-slate rounded-full h-2">
                        <div 
                          className="bg-kinetic-green h-2 rounded-full transition-all duration-500"
                          style={{ width: `${analysis.velocity}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Alignment</span>
                        <span className="text-kinetic-blue font-bold">{analysis.alignment}%</span>
                      </div>
                      <div className="w-full bg-executive-slate rounded-full h-2">
                        <div 
                          className="bg-kinetic-blue h-2 rounded-full transition-all duration-500"
                          style={{ width: `${analysis.alignment}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Observability</span>
                        <span className="text-kinetic-yellow font-bold">{analysis.observability}%</span>
                      </div>
                      <div className="w-full bg-executive-slate rounded-full h-2">
                        <div 
                          className="bg-kinetic-yellow h-2 rounded-full transition-all duration-500"
                          style={{ width: `${analysis.observability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="executive-card">
                  <h3 className="text-xl font-bold kinetic-text mb-4">Strategic Recommendations</h3>
                  <ul className="space-y-3">
                    {analysis.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-kinetic-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
