import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import * as S from './style'
import Qr from 'qrcode.react'

//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'


function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    if(!mac)
    alert('Você precisa informar o código gerado no celular')
    else{
      await localStorage.setItem('@todo/macaddress', mac)
      setRedirect(true)
      window.location.reload();
    }
  }

  return (
  <S.Container>
    { redirect && <Redirect to="/" /> }

    <Header/>
    <S.Content>
      <h1>CAPTURE O QRCODE PELO APP</h1>
      <p>Suas atividades serão sincronizadas com o seu celular</p>
      <S.QrCodeArea>
        <Qr value='getmacaddress' size={230}/>
      </S.QrCodeArea>

      <S.ValidationCode>
        <span>Digite o código recebido</span>
        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
        <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
      </S.ValidationCode>
      
    </S.Content>

    <Footer/>
  </S.Container>
  )
}
  
export default QrCode;