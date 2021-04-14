import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
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

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
  [ChainId.BSCTESTNET]: '0xFD7CA6C8Cc6A714567404aC490FA694D1C192069',
  [ChainId.MATIC]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.LOCALNET]: '0x9517b3A930A7F529C59cD5D842CbD7e5719916c5'
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.BSCTESTNET]: '0x1b67f076571ef46f58318c4ed9611ecc3080909f200fc4a310918b6f0595f4dd',
  [ChainId.MATIC]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.LOCALNET]: '0x1b67f076571ef46f58318c4ed9611ecc3080909f200fc4a310918b6f0595f4dd'
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
