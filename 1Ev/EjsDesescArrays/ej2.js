const nombreVars = ["first_name", "last_NAME"];

nombreVars.forEach(nombre => {
  const camelCase = nombre.toLowerCase().replace(/_(.)/g, (_, char) => char.toUpperCase());
  console.log(camelCase);
});