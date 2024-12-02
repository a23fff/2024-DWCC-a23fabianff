const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
 ];
 
 // a. Inventores do século XVI (1500-1599)
 const seculoXVI = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
 
 // b. Array con nomes completos
 const nomesCompletos = inventors.map(inv => `${inv.first} ${inv.last}`);
 
 // c. Nomes completos ordenados por apelido
 const nomesOrdeados = nomesCompletos.sort((a, b) => a.split(' ')[1] > b.split(' ')[1] ? 1 : -1);
 
 // d. Array orixinal ordenado por apelido
 const inventoresOrdeados = inventors.sort((a, b) => a.last > b.last ? 1 : -1);
 
 // e. Ordenar por data nacemento
 const porNacemento = inventors.sort((a, b) => a.year - b.year);
 
 // f. Suma total anos vividos
 const totalAnos = inventors.reduce((total, inv) => total + (inv.passed - inv.year), 0);
 
 // g. Ordenar por lonxevidade
 const porLonxevidade = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
 
 // Probas
 console.log('Século XVI:', seculoXVI);
 console.log('Nomes completos:', nomesCompletos);
 console.log('Nomes ordenados:', nomesOrdeados);
 console.log('Por apelido:', inventoresOrdeados);
 console.log('Por nacemento:', porNacemento);
 console.log('Total anos:', totalAnos);
 console.log('Por lonxevidade:', porLonxevidade);