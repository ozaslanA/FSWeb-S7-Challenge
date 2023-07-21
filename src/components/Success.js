import React from "react";
import styled from "styled-components";

const SCSuccess = styled.p``;
export default function Success(props) {
  const { newOrder } = props;
  return (
    <>
      {newOrder && (
        <SCSuccess data-cy="new-order">
          Siparişiniz oluşturuldu. {newOrder.isim} isimli müşterimizin{" "}
          {newOrder.adress} adresine gönderilmek üzere hazırlanıyor.
        </SCSuccess>
      )}
    </>
  );
}
