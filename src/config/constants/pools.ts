import { ChainId } from '@lydiafinance/sdk'
import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

// TODO: add mainnet contracts
const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.lyd,
    earningToken: tokens.lyd,
    contractAddress: {
      [ChainId.FUJI]: '0x520b56F7C10364F2d56D9B380E0886dAcBde4e1c',
      [ChainId.AVALANCHE]: '0xFb26525B14048B7BB1F3794F6129176195Db7766',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2.5',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools