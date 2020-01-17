let listProductsRawData = [
    "extension//abc2//Đôi Loa 2.0//Kisonli//Nhựa tổng hợp//100//Tất cả thiết bị có jack 3.5mm//07-01-2018//24//vn-live-03.slatic.net/p/218c4522031a109518a211c185eada38.jpg",
    "extension//abc3//Ốp silicol cho Redmi note 7//Xiaomi//Nhựa dẻo//50//Điện thoại Redmi note 7//null//null//mishophcm.com/Pictures/op-chong-soc-redmi-note7-xundd-6_small.jpg",
    "extension//abc4//Đầu chuyển từ Micro Usb sang Type C//Xiaomi//Nhựa cứng//30//Điện thoại Redmi note 7//null//null//mishophcm.com/Pictures/dau-chuyen-xiaomi.jpg",
    "extension//abc5//Cường lực Xiaomi Redmi note 7//Xiaomi//Nhựa tổng hợp//70//Điện thoại Redmi note 7,7 pro//null//null//mishophcm.com/Pictures/cuong-luc-redmi-note-7-full.jpg",
    "extension//abc6//Ốp lưng Xiaomi Redmi note 7 vân vải 3D//Xiaomi//Nhựa bền//100//Điện thoại Redmi note 7,7 pro//null//null//mishophcm.com/Pictures/op-lung-redmi-note-7-vai-2.jpg",
    "extension//abc7//Sạc dự phòng Polymer 10.000mAh//Samsung//Nhựa cứng//490//Tất cả điện thoại//12-05-2019//36//cdn.tgdd.vn/Products/Images/57/217992/sac-du-phong-polymer-10000mah-type-c-aukey-pb-xn10-1-600x600.jpg",
    "extension//abc8//Sạc dự phòng nền mặt mèo//Samsung//Nhựa cứng//250//Tất cả điện thoại//15-04-2019//24//cdn.tgdd.vn/Products/Images/57/204428/pin-sac-du-phong-7500mah-ava-cat-3s-cam-trang-1-600x600.jpg",
    "extension//abc9//Tai nghe bluetooth JBL LIVE200BTBLK đen//Samsung//Nhựa dẻo//870//Tất cả điện thoại//17-03-2019//24//cdn.tgdd.vn/Products/Images/54/217995/tai-nghe-bluetooth-jbl-live200btblk-den-1-600x600.jpg?fbclid=IwAR1JJeQ_CHbzgj7mJ-2lAc8C4OWx2XSYIChy0uML2akbFFQiAjLFKKb_UKw",
    "extension//olns//Ốp lưng iPhone người sói 6-7-8-X-Plus//Wolverine//Nhựa cứng//79//Iphone 6-7-8-X-Plus//26-3-2019//12//gomhang.vn/images/stories/virtuemart/product/op_wolverine_iphone_x_xs_avatar_mau_do.jpg",
    "extension//olslc//Ốp lưng silicon case OEM iPhone//OEM//silicon//119//Iphone 6-7-8-X-Plus//26-6-2019//12//gomhang.vn/images/stories/virtuemart/product/ava-silicone-case-iph91.jpg",
    "extension//olsm//Ốp lưng 360 siêu mỏng iPhone//null//nhựa mềm//49//Iphone 6-7-8-X-Plus//21-6-2019//12//gomhang.vn/images/stories/virtuemart/product/360-sieu-m%E1%BB%8Fng-7.jpg",
    "extension//olcl//Ốp lưng cường lực Toughened Glass iPhone 6-7-8-X//null//glass//99//Iphone 6-7-8-X-Plus//1-5-2019//12//gomhang.vn/images/stories/virtuemart/product/avt1871.jpg",
    "extension//olrk//Ốp lưng RichKid Dubai cho iPhone//null//glass//129//Iphone 6-7-8-X-Plus//1-5-2019//12//gomhang.vn/images/stories/virtuemart/product/ava-ch%E1%BB%91ng-nong-iph740.jpg",
    "extension//olcn//Ốp lưng chống nóng iPhone//null//glass//59//Iphone 6-7-8-X-Plus//1-5-2019//12//gomhang.vn/images/stories/virtuemart/product/ava-ch%E1%BB%91ng-nong-iph740.jpg",
    "extension//oldr//Túi da rút cho iPhone//null//da//60//Iphone 6-7-8-X-Plus//6-1-2019//12//gomhang.vn/images/stories/virtuemart/product/bao-da-rut-iphone-6-7-ava.jpg",
    "extension//olslcm//Ốp silicon siêu mịn iPhone//null//silicon//59//Iphone 6-7-8-X-Plus//1-5-2019//12//gomhang.vn/images/stories/virtuemart/product/op-silicon-sieu-min-iphone-7-plus-ava9538.jpg",
    "extension//oldung//Ốp dựng mọi góc độ iPhone//null//nhựa//159//Iphone 6-7-8-X-Plus//22-03-2019//12//gomhang.vn/images/stories/virtuemart/product/ava875.jpg",
    "extension//olhc//Ốp lưng Hoco Ultrathin cho iPhone//null//nhựa mềm//39//Iphone 6-7-8-X-Plus//8-7-2019//12//gomhang.vn/images/stories/virtuemart/product/ava-hoco-ultrathin.jpg",
    "extension//olj3//Ốp lưng Jetblack 360 cho iPhone//null//nhựa cứng//120//Iphone 6-7-8-X-Plus//18-7-2019//12//gomhang.vn/images/stories/virtuemart/product/op-lung-jetblack-360-cho-iphone-7-plus-ava.jpg",
    "extension//olsm//Ốp lưng Memumi siêu mỏng iPhone//null//silicon//79//Iphone 6-7-8-X-Plus//9-10-2019//12//gomhang.vn/images/stories/virtuemart/product/op_memumi_sieu_mong_iphone_6_6s_avatar.jpg",
    "extension//olbv//Case bảo vệ iPaky iPhone//null//nhựa//149//Iphone 6-7-8-X-Plus//22-03-2019//12//gomhang.vn/images/stories/virtuemart/product/ava-ipaky-6667.jpg",
    "extension//oluc//Ốp lưng U case Slimfit iPhone//null//nhựa mềm//149//Iphone 6-7-8-X-Plus//4-7-2019//12//gomhang.vn/images/stories/virtuemart/product/ava2394.jpg",
    "extension//olvdc//Ốp lưng Sulada vân da iPhone 11//null//nhựa cứng//99//Iphone 11 Plus//1-7-2019//12//gomhang.vn/images/stories/virtuemart/product/op-lung-sulanda-van-da-iphone-11-pro-281.jpg",
    "extension//olcs//Ốp lưng LEEU trong chống sốc iPhone 11//null//silicon//99//Iphone 11 Plus//7-10-2019//12//gomhang.vn/images/stories/virtuemart/product/op-leeu-silicon-iphone-11-1.jpg"
]
let listExtensionsData = [];
for (let element of listProductsRawData) {
    element = element.split("//");
    element[9] = "http://" + element[9];
    if (element[0] == "extension")
        listExtensionsData.push(new Extension(element[1], element[2], element[3], element[4], element[5], element[6], element[7], element[8], element[9]));
}
console.log(listExtensionsData);