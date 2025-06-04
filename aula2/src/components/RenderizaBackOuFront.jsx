import React from 'react'

const RenderizaBackOuFront = ({tecnologia}) => {

    function renderizaArea(tecnologia){
      if(tecnologia === "java"){
        return <h1>Backend</h1>
      } else if(tecnologia === "react"){
        return <b>Frontend</b>
      } else{
        return <p>Tecnologia não reconhecida</p>
      }
    }
  return (
    <div>
      {renderizaArea(tecnologia)}
    </div>
  )
}

export default RenderizaBackOuFront