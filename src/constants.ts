import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  ETHEREUM = 1,
  ROPSTEN = 3,
  MAINNET = 56,
  BSCTESTNET = 97,
  HECO = 128,
  MATIC = 137,
  LOCALNET = 57
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS : Record<ChainId, string> = {
  [ChainId.ETHEREUM]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MAINNET]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  [ChainId.BSCTESTNET]: '0xDC977fd78f7A02cce441976c98D464F51f4C5Fa9',
  [ChainId.HECO]: '0xb0b670fc1F7724119963018DB0BfA86aDb22d941',
  [ChainId.MATIC]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.LOCALNET]: '0x5C249F8d20b0275fFFdebe7d7b6CdE4baF6F8fb2'
}

export const INIT_CODE_HASH : Record< ChainId, string> = {
  [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ROPSTEN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MAINNET]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  [ChainId.BSCTESTNET]: '0x47068d4959be190c4e0ac98fde3cbd272de2a1fb2b372e143cc3f866825fd105',
  [ChainId.HECO]: '0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24',
  [ChainId.MATIC]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.LOCALNET]: '0x47068d4959be190c4e0ac98fde3cbd272de2a1fb2b372e143cc3f866825fd105'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
