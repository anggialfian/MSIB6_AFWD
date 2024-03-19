// Data Pegawai
const dataPegawai = [
    { nama: "Anggi Alfian", jabatan: "Manager", gaji: 15000000, status: "Menikah" },
    { nama: "Siti Nur Halimah", jabatan: "Asisten Manager", gaji: 10000000, status: "Menikah" },
    { nama: "Rika Oktavia", jabatan: "Staff", gaji: 5000000, status: "Belum" }
];

// Tunjangan keluarga
function hitungTunjanganKeluarga(status, gaji) {
    return status === "Menikah" ? gaji * 0.2 : 0;
}

// Total gaji
function hitungTotalGaji(gaji, tunjanganJabatan, bpjs, tunjanganKeluarga) {
    return gaji + tunjanganJabatan - bpjs + tunjanganKeluarga;
}

// Data pegawai
function isiDataPegawai() {
    const tableBody = document.getElementById("pegawaiData");
    const totalGajiElement = document.getElementById("totalGaji");
    let totalGaji = 0;

    dataPegawai.forEach(pegawai => {
        const {nama, jabatan, gaji, status} = pegawai;
        const tunjanganJabatan = gaji * 0.15;
        const bpjs = gaji * 0.1;
        const tunjanganKeluarga = hitungTunjanganKeluarga(status, gaji);
        const totalGajiPegawai = hitungTotalGaji(gaji, tunjanganJabatan, bpjs, tunjanganKeluarga);

        // Data pegawai di tabel
        const row = `<tr>
            <td>${nama}</td>
            <td>${jabatan}</td>
            <td>${status}</td>
            <td>${gaji}</td>
            <td>${tunjanganJabatan}</td>
            <td>${bpjs}</td>
            <td>${tunjanganKeluarga}</td>
            <td>${totalGajiPegawai}</td>
        </tr>`;
        tableBody.innerHTML += row;

        // Total gaji akhir
        totalGaji += totalGajiPegawai;
    });

    // Total gaji di tfoot
    totalGajiElement.textContent = totalGaji;
}

// Fungsi default
isiDataPegawai();
