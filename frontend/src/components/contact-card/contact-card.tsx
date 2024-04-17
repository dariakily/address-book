import * as Styled from './contact-card.styles';
import { ICardProps } from './contact-card.types';

export const ContactCard = ({ data: { email, firstname, lastname } }: ICardProps) => {
  return (
    <Styled.Card data-testid="test-contact-card">
      <Styled.CardName>
        {firstname} {lastname}
      </Styled.CardName>
      <Styled.CardEmail>{email}</Styled.CardEmail>
    </Styled.Card>
  );
};
