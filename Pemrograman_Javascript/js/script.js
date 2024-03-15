function dataPerson() {
    // Mengambil nilai input nama, pekerjaan, dan hobi
    let nama = document.getElementById('nama').value;
    let pekerjaan = document.getElementById('pekerjaan').value;
    let hobi = document.getElementById('hobi').value;

    // Menampilkan nilai di dalam elemen HTML dengan id 'output'
    document.getElementById('output').innerHTML = " <br>Nama: " + nama + "<br>Pekerjaan: " + pekerjaan + "<br>Hobi: " + hobi;
}
