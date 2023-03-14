
import react from 'react';
import '../stylesheets/Products.css';

function Products(props) {
    return(
        <div className="card-containers">

<img src={require (`../images/${props.imagen}.svg` )}alt=""className='imgs'/>
<h2 class='title'>{props.titulo}</h2>
    <p class='text'>{props.texto}</p>
<div className='contenido'>
    <div className='flex'>
        <div>
    <img src={require (`../images/${props.imagen2}.svg` )}alt=""className='imgm'/>
    </div>

    <div className='planes'>
    <h4 class='plan'>{props.plan}</h4>
    <h4 class='valor'>{props.valor}</h4>
    </div>

    <div>
    <h4 class='cambio'>{props.cambio}</h4>  
    </div>
    </div>

    <div>
  
    <h4 class='boton'>{props.boton}</h4>
    <h4 class='boton2'>{props.boton2}</h4>
    </div>
</div>
</div>
    ) ;

}





export default Products;


