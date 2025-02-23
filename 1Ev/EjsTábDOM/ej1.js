function accessNodes() {
    // Acceder al primer nodo (John)
    const firstNode = document.querySelector('li');
    // O también:
    const firstNodeAlt = document.getElementsByTagName('li')[0];
    
    // Acceder al segundo nodo (Pete)
    const secondNode = document.querySelectorAll('li')[1];
    // O también:
    const secondNodeAlt = document.getElementsByTagName('li')[1];
}