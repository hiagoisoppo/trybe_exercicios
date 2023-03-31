let spToBh = (7 * 60) + 23;
let bhToSsa = (19 * 60) + 57;
let ssaToNtl = (15 * 60) + 32;

let viagemMnts = spToBh + bhToSsa + ssaToNtl;
let viagemHrs = Math.round(viagemMnts / 60);
let viagemDias = Math.round(viagemHrs / 24); 

console.log(viagemMnts + ' minutos de viagem, ou ' + viagemHrs + ' horas de viagem, ou ' + viagemDias + ' dias de viagem.')
