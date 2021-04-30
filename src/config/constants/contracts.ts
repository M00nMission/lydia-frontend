import { ChainId } from '@lydiafinance/sdk'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// TODO: add mainnet contracts
export default {
  masterChef: {
    [ChainId.FUJI]: '0x520b56F7C10364F2d56D9B380E0886dAcBde4e1c',
    [ChainId.AVALANCHE]: '0xFb26525B14048B7BB1F3794F6129176195Db7766',
  },
  sousChef: {
    [ChainId.FUJI]: '0x45E43f8A4b43a53230b19B08dB3061A4FB421A4D',
    [ChainId.AVALANCHE]: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95',
  },
  mulltiCall: {
    [ChainId.FUJI]: '0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f',
    [ChainId.AVALANCHE]: '0x98e2060F672FD1656a07bc12D7253b5e41bF3876',
  },
  lydiaProfile: {
    [ChainId.AVALANCHE]: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
    [ChainId.FUJI]: '0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A',
  },
  lydiaLions: {
    [ChainId.AVALANCHE]: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
    [ChainId.FUJI]: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
  },
  bunnyFactory: {
    [ChainId.AVALANCHE]: '',
    [ChainId.FUJI]: '',
  },
  claimRefund: {
    [ChainId.AVALANCHE]: '0xE7e53A7e9E3Cf6b840f167eF69519175c497e149',
    [ChainId.FUJI]: '',
  },
  pointCenterIfo: {
    [ChainId.AVALANCHE]: '',
    [ChainId.FUJI]: '',
  },
  airdrop: {
    [ChainId.FUJI]: '0xCB352441720a070A7C00C67AbD02447514A7173A',
    [ChainId.AVALANCHE]: '0x2e00De8fa96056486eDf668136dC9dD50E1Dc4a7',
  },
}
