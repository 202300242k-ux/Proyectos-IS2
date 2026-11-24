
(() => {

    interface Product { 
        id: number;
        name: string;
    }

    class ProductBloc {

        loadProduct(id: number) {
            // Obtener información del producto
            console.log('Producto: ', { id, name: 'OLED TV' });
        }

        saveProduct(product: Product) {
            // Guardar producto en la base de datos
            console.log('Guardando en base de datos', product);
        }

        notifyClients() {
            // Notificar a los clientes
            console.log('Enviando correo a los clientes');
        }
    }

    class CartBlock {

        onAddToCart(productId: number) {
            // Agregar producto al carrito
            console.log('Agregando al carrito ', productId);
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc = new CartBlock();

    productBloc.loadProduct(10);

    productBloc.saveProduct({
        id: 10,
        name: 'OLED TV'
    });

    productBloc.notifyClients();

    // El método pertenece a CartBlock
    cartBloc.onAddToCart(10);

})();
