import React from 'react'
import Img2 from '../assets/img2.jpg' 

const TrabalhandoComImagens = () => {
  return (
    <div>
      <h2>Imagem carregada da pasta public:</h2>
      <img src="/img1.jpg" alt="imagem pasta public" width="300"/>
      <h2>Imagem carregada via import (assets):</h2>
      <img src={Img2} alt="imagem importada da pasta assets" width="300"/>
    </div>
  )
}

export default TrabalhandoComImagens