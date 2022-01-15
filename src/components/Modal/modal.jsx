import React from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width || "360px"};
  height: ${(props) => props.height || "480px"};
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }
`;

const   CloseBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.img`
  margin: 16px;
  cursor: pointer;
`;


function Modal({width, height, closeModal, children}) {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalWrapper>
        <ModalInner width={width} height={height} onClick={e=>e.stopPropagation()}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default Modal
