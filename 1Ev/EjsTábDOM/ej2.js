// a. É certo que elemento.lastChild.nextSibling é sempre null?
// Si, é certo. O lastChild é o último nodo fillo, polo que o seu nextSibling 
// sempre será null xa que non hai máis irmáns despois do último.

// b. É certo que elemento.children[0].previousSibling é sempre null?
// Non, non sempre é null. children[0] é o primeiro elemento fillo, pero pode
// haber nodos de texto antes (espazos en branco), que serían previousSibling