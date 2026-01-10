const data = '{"elementosMundanos"[{"numeroAtomico":1,"nome":"Hidrogênio","simboloAtomico":"H","massaMolar":1,"classe":"Ametal","pontoFusao":13.99,"pontoEvaporacao":20.27,"tipoMagnetico":"Diamagnético","tipoMagico":"Catalizador","radioatividade":"Não"},{"numeroAtomico":2,"nome":"Hélio","simboloAtomico":"He","massaMolar":4,"classe":"Gás Nobre","pontoFusao":0.00,"pontoEvaporacao":4.22,"tipoMagnetico":"Diamagnético","tipoMagico":"Resistor","radioatividade":"Não"},]}';
const elementos = JSON.parse(data);
export default elementos;
