import styled from 'styled-components'
import { Card } from '@lydiafinance/uikit'

const StyledCard = styled(Card)<{ isStaking?: boolean; isFinished?: boolean; isHomeCard?: boolean }>`
  max-width: ${(props) => `${props.isHomeCard ? '100%' : '352px'}`};
  margin: 0 8px 24px;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  display: flex;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: ${({ isStaking }) =>
    isStaking
      ? '0px 0px 0px 2px #f9d92e;'
      : '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)'};
  flex-direction: column;
  align-self: baseline;
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
`

export default StyledCard
