(() => {

    // arreglo de temperaturas celsius
    const temperaturesCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    const ip = '123.123.123.123';

    // Listado de usuarios
    const listusers = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emailsusers = listusers.map( u => u.email );

    // Variables booleanas de un video juego
    const canjump = false;
    const canrun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const starttime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endtime = new Date().getTime() - starttime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksFromUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getsquarearea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }
    
    




})();