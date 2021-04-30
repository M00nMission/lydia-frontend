import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useGetApiPrice } from 'state/hooks'
import { Text } from '@lydiafinance/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'
import CardUsdValue from './CardUsdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

const LydWinnings = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { claimAmount } = useTotalClaim()
  const lydAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(lydAmount).multipliedBy(useGetApiPrice('lyd')).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={lydAmount} lineHeight="1.5" />
      {claimAmountBusd !== 0 && <CardUsdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default LydWinnings
