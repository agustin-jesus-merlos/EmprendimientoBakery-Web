
const agregarAlCarrito = (BakeryId)=>{
    if(BakeryId > 0){
        let productoEncontado = Productos.find((productos)=> productoEncontado.id === parseInt(BakeryId))
        if(productoEncontado !== undefined){
            carritoBakery.push(productoEncontado)
            almacenarCarrito()
        }
    }
}

const almacenarCarrito = () => {
    carritoBakery.length > 0 && localStorage.setItem('carritoBakery', JSON.stringify(carritoBakery))
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem('carritoBakery')) || []
}

const carritoBakery = recuperarCarrito()
