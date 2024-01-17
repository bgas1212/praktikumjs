let pegawai ={
    nama:"budi",
    nip:"98765432",
    alamat:{
        jalan:"jl.kolo",
        kecamatan:"kulon"

    }
}

// console.log(pegawai.nama)
// pegawai.nama = "senthod"
// console.log(pegawai.nama)
// console.log(pegawai.alamat.jalan)
// console.log(pegawai.alamat.kecamatan)
// console.log(pegawai.nip)


let beri = prompt("tulis salah satu (nama, nip, alamat)", "" )

switch (beri) {
    case "nama":
        document.write(pegawai.nama)
        break;
    case "nip":
        document.write(pegawai.nip)
        break;
    case "alamat":
        document.write(pegawai.alamat.jalan)
        document.write(pegawai.alamat.kecamatan)
        break;

    default:
        document.write("gak ada di pilihan")
        break;
}