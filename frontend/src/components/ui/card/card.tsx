import * as Styled from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({ children, ...restProps }: ICardProps) => {
  return <Styled.Card {...restProps}>{children}</Styled.Card>;
};
