---
title: Other Exports
tags: sdk, documentation
---

# JSBI

```typescript
import { JSBI } from '@forceswap/sdk'
// import JSBI from 'jsbi'
```

The default export from [jsbi](https://github.com/GoogleChromeLabs/jsbi).

# BigintIsh

```typescript
import { BigintIsh } from '@forceswap/sdk'
// type BigintIsh = JSBI | bigint | string
```

A union type comprised of all types that can be cast to a JSBI instance.

# ChainId

```typescript
import { ChainId } from '@forceswap/sdk'
// enum ChainId {
//   MAINNET = 1,
//   ROPSTEN = 3,
//   RINKEBY = 4,
//   GÖRLI = 5,
//   KOVAN = 42
// }
```

A enum denominating supported chain IDs.

# TradeType

```typescript
import { TradeType } from '@forceswap/sdk'
// enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }
```

A enum denominating supported trade types.

# Rounding

```typescript
import { Rounding } from '@forceswap/sdk'
// enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }
```

A enum denominating supported rounding options.

# FACTORY_ADDRESS

```typescript
import { FACTORY_ADDRESS } from '@forceswap/sdk'
```

The <Link to='/docs/v1/smart-contracts/factory/#address'>factory address</Link>.

# INIT_CODE_HASH

```typescript
import { INIT_CODE_HASH } from '@forceswap/sdk'
```

See <Link to='/docs/v1/smart-contracts/factory/#address'>Pair Addresses</Link>.

# MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '@forceswap/sdk'
```

See <Link to='/docs/v1/protocol-overview/smart-contracts/#minimum-liquidity'>Minimum Liquidity</Link>.

# InsufficientReservesError

```typescript
import { InsufficientReservesError } from '@forceswap/sdk'
```

# InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '@forceswap/sdk'
```

# WETH

```typescript
import { WETH } from '@forceswap/sdk'
```

An object whose values are <Link to='/docs/v1/smart-contracts/router02/#weth'>WETH</Link> <Link to='/docs/v1/SDK/token'>Token</Link> instances, indexed by [ChainId](#chainid).
