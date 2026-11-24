
(() => {

    interface Product {
        id: number;
        name: string;
    }

    // Responsabilidad: gestionar productos
    class ProductBloc {

        loadProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED TV' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    // Responsabilidad: gestionar el carrito
    class CartBlock {

        onAddToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }
    }

    // Responsabilidad: gestionar notificaciones
    class NotificationBlock {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    // Crear objetos
    const productBloc = new ProductBloc();
    const cartBloc = new CartBlock();
    const notificationBloc = new NotificationBlock();

    // Ejecutar métodos
    productBloc.loadProduct(10);

    productBloc.saveProduct({
        id: 10,
        name: 'OLED TV'
    });

    cartBloc.onAddToCart(10);

    notificationBloc.notifyClients();

})();
