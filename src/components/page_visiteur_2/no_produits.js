import './no_produits.css';
export default  function Loading_func(props){
    console.log(props.x)
    return(<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}