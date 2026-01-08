# Kinetic Strategy Validator (KSV)

AI-powered strategy validation tool that scores enterprise strategies on the Kinetic Scale, differentiating between executable "Kinetic" strategies and static boardroom presentations.

## 🎯 Core Principle

Built on the **Kinetic Enterprise doctrine** that prioritizes **Velocity over Static Friction** and penalizes vague boardroom jargon in all scoring logic.

## ⚡ Features

- **Executive Dark Mode Dashboard** - Professional interface for strategy analysis
- **Kinetic Scale Scoring (1-100)** - Real-time strategy evaluation
- **Bottleneck Detection** - Identifies execution risks and friction points
- **Transparent Logic** - Complete scoring breakdown showing why strategies score as they do
- **Doctrine-Based Analysis** - Adheres to Kinetic Enterprise principles

## 🚀 Quick Start

### Option 1: Instant Execution (Recommended)
```bash
npx kinetic-strategy-validator
```
This will automatically start the KSV on http://localhost:3000 without any setup required.

### Option 2: Clone and Install
#### Step 1: Clone the repository
```bash
git clone https://github.com/ckotsidimos/strategy-validator.git
cd strategy-validator/kinetic-strategy-validator
```

#### Step 2: Install dependencies
```bash
npm install
```

#### Step 3: Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start using the KSV.

## 📊 Scoring Logic

The KSV uses a deterministic scoring system based on the Kinetic Enterprise doctrine:

### Base Framework
- **Base Score**: 50 points (neutral intent)
- **Static Friction Penalties**: -10 points per buzzword
- **Velocity Bonuses**: +15 points per technical indicator
- **Execution Multipliers**: Applied cumulatively

### Multiplier Hierarchy
1. **Tech Stack (2.0x)** - Technology enables execution
2. **Metrics (1.5x)** - Measurability enables tracking
3. **Timeline (1.3x)** - Urgency drives velocity

### Strategy Classification
- **Kinetic Strategy**: Score ≥ 70, minimum 2 multipliers, technical specificity
- **Static Strategy**: Score ≤ 45, high static friction, no execution elements

## 🎯 Example Scenarios

### Kinetic Strategy (Score: 100)
> "Deploy RAG architecture by Q4 with 99% availability and latency < 50ms."

**Analysis**: Technical specificity + measurable metrics + timeline = High execution potential

### Static Strategy (Score: 20)
> "We will maximize shareholder value through synergy and optimize transformation."

**Analysis**: Boardroom jargon + no technical details = Presentation-only strategy

## 🏗️ Architecture

- **Next.js 14** - React framework with app directory
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Executive dark mode styling
- **Lucide React** - Modern icon library
- **Recharts** - Data visualization components

## 📁 Project Structure

```
kinetic-strategy-validator/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main application page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Header.tsx         # Application header
│   │   ├── StrategyInput.tsx   # Strategy input component
│   │   ├── KineticScore.tsx   # Score display
│   │   ├── BottleneckDetector.tsx # Risk analysis
│   │   └── ScoringBreakdown.tsx # Logic transparency
│   └── doctrine.ts           # Kinetic Enterprise doctrine
├── public/                   # Static assets
├── DECISIONS.md             # Architectural decision record
└── README.md                # This file
```

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📜 Doctrine Compliance

All scoring logic strictly adheres to the Kinetic Enterprise doctrine:

✅ **Velocity over Static Friction** - Implemented through penalty/bonus system  
✅ **Boardroom Jargon Penalization** - Static friction words heavily penalized  
✅ **Technical Specificity Rewarded** - High-velocity indicators and multipliers  
✅ **Transparency** - Complete scoring breakdown displayed  
✅ **Execution Focus** - Tech stack and metrics heavily weighted  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Kinetic Enterprise Doctrine**: https://github.com/ckotsidimos/kinetic-enterprise
- **Live Demo**: https://github.com/ckotsidimos/strategy-validator
- **Issues**: https://github.com/ckotsidimos/strategy-validator/issues

---

Built with ❤️ following the Kinetic Enterprise doctrine.
