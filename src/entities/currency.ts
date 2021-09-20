import JSBI from 'jsbi'

import { id } from '../index'
import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'BNB', 'Native Token')

  /**
   * The only instance of the base class `Currency`. For different networks
   */
  public static readonly ETHER_MAP : Record<ChainId, Currency> = {
    [ChainId.ETHEREUM]: new Currency(18, 'ETH', 'Ethereum'),
    [ChainId.ROPSTEN]: new Currency(18, 'ETH', 'Ethereum'),
    [ChainId.MAINNET]: new Currency(18, 'BNB', 'Binance'),
    [ChainId.BSCTESTNET]: new Currency(18, 'BNB', 'Binance'),
    [ChainId.LOCALNET]: new Currency(18, 'BNB', 'Binance'),
    [ChainId.MATIC]: new Currency(18, 'MATIC', 'Matic'),
    [ChainId.HECO]: new Currency(18, 'HT', 'Heco Token'),
    [ChainId.AVALANCE]: new Currency(18, 'AVAX', 'Avalance Token'),
    [ChainId.FUJI]: new Currency(18, 'AVAX', 'Avalance Token')
  }

  public static getBaseCurrency() {
    return Currency.ETHER_MAP[id.getId()]
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
export { ETHER }
