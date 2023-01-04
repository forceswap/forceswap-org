---
title: API Overview
tags: api, documentation
---

This section explains the forceswap Subgraph and how to interact with it. The forceswap subgraph indexes data from the forceswap contracts over time. It organizes data about pairs, tokens, forceswap as a whole, and more. The subgraph updates any time a transaction is made on forceswap. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/forceswap/forceswap-subgraph) - sandbox for querying data and endpoints for developers.

[forceswap  Subgraph](https://github.com/forceswap/forceswap-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of forceswap and also tracks historical data. It is currently used to power [info.forceswap.org](https://info.forceswap.org/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [forceswap Subgraph](https://thegraph.com/explorer/subgraph/forceswap/forceswap-subgraph) only tracks data on forceswap. For forceswap information see the [Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/forceswap).
