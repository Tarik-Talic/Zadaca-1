var month = prompt("Unesite zeljeni mjesec");

function getSeason(monthFun) {
  const m = monthFun.toLowerCase();
  switch (m) {
    case "januar":
    case "februar":
    case "decembar":
      alert("Zima je.");
      break;
    case "mart":
    case "april":
    case "maj":
      alert("Proljece je.");
      break;
    case "juni":
    case "juli":
    case "august":
      alert("Ljeto je.");
      break;
    case "semptembar":
    case "oktobar":
    case "novembar":
      alert("Jesen je.");
    default:
      alert("NIje dobar unos");
  }
}
