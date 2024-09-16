console.log("aprendiendo react")

console.log(React)
console.log(ReactDOM)

const myPageNode = document.querySelector("#my-page")

const root = ReactDOM.createRoot(myPageNode) // esto genera el dom virtual




// const unDivNode = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola, bienvenidos a mi página, soy ${devName}`
//     }),
//     React.createElement("p", {
//       children: "estoy aprendiendo React"
//     }),
//     React.createElement("p", {
//       children: "Hasta ahora, parece algo confuso y feo"
//     }),
//     React.createElement("p", {
//       children: `Soy de ${address.city}, ${address.country}`
//     })
//   ]
// })

// JSX => JS + XML
// const unDivNode = (
//   <div>
//     <h1>Hola, bienvenidos a mi página, soy {devName}</h1>
//     <p>estoy aprendiendo React</p>
//     <p>Hasta ahora, parece algo confuso y fe</p>
//     <p>Soy de {address.city}, {address.country}</p>
//   </div>
// )


// Componentes => secciones de código y JSX que renderizaran partes de la página

function MiPagina() {

  let devName = "Jorge"
  let address = {
    city: "Barcelona",
    country: "Spain"
  }

  // SIEMPRE deben retornar un JSX
  return (
      <div>
        <h1>Hola, bienvenidos a mi página, soy {devName}</h1>
        <p>estoy aprendiendo React</p>
        <MiniComponente />
        <p>Soy de {address.city}, {address.country}</p>
      </div>
    )

}

function MiniComponente() {
  return (
    <p>Hasta ahora, parece algo confuso y fe</p>
  )
}


// root.render( MiPagina() )
root.render( <MiPagina /> ) // exactactamente lo mismo que invocar la funcion