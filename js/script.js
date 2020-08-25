function bukutamu() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var komentar = document.getElementById("komentar").value;


    if(nama == "") {
        alert("Mohon Masukkan Nama Anda :))")
    }else  if(email == "") {
        alert("Mohon Masukkan E-mail Anda :))")
    }else if(komentar == "") {
        alert("Komentar Anda Belom dimasukkan :))")
    }else {
        console.log(nama);
document.getElementById("list").innerHTML=
    `<table>

        <tr>
            <td>
                Data Buku Tamu :
            </td>
        </tr>
        
        <tr>
            <td>  Nama </td>
            <td> : </td>
            <td> `+ nama + ` </td>
        </tr>
        <tr>
            <td> Email </td>
            <td> : </td>
            <td> ` + email + ` </td>
        </tr>
        <tr>
            <td> Komentar </td>
            <td> : </td>
            <td> ` + komentar + ` </td>
        </tr>
    </table>`
}


}