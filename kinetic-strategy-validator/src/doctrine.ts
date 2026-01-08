/**
 * Kinetic Strategy Validator - Core Doctrine
 * 
 * This file defines the fundamental principles that govern the KSV scoring system.
 * All analysis logic must adhere to these doctrine constraints.
 */

// KINETIC ENTERPRISE DOCTRINE - Primary scoring system
export const KINETIC_DOCTRINE = {
  high_velocity_indicators: ['RAG', 'decoupled', 'automation', 'latency', 'deployment frequency'],
  static_friction_indicators: ['synergy', 'shareholder value', 'transformation', 'optimized'],
  execution_multipliers: {
    has_metric: 1.5, // e.g., "40%"
    has_timeline: 1.3, // e.g., "Q4"
    has_tech_stack: 2.0 // e.g., "LLM architecture"
  }
} as const

// LEGACY DOCTRINE - Kept for reference
export const LEGACY_DOCTRINE = {
  // CORE PRINCIPLES
  VELOCITY: {
    principle: 'Minimize "static friction" in decision-making',
    description: 'Strategies must enable rapid execution without bureaucratic delays',
    indicators: ['specific deadlines', 'clear ownership', 'technical stack'],
    antiIndicators: ['will be', 'shall be', 'aim to', 'consider']
  },

  ALIGNMENT: {
    principle: 'Every engineering sprint must map to a boardroom pillar',
    description: 'Technical execution must directly support strategic objectives',
    indicators: ['specific metrics', 'department ownership', 'technical implementation'],
    antiIndicators: ['synergy', 'maximize', 'shareholder value', 'optimize']
  },

  OBSERVABILITY: {
    principle: 'Strategy isn\'t a PDF; it\'s a live metric',
    description: 'Success must be measurable and trackable in real-time',
    indicators: ['%', 'latency', 'availability', 'throughput', 'response time'],
    antiIndicators: ['enhance', 'improve', 'streamline without metrics']
  },

  // SCORING CONSTRAINTS
  PRECISION_CHECK: {
    rule: '+40 points for technical keywords linked to % metrics',
    technicalKeywords: [
      'rag', 'llm', 'latency', 'architecture', 'kubernetes', 
      'microservices', 'terraform', 'serverless', 'api', 'database', 'cache'
    ],
    metricIndicators: [
      '%', 'percent', 'latency <', 'response time', 'throughput', 
      'availability', 'q1', 'q2', 'q3', 'q4', 'deadline'
    ],
    condition: 'BOTH technical keyword AND metric indicator must be present'
  },

  VAGUENESS_PENALTY: {
    rule: '-30 points for buzzwords without technical "How"',
    buzzwords: [
      'synergy', 'maximize', 'shareholder value', 'optimize', 
      'enhance', 'streamline', 'leverage'
    ],
    technicalHow: [
      'implement', 'build', 'deploy', 'architecture', 'using', 'with', 'via', 'stack'
    ],
    condition: 'Buzzword present WITHOUT technical implementation = penalty'
  },

  KINETIC_GAP: {
    rule: '+40 minimum advantage for deadline + technical stack',
    deadlines: [
      'q1', 'q2', 'q3', 'q4', 'january', 'february', 'march', 'april', 
      'may', 'june', 'july', 'august', 'september', 'october', 
      'november', 'december', '2024', '2025', '2026'
    ],
    technicalStack: [
      'rag', 'llm', 'kubernetes', 'docker', 'aws', 'azure', 'gcp', 
      'react', 'nodejs', 'python', 'java', 'microservices'
    ],
    condition: 'BOTH deadline AND technical stack = +40 guaranteed bonus',
    staticCap: 45 // Static strategies capped at this score
  },

  // STRATEGY CLASSIFICATION
  STRATEGY_TYPES: {
    KINETIC: {
      definition: 'Clear execution path with technical specificity and timeline',
      characteristics: [
        'Has technical keywords + metrics',
        'Has deadline + technical stack',
        'Specifies implementation approach',
        'Measurable success criteria'
      ],
      minimumScore: 70
    },

    STATIC: {
      definition: 'Vague presentation document lacking actionable details',
      characteristics: [
        'Contains buzzwords without technical how',
        'No specific timeline or ownership',
        'No measurable success criteria',
        'Will remain in boardroom slides'
      ],
      maximumScore: 45
    },

    NEUTRAL: {
      definition: 'Mixed signals requiring more strategic definition',
      characteristics: [
        'Some technical elements but incomplete',
        'Partial metrics or timeline information',
        'Needs clarification for execution'
      ]
    }
  },

  // EXECUTION RISK MATRIX
  RISK_FACTORS: {
    CRITICAL: [
      'Static strategy classification',
      'No department ownership',
      'Buzzwords without implementation'
    ],
    HIGH: [
      'Missing technical stack',
      'No measurable metrics',
      'Vague timelines'
    ],
    MEDIUM: [
      'Partial technical details',
      'Some metrics missing',
      'Unclear ownership structure'
    ],
    LOW: [
      'Minor implementation gaps',
      'Additional specificity needed'
    ]
  },

  // BOTTLENECK CLASSIFICATION
  BOTTLENECK_CATEGORIES: {
    OWNERSHIP_GAP: {
      severity: 'high',
      description: 'No specific department named as owner',
      impact: 'Strategy will fail due to lack of clear accountability'
    },

    STATIC_STRATEGY: {
      severity: 'high',
      description: 'Contains vague buzzwords without technical implementation details',
      impact: 'Strategy lacks actionable execution path - will remain a presentation slide'
    },

    EXECUTION_RISK: {
      severity: 'critical',
      description: 'Strategy appears to be a static presentation document rather than an actionable plan',
      impact: 'Zero probability of execution - will remain in boardroom slides'
    },

    MEASUREMENT_FRAMEWORK: {
      severity: 'medium',
      description: 'No clear success metrics defined',
      impact: 'Unable to track progress or validate outcomes'
    },

    IMPLEMENTATION_DETAILS: {
      severity: 'medium',
      description: 'Kinetic strategy needs more specific technical specifications',
      impact: 'May face execution challenges without detailed planning'
    }
  },

  // VALIDATION RULES
  VALIDATION: {
    SCORE_BOUNDS: {
      minimum: 10,
      maximum: 100
    },
    KINETIC_GUARANTEE: {
      rule: 'Kinetic strategies must score at least 40 points higher than Static strategies',
      enforcement: 'Static strategies capped at 45, Kinetic gets +40 bonus'
    },
    PRECISION_REQUIREMENT: {
      rule: 'Technical precision must be rewarded significantly',
      enforcement: '+40 points when technical keywords are linked to metrics'
    }
  }
} as const

// Helper functions to enforce doctrine
export const isKineticStrategy = (text: string): boolean => {
  const lowerText = text.toLowerCase()
  
  const hasTechnicalAndMetrics = 
    LEGACY_DOCTRINE.PRECISION_CHECK.technicalKeywords.some(keyword => lowerText.includes(keyword)) &&
    LEGACY_DOCTRINE.PRECISION_CHECK.metricIndicators.some(metric => lowerText.includes(metric))
  
  const hasDeadlineAndStack = 
    LEGACY_DOCTRINE.KINETIC_GAP.deadlines.some(deadline => lowerText.includes(deadline)) &&
    LEGACY_DOCTRINE.KINETIC_GAP.technicalStack.some(stack => lowerText.includes(stack))
  
  return hasTechnicalAndMetrics || hasDeadlineAndStack
}

export const isStaticStrategy = (text: string): boolean => {
  const lowerText = text.toLowerCase()
  
  const hasBuzzwords = LEGACY_DOCTRINE.VAGUENESS_PENALTY.buzzwords.some(buzzword => lowerText.includes(buzzword))
  const hasTechnicalHow = LEGACY_DOCTRINE.VAGUENESS_PENALTY.technicalHow.some(how => lowerText.includes(how))
  
  return hasBuzzwords && !hasTechnicalHow
}

export const calculateKineticAdvantage = (kineticScore: number, staticScore: number): number => {
  return kineticScore - staticScore
}

export const validateDoctrineCompliance = (analysis: any): boolean => {
  // Ensure kinetic strategies score at least 40 points higher than static
  if (analysis.isKinetic && analysis.kineticScore < 70) return false
  if (analysis.isStatic && analysis.kineticScore > 45) return false
  
  // Ensure scores are within bounds
  if (analysis.kineticScore < 10 || analysis.kineticScore > 100) return false
  
  return true
}