import React from 'react'
import { Text } from '@lydiafinance/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import { useGetApiPrice } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardUsdValue from './CardUsdValue'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const lydPriceUsdt = useGetApiPrice('lyd')
  const balance = getBalanceNumber(lotteryPrizeAmount)
  const lotteryPrizeAmountLyd = balance.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
  const lotteryPrizeAmountBusd = new BigNumber(balance).multipliedBy(lydPriceUsdt || 0).toNumber()

  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {TranslateString(999, `${lotteryPrizeAmountLyd} LYD`, { amount: lotteryPrizeAmountLyd })}
      </Text>
      {lotteryPrizeAmountBusd !== 0 && <CardUsdValue value={lotteryPrizeAmountBusd} />}
    </>
  )
}

export default LotteryJackpot
