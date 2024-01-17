let karyawan = {
    nama:"amir",
    nip:"12345678",
    alamat:"jl.kolo"
}

// console.log(karyawan.nama)
// console.log(karyawan.nip)
// console.log(karyawan.alamat)


// function cetak(muncul) {
    
// }

let beri = prompt("tulis salah satu (nama, nip, alamat)", "" )

switch (beri) {
    case "nama":
        document.write(karyawan.nama)
        break;
    case "nip":
        document.write(karyawan.nip)
        break;
    case "alamat":
        document.write(karyawan.alamat)
        break;

    default:
        document.write("gak ada di pilihan")
        break;
}