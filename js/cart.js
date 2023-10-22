//Hàm tăng giảm số lượng sản phẩm
$(window).on("load", function () {

    $(".plus").click(function () {
        var soluong = $(this).parents(".btn_SLSP");
        var num = tang($(soluong).find(".soluong").val());
        $(soluong).find(".soluong").val(num);

    });
    $(".minus").click(function () {
        var soluong = $(this).parents(".btn_SLSP");
        var num = giam($(soluong).find(".soluong").val());
        $(soluong).find(".soluong").val(num);

    });
});
function tang(a) {
    return (Number(a) + 1);
}
function giam(a) {
    var x = a;
    if (x < 1 || x==1)
        return 1;
    else
        return Number(x) - 1;
}
//Lấy dữ liệu mua hàng 
$(document).ready(function () {
    $('.item-over-text-cart-left').click(function () {
        var product = $(this).parents('.item-over-text1');
        var imglink = $('.img-top').find('.img-sp').attr('src');
        var productName = product.find('.name-sp').text();
        var newprice = product.find('.new-price').text();
        var oldprice = product.find('.old-price').text();
        var percent = product.find('.percent').text();
        var SLSP = product.find('.input-slsp').val();
        var order = {
            'imglink': imglink,
            'name': productName,
            'new': newprice,
            'old': oldprice,
            'percent': percent,
            'inputslsp': SLSP
        }
        var currentproduct = window.sessionStorage.getItem('orders');
        var neworder = currentproduct + ',' + JSON.stringify(order);
        window.sessionStorage.setItem('orders', neworder);
    });
});

function addsp() {
    alert("Thêm vào giỏ hàng thành công")
}



//Tải dữ liệu vào giỏ hàng
$(window).on('load', function () {
    var order = sessionStorage.getItem('orders');
    order = '[' + order + ']';
    var data = JSON.parse(order);
    var content = '';
    var n = [];
    var x = [];
    x[0] = data[0];
    x[1] = data[1];
    z = 1;

    for (var i = 1; i < data.length; i++) {
        var cartItem = `
                <tr>
                            <td><img class = "img-sp" src="${data[i].imglink}" alt=""></td>
                            <td><label class="item-name">${data[i].name}</label></td>
                            <td>                               
                                <div>
                                    <label class="new-price">${data[i].new}</label>       
                                    <label ><s>${data[i].old}</s></label>                                   
                                </div>  
                            </td>
                            <td><input class="soluong" type="text" value="${data[i].inputslsp}" /></td>
                            <td>
                                <label class="new-price">${data[i].new}</label>                                  
                            </td>
                            <td>
                                <button style="color: #EE0000;">Xóa</button>
                            </td>
                        </tr> 
       `

        content += cartItem;
    }
    document.getElementById("tbody").innerHTML = content;
   
    UpdatePrice();

});

//Cập nhật tổng tiền
function UpdatePrice() {
    var data = $(".item-price");
    var x = $(".soluong");
    var totalPrice = 0;
    for (var i = 0; i < data.length; i++) {
        var price = $(data[i]).text();
        var num = $(x[i]).val();
        price = price.replace('.', '');
        totalPrice += (parseInt(price) * parseInt(num));
    }
    $('.total-price').text((totalPrice.toString()));
    $('.tmp-price').text((totalPrice.toString()));

}


function ch(a, data) {
    for (var i = 1; i < data.length; i++) {
        if (a.name == data[i].name)
            return true;
    }
    return false;
}
function cha(a, data) {
    for (var i = 1; i < data.length; i++) {
        if (a.name == data[i].name)
            return i;
    }
    return 0;
}
function num(a, data) {
    d = 0;
    for (var i = 1; i < data.length; i++) {
        if (a.name == data[i].name)
            d++;
    }
    return d;
}






