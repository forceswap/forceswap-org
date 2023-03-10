---
title: SDK Quick start
tags: SDK, developer-guides, documentation
---

The forceswap SDK exists to help developers build on top of forceswap. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.). While simple enough to use in a hackathon project, it's also robust enough to power production applications.

# Installation

The easiest way to consume the SDK is via npm. To install it in your project, simply run `yarn add @forceswap/sdk` (or `npm install @forceswap/sdk`).

# Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId } from '@forceswap/sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```

## CommonJS (require)

```typescript
const forceSWAP = require('@forceswap/sdk')
console.log(`The chainId of mainnet is ${forceSWAP.ChainId.MAINNET}.`)
```

# Reference

Comprehensive reference material for the SDK is available <Link to='/docs/v1/SDK/getting-started'>here</Link>.
