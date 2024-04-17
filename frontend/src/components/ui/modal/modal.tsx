import * as Styled from './modal.styles';
import { IModalProps } from './modal.types';

export const Modal = ({ title, children, open, onClose }: IModalProps) => {
  return (
    <>
      {open ? (
        <Styled.ModalOverlay onClick={onClose}>
          <Styled.ModalContainer onClick={(e) => e.stopPropagation()} data-testid="test-modal">
            <Styled.ModalHeader>
              <Styled.ModalTitle>{title}</Styled.ModalTitle>
            </Styled.ModalHeader>

            <Styled.ModalContent>{children}</Styled.ModalContent>
          </Styled.ModalContainer>
        </Styled.ModalOverlay>
      ) : null}
    </>
  );
};
