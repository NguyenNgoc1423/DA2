function send(){
  var arr = document.getElementsByTagName('input');
  console.log(arr);
  var name = arr[0].value;
  var Email = document.getElementById("Email").value;
  var sdt = document.getElementById("Phone").value; 
  var address = arr[3].value;
  var number = /^[0-9]+$/;
  var form_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
  if(name == "") {
      alert("Vui lòng điền tên");
      return;
  }
  if (Email != "") {
      if (!form_email.test(Email)) {
          alert("Hãy nhập địa chỉ Email hợp lệ. \nExample@gmail.com");
          return false;
      }
  } else {
      alert("Email hông được để trống đâuu");
      return false;
  }
  if (sdt != "") {
      if (!sdt.match(number)) {
          alert("Số điện thoại phải là kiểu số");
          return false;
      } else if (sdt.length != 10) {
          alert("Số điện thoại phải có 10 ký tự.");
          return false;
      }
  } else {
      alert("Số điện thoại không được để trống.")
      return false;
  }
  alert("Đặt Hàng thành công...");
  window.location.href = "trangchu.html"

}
// var form_signin = document.forms['form-control']
// // Đăng Nhập
// form_signin.addEventListener('submit',()=>{
//     event.preventDefault()
//    // this là con trỏ trỏ theo id 
//    let err = true
//    let users = localStorage.getItem("product_name")
//     ? JSON.parse(localStorage.getItem("product_name"))// khi đã nhập tt
//     : []; // khi chưa nhập thông tin 

//     users.map((e,index)=>{// VÒng lặp (map)
//       users[index] = {
//         username :e.username,
//         email : e.email,
//         password : e.password,
//         key_signin: false,
//       }
// })
//     users.map((e,index)=>{// VÒng lặp (map)

//       if (this.email.value == e.email && this.password.value == e.password) {
//       users[index] = {
//         username : e.username,
//         email : e.email,
//         password : e.password,
//         key_signin: true,// key đăng nhập nếu đăng nhập thì cho = true
//       }
//       localStorage.setItem("product_name",JSON.stringify(users));
//       alert("Đăng nhập thành công!");
//       window.location.href = "./thanhtoan.html"; 
//       err = false
//     }
//      })
//      if (err == true){
//         alert("Email hoặc mật khẩu không đúng!");
//         console.log(err);
//      }
   
// })
//     if(sdt == ""){
//         alert("Vui lòng điền số điện thoại");
//         return;
//     }
//     if(address == ""){
//         alert("Vui lòng điền địa chỉ");
//         return;
//     }      
//     confirm('xác nhận thông tin của bạn!\n'+name+"\n"+Email+"\n"+sdt+"\n"+address+"\t")
//     localStorage.setItem('cart', null);
//     location.reload(); 
// }
