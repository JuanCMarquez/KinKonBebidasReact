const Item = ({ producto }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Simulación de carga de imagen (podrías utilizar un evento onLoad del elemento <img>)
        const image = new Image();
        image.onload = () => {
            setLoading(false);
        };
        image.src = producto.imagen;
    }, [producto]);

    if (loading) return <h1 className='text-white text-xl flex items-center justify-center'>Cargando...</h1>;

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt={producto.nombre} />
        </div>
    );
};

export default Item;