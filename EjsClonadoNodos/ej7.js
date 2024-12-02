function crearCalendario(elemento, ano, mes) {
    // Mes comeza en 0 (xaneiro) e remata en 11 (decembro)
    let data = new Date(ano, mes - 1);
    
    // Crear a táboa
    let table = document.createElement('table');
    
    // Crear cabeceira cos días da semana
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    ['L', 'M', 'Me', 'X', 'V', 'S', 'D'].forEach(dia => {
        let th = document.createElement('th');
        th.textContent = dia;
        headerRow.append(th);
    });
    thead.append(headerRow);
    table.append(thead);
    
    // Crear corpo da táboa
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    
    // Axustar o primeiro día da semana (0 - domingo, 1 - luns, ...)
    let primeiroDia = data.getDay();
    if (primeiroDia === 0) primeiroDia = 7;
    
    // Engadir celas baleiras ata o primeiro día do mes
    for (let i = 1; i < primeiroDia; i++) {
        tr.append(document.createElement('td'));
    }
    
    // Encher a táboa cos días do mes
    while (data.getMonth() === mes - 1) {
        let td = document.createElement('td');
        td.textContent = data.getDate();
        tr.append(td);
        
        if (tr.children.length === 7) {
            tbody.append(tr);
            tr = document.createElement('tr');
        }
        
        data.setDate(data.getDate() + 1);
    }
    
    // Completar a última semana con celas baleiras se é necesario
    while (tr.children.length < 7 && tr.children.length > 0) {
        tr.append(document.createElement('td'));
    }
    if (tr.children.length > 0) {
        tbody.append(tr);
    }
    
    table.append(tbody);
    elemento.append(table);
}