function hitungVolumeTabung (jariJari, tinggi){
    const phi = 22/7;
    jariJari = Math.pow(jariJari, 2);
    volume = phi * jariJari * tinggi;
    return `Hasil volume tabung tersebut adalah ${volume}`;
}
let jariJari = 7;
const tinggi = 10;
console.log(hitungVolumeTabung(jariJari, tinggi));