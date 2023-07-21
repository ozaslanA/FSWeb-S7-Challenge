import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import dataInput from "./datalnput";
import Success from "./Success";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 30px 0 30px 0;
`;
const SCBox = styled.p`
  width: 40%;
  background-color: orange;
  padding: 20px;
  margin: 5px;
`;
const SCSubmit = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;
const SCLabel = styled.label`
  color: white;
  font-weight: 700;
`;
const SCError = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const SCText = styled.span`
  color: white;
  font-weight: 700;
  margin-right: 4px;
`;
const SCChecked = styled.label`
  color: white;
  font-weight: 500;
`;
const SCOrder = styled.div`
  width: 50%;
  padding: 20px;
  margin: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
const SCOptional = styled.span`
  font-size: 10px;
  font-weight: 300;
`;
const SCspan = styled.span`
  font-size: 10px;
  font-weight: 350;
  color: red;
`;
// form için hataları yazdım
const thesema = Yup.object().shape({
  name: Yup.string()
    .required("İsim gerekli.")
    .min(2, "İsim en az 2 karakter olmalı."),
  adress: Yup.string()
    .required("Adres gerekli.")
    .min(5, "Adres => Kapı No/Bina No/Sokak/Mahalle/Semt Şeklinde Olmalıdır"),
  phone: Yup.number()
    .typeError("Telefon Numarasına Benzemiyor")
    .positive("Pozitif Sayılar olacak")
    .required("Telefon No gerekli.")
    .integer("Ondalıklı Sayı ve virgül içermemeli")
    .min(10, "Telefon Numaranızı Giriniz"),

  boyut: Yup.string().required("Lütfen Pizza Boyut Seçimi Yapınız"),

  types: Yup.mixed()
    .oneOf(
      ["margherita", "pepperoni", "bbqchicken", "hawaiian"],
      "Lütfen Seçim yapınız"
    )
    .required(),
  malzeme1: Yup.boolean(),
  malzeme2: Yup.boolean(),
  malzeme3: Yup.boolean(),
  malzeme4: Yup.boolean(),
  malzeme6: Yup.boolean(),
  malzeme7: Yup.boolean(),
  malzeme8: Yup.boolean(),
  malzeme9: Yup.boolean(),
  malzeme10: Yup.boolean(),
  özel: Yup.string(),
  siparisSayisi: Yup.number()
    .positive()
    .min(1, "En az 1 sipariş ")
    .required("1 den aşağı olmuyor"),
});
//  Siparişleri saklamak için state kullanacağız
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    types: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    malzeme5: false,
    özel: "",
    siparisSayisi: "",
    phone: "",
  });

  // Form hatalarını saklama için de bir state oluşturdum
  const [errors, setErrors] = useState({
    name: "",
    adress: "",
    types: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    malzeme5: false,
    özel: "",
    siparisSayisi: "",
    phone: "",
  });
  // Buton için state tanımladık
  const [buttonDisable, setButtonDisable] = useState(true);

  // yeni sipariş için state oluşturduk
  const [newOrder, setNewOrder] = useState(null);

  function handleChange(e) {
    Yup.reach(thesema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        }); //hata yoksa name'i boş string yap diyoruz.
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(errors);
  return (
    <div className="App">
      <SCForm>
        <SCBox>
          <SCLabel>Name : </SCLabel>
          <input
            name="name"
            type="text"
            placeholder="İsim giriniz"
            value={FormData.isim}
            onChange={handleChange}
          />
          <SCLabel>
            <SCspan>{errors.name}</SCspan>
          </SCLabel>
        </SCBox>

        <SCBox>
          <SCLabel>Adress : </SCLabel>
          <input
            name="adress"
            type="text"
            placeholder="Adres giriniz"
            value={FormData.Adres}
            onChange={handleChange}
          />
          <SCLabel>
            <SCspan>{errors.adress}</SCspan>
          </SCLabel>
        </SCBox>
        <SCBox>
          <SCLabel>Telefon: </SCLabel>
          <input
            name="phone"
            type="text"
            placeholder="Telefon No giriniz"
            value={FormData.phone}
            onChange={handleChange}
          />
          <SCLabel>
            <SCspan>{errors.phone}</SCspan>
          </SCLabel>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Pizzalar:</SCText>
            <select
              name="types"
              value={formData.types}
              onChange={handleChange}
              data-cy="typesOfPizza-input"
            >
              <option value="">Pizza Tipi</option>
              <option value="margherita">Margherita Pizza</option>
              <option value="pepperoni">Pepperoni Pizza</option>
              <option value="bbqchicken">BBQ Chicken Pizza</option>
              <option value="hawaiian">Hawaiian Pizza</option>
            </select>
          </p>
          <SCLabel>
            <SCspan>{errors.types}</SCspan>
          </SCLabel>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Büyüklük:</SCText>
            <select
              name="boyut"
              value={formData.boyut}
              onChange={handleChange}
              data-cy="size-select"
            >
              <option value=""> Boy Seçimi </option>
              <option value="small">Küçük</option>
              <option value="medium">Orta</option>
              <option value="large">Büyük</option>
              <option value="x-large">Çok Büyük</option>
            </select>
          </p>
          <SCLabel>
            <SCspan>{errors.boyut}</SCspan>
          </SCLabel>
        </SCBox>

        <SCBox>
          <SCText>
            Extra Malzeme : <SCOptional>(Zorunlu Değil)</SCOptional>
          </SCText>

          {dataInput.map((event) => (
            <p>
              <input
                type="checkbox"
                name={event.name}
                checked={formData[event.name]}
                value={event.malzemeAdı}
                onChange={handleChange}
              />
              <SCChecked htmlFor={event.id}>{event.malzemeAdı}</SCChecked>
            </p>
          ))}
        </SCBox>

        <SCBox>
          <SCLabel htmlFor="special-text">
            Özel İstekleriniz <SCOptional>(Zorunlu Değil)</SCOptional>{" "}
          </SCLabel>
          <input
            name="özel"
            type="text"
            value={formData.özel}
            onChange={handleChange}
            data-cy="özel-input"
            placeholder="Özel İstekleriniz"
          />
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="numberOfOrders" data-cy="özel-label">
            Adet:{" "}
          </SCLabel>
          <input
            id="numberOfOrders"
            name="siparisSayisi"
            type="number"
            value={formData.siparisSayisi}
            onChange={handleChange}
            data-cy="siparisSayisi-input"
            placeholder="Zorunlu Alan"
          />
          <SCLabel>
            <SCspan>{errors.siparisSayisi}</SCspan>
          </SCLabel>
        </SCBox>
        <SCBox>
          <p>
            <SCSubmit
              // Disable bir buton yapıcaz formdaki zorunlu yerler dolduktan sonra enable olacka
              type="submit"
              id="order-button"
              disabled={buttonDisable}
              data-cy="buttonOrder"
            >
              Add to Orders
            </SCSubmit>
          </p>
        </SCBox>
        <SCOrder>
          // yeni sipariş için //
          <Success newOrder={newOrder} />
        </SCOrder>
      </SCForm>
    </div>
  );
}
