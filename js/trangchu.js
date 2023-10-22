// tạo hàm chuyển form đăng nhập đăng ký
function back() {
    document.getElementById("1").style.display = "none";
}
//tao ham mo form dang ky
function pdk() {
    document.getElementById("1").style.display = "flex";
    document.getElementById("dk").style.display = "block";
    document.getElementById("dn").style.display = "none";
}
// tao ham mo form dang nhap
function pdn() {
    document.getElementById("1").style.display = "flex";
    document.getElementById("dn").style.display = "block";
    document.getElementById("dk").style.display = "none";
}
// tạo hàm hiển thị tên tai khoan
function fdk() {
    document.getElementById("noti-dk").innerText = "Xin chào";
    document.getElementById("noti-dn").innerText = document.getElementById("name1").value;
    alert("đăng ký thành công")
    back();
}
//
function fdn() {
    document.getElementById("noti-dk").innerText = "Xin chào";
    document.getElementById("noti-dn").innerText = document.getElementById("name2").value;
    back();
    alert("đăng nhập thành công")
}



/*Tìm kiếm sp */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {

    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/*Thong bao sp */
function toggle() {
    var check = document.getElementById("account").style.display
    if (check.length != 5)
    document.getElementById("account").style.display = "block"
    else
    document.getElementById("account").style.display = "none"
}
 




