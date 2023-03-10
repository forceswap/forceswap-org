---
title: Pair (ERC-20)
tags: smart-contracts, documentation
---

This documentation covers ERC-20 functionality for denominating pool tokens. For forceswap-specific functionality, see <Link to='/docs/v1/smart-contracts/pair'>Pair</Link>.

# Code

[`forceswapV1ERC20.sol`](https://github.com/forceswap/forceswap-v1-core/blob/master/contracts/forceswapV1ERC20.sol)

# Events

## Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint value);
```

Emitted each time an approval occurs via [approve](#approve) or [permit](#permit).

## Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint value);
```

Emitted each time a transfer occurs via [transfer](#transfer-1), [transferFrom](#transferfrom), <Link to='/docs/v1/smart-contracts/pair/#mint-1'>mint</Link>, or <Link to='/docs/v1/smart-contracts/pair/#burn-1'>burn</Link>.

# Read-Only Functions

## name

```solidity
function name() external pure returns (string memory);
```

Returns `forceswap` for all pairs.

## symbol

```solidity
function symbol() external pure returns (string memory);
```

Returns `force` for all pairs.

## decimals

```solidity
function decimals() external pure returns (uint8);
```

Returns `18` for all pairs.

## totalSupply

```solidity
function totalSupply() external view returns (uint);
```

Returns the total amount of pool tokens for a pair.

## balanceOf

```solidity
function balanceOf(address owner) external view returns (uint);
```

Returns the amount of pool tokens owned by an address.

## allowance

```solidity
function allowance(address owner, address spender) external view returns (uint);
```

Returns the amount of liquidity tokens owned by an address that a spender is allowed to transfer via [transferFrom](#transferfrom).

## DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32);
```

Returns a domain separator for use in [permit](#permit).

## PERMIT_TYPEHASH

```solidity
function PERMIT_TYPEHASH() external view returns (bytes32);
```

Returns a typehash for use in [permit](#permit).

## nonces

```solidity
function nonces(address owner) external view returns (uint);
```

Returns the current nonce for an address for use in [permit](#permit).

# State-Changing Functions

## approve

```solidity
function approve(address spender, uint value) external returns (bool);
```

Lets `msg.sender` set their allowance for a spender.

- Emits [Approval](#approval).

## transfer

```solidity
function transfer(address to, uint value) external returns (bool);
```

Lets `msg.sender` send pool tokens to an address.

- Emits [Transfer](#transfer).

## transferFrom

```solidity
function transferFrom(address from, address to, uint value) external returns (bool);
```

Sends pool tokens from one address to another.

- Requires approval.
- Emits [Transfer](#transfer).

## permit

```solidity
function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
```

Sets the allowance for a spender where approval is granted via a signature.

- See <Link to='/docs/v1/smart-contract-integration/supporting-meta-transactions/'>Using Permit</Link>.
- Emits [Approval](#approval).

# Interface

```solidity
import '@forceswap/v1-core/contracts/interfaces/IforceswapV1ERC20.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IforceswapV1ERC20 {
  event Approval(address indexed owner, address indexed spender, uint value);
  event Transfer(address indexed from, address indexed to, uint value);

  function name() external pure returns (string memory);
  function symbol() external pure returns (string memory);
  function decimals() external pure returns (uint8);
  function totalSupply() external view returns (uint);
  function balanceOf(address owner) external view returns (uint);
  function allowance(address owner, address spender) external view returns (uint);

  function approve(address spender, uint value) external returns (bool);
  function transfer(address to, uint value) external returns (bool);
  function transferFrom(address from, address to, uint value) external returns (bool);

  function DOMAIN_SEPARATOR() external view returns (bytes32);
  function PERMIT_TYPEHASH() external pure returns (bytes32);
  function nonces(address owner) external view returns (uint);

  function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
```

# ABI

```typescript
import IforceswapV1ERC20 from '@forceswap/v1-core/build/IforceswapV1ERC20.json'
```
