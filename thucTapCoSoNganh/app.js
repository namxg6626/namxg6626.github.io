const express = require("express");
const mysql = require("mysql");
const cosr = require("cors");

const app = express();
const con = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: "3306",
  database: "shopnguyenxa",
});

app.listen(4000, () => console.log("listening on port 4000"));
app.use(cosr()); // enable cross-origin sharing resources

const _SELECT_ALL = "SELECT * FROM product";
let _SELECT_BY_ID = "SELECT * FROM product WHERE id = ";

app.get(`/shopnguyenxa/`, (req, res) => {
  const id = req.param("id");
  let sql;
  id ? (sql = _SELECT_BY_ID + id) : (sql = _SELECT_ALL);
  con.query(sql, (err, result) => {
    res.json(result);
  });
});

function isNull(e) {
  if (e == "null") return null;
  return `${e}`;
}

function timeout(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

// const listProductsRawData = [
//   "extension//abc2//Đôi Loa 2.0//Kisonli//Nhựa tổng hợp//100//Tất cả thiết bị có jack 3.5mm//2018-01-07//24//vn-live-03.slatic.net/p/218c4522031a109518a211c185eada38.jpg",
//   "extension//abc3//Ốp silicol cho Redmi note 7//Xiaomi//Nhựa dẻo//50//Điện thoại Redmi note 7//NULL//NULL//mishophcm.com/Pictures/op-chong-soc-redmi-note7-xundd-6_small.jpg",
//   "extension//abc4//Đầu chuyển từ Micro Usb sang Type C//Xiaomi//Nhựa cứng//30//Điện thoại Redmi note 7//NULL//NULL//mishophcm.com/Pictures/dau-chuyen-xiaomi.jpg",
//   "extension//abc5//Cường lực Xiaomi Redmi note 7//Xiaomi//Nhựa tổng hợp//70//Điện thoại Redmi note 7,7 pro//NULL//NULL//mishophcm.com/Pictures/cuong-luc-redmi-note-7-full.jpg",
//   "extension//abc6//Ốp lưng Xiaomi Redmi note 7 vân vải 3D//Xiaomi//Nhựa bền//100//Điện thoại Redmi note 7,7 pro//NULL//NULL//mishophcm.com/Pictures/op-lung-redmi-note-7-vai-2.jpg",
//   "extension//abc7//Sạc dự phòng Polymer 10.000mAh//Samsung//Nhựa cứng//490//Tất cả điện thoại//2019-05-12//36//cdn.tgdd.vn/Products/Images/57/217992/sac-du-phong-polymer-10000mah-type-c-aukey-pb-xn10-1-600x600.jpg",
//   "extension//abc8//Sạc dự phòng nền mặt mèo//Samsung//Nhựa cứng//250//Tất cả điện thoại//2019-04-15//24//cdn.tgdd.vn/Products/Images/57/204428/pin-sac-du-phong-7500mah-ava-cat-3s-cam-trang-1-600x600.jpg",
//   "extension//abc9//Tai nghe bluetooth JBL LIVE200BTBLK đen//Samsung//Nhựa dẻo//870//Tất cả điện thoại//2019-03-17//24//cdn.tgdd.vn/Products/Images/54/217995/tai-nghe-bluetooth-jbl-live200btblk-den-1-600x600.jpg?fbclid=IwAR1JJeQ_CHbzgj7mJ-2lAc8C4OWx2XSYIChy0uML2akbFFQiAjLFKKb_UKw",
//   "extension//olns//Ốp lưng iPhone người sói 6-7-8-X-Plus//Wolverine//Nhựa cứng//79//Iphone 6-7-8-X-Plus//2019-3-26//12//gomhang.vn/images/stories/virtuemart/product/op_wolverine_iphone_x_xs_avatar_mau_do.jpg",
//   "extension//olslc//Ốp lưng silicon case OEM iPhone//OEM//silicon//119//Iphone 6-7-8-X-Plus//2019-6-26//12//gomhang.vn/images/stories/virtuemart/product/ava-silicone-case-iph91.jpg",
//   "extension//olsm//Ốp lưng 360 siêu mỏng iPhone//NULL//nhựa mềm//49//Iphone 6-7-8-X-Plus//2019-6-21//12//gomhang.vn/images/stories/virtuemart/product/360-sieu-m%E1%BB%8Fng-7.jpg",
//   "extension//olcl//Ốp lưng cường lực Toughened Glass iPhone 6-7-8-X//NULL//glass//99//Iphone 6-7-8-X-Plus//2019-5-1//12//gomhang.vn/images/stories/virtuemart/product/avt1871.jpg",
//   "extension//olrk//Ốp lưng RichKid Dubai cho iPhone//NULL//glass//129//Iphone 6-7-8-X-Plus//2019-5-1//12//gomhang.vn/images/stories/virtuemart/product/ava-ch%E1%BB%91ng-nong-iph740.jpg",
//   "extension//olcn//Ốp lưng chống nóng iPhone//NULL//glass//59//Iphone 6-7-8-X-Plus//2019-5-1//12//gomhang.vn/images/stories/virtuemart/product/ava-ch%E1%BB%91ng-nong-iph740.jpg",
//   "extension//oldr//Túi da rút cho iPhone//NULL//da//60//Iphone 6-7-8-X-Plus//2019-1-6//12//gomhang.vn/images/stories/virtuemart/product/bao-da-rut-iphone-6-7-ava.jpg",
//   "extension//olslcm//Ốp silicon siêu mịn iPhone//NULL//silicon//59//Iphone 6-7-8-X-Plus//2019-5-1//12//gomhang.vn/images/stories/virtuemart/product/op-silicon-sieu-min-iphone-7-plus-ava9538.jpg",
//   "extension//oldung//Ốp dựng mọi góc độ iPhone//NULL//nhựa//159//Iphone 6-7-8-X-Plus//2019-03-22//12//gomhang.vn/images/stories/virtuemart/product/ava875.jpg",
//   "extension//olhc//Ốp lưng Hoco Ultrathin cho iPhone//NULL//nhựa mềm//39//Iphone 6-7-8-X-Plus//2019-7-8//12//gomhang.vn/images/stories/virtuemart/product/ava-hoco-ultrathin.jpg",
//   "extension//olj3//Ốp lưng Jetblack 360 cho iPhone//NULL//nhựa cứng//120//Iphone 6-7-8-X-Plus//2019-7-15//12//gomhang.vn/images/stories/virtuemart/product/op-lung-jetblack-360-cho-iphone-7-plus-ava.jpg",
//   "extension//olsm//Ốp lưng Memumi siêu mỏng iPhone//NULL//silicon//79//Iphone 6-7-8-X-Plus//2019-10-8//12//gomhang.vn/images/stories/virtuemart/product/op_memumi_sieu_mong_iphone_6_6s_avatar.jpg",
//   "extension//olbv//Case bảo vệ iPaky iPhone//NULL//nhựa//149//Iphone 6-7-8-X-Plus//2019-03-22//12//gomhang.vn/images/stories/virtuemart/product/ava-ipaky-6667.jpg",
//   "extension//oluc//Ốp lưng U case Slimfit iPhone//NULL//nhựa mềm//149//Iphone 6-7-8-X-Plus//2019-7-4//12//gomhang.vn/images/stories/virtuemart/product/ava2394.jpg",
//   "extension//olvdc//Ốp lưng Sulada vân da iPhone 11//NULL//nhựa cứng//99//Iphone 11 Plus//2019-7-4//12//gomhang.vn/images/stories/virtuemart/product/op-lung-sulanda-van-da-iphone-11-pro-281.jpg",
//   "extension//olcs//Ốp lưng LEEU trong chống sốc iPhone 11//NULL//silicon//99//Iphone 11 Plus//2019-10-20//12//gomhang.vn/images/stories/virtuemart/product/op-leeu-silicon-iphone-11-1.jpg",
//   "extension//hiep1//Tai nghe s6-s7//Samsung//Nhựa dẻo//99//Galaxy S6/S7//2019-2-24//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe0-s6-s7-note5.jpg",
//   "extension//hiep2//Tai nghe AKG Samsung S10/S10 +/S10e//AKG//Nhựa dẻo//179//Galaxy S10/S10 +/S10e//2019-3-10//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe-s8-akg.jpg",
//   "extension//hiep3//Tai nghe AKG S8/s9/P - Note 8 Note 9//AKG//Nhựa dẻo//149//Galaxy S8/s9/P - Note 8 Note 9//2019-4-16//12//gomhang.vn/images/stories/virtuemart/product/ava-akg.jpg",
//   "extension//hiep4//Tai nghe Bluetooth Dacom K8i//DACOM//NULL//199//Các dòng mãy hỗ trợ Bluetooth 3.0 trở lên//2019-7-15//12//gomhang.vn/images/stories/virtuemart/product/dacom-k8ia.jpg",
//   "extension//hiep5//Tai nghe iPhone 7-8-Plus-X zin - chính hãng Apple//APPLE//nhựa dẻo//519//iPhone 7-8-Plus-X//2019-2-14//12//gomhang.vn/images/stories/virtuemart/product/ava-tai-foxconn-iph7.jpg",
//   "extension//hiep6//Tai nghe EarPods chính hãng Apple Foxconn//APPLE//nhựa dẻo//199//iPhone 6S Plus trở xuống//2019-1-15//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe-earport-chinh-hang-avaweb.jpg",
//   "extension//hiep7//Tai nghe Apple GH01//APPLE//nhựa//79//iPhone 6S Plus trở xuống//2019-4-28//12//gomhang.vn/images/stories/virtuemart/product/tainghe80k.jpg",
//   "extension//hiep8//Tai nghe Bluetooth i7s//NULL//nhựa//145//iPhone 6S trở xuống//2019-1-12//12//gomhang.vn/images/stories/virtuemart/product/ava-i7s.jpg",
//   "extension//hiep9//Tai nghe Bluetooth 5.0 i12 đen//NULL//nhựa//399//iPhone 5 trở lên//2019-7-17//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe-bluetooth-i12-den.jpg",
//   "extension//hiep10//Tai nghe Galaxy Note 5//Samsung//nhựa//99//Dòng máy Samsung hỗ trợ jack 3.5mm//2019-3-8//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe-s756.jpg",
//   "extension//hiep11//Tai nghe Bluetooth Dacom P10//DACOM//NULL//599//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-8-18//12//songlongmedia.com/media/product/516_dacom_p10_red.jpg",
//   "extension//hiep12//Tai nghe AKG N28 chính hãng//SAMSUNG//nhựa cứng//649//Tất cả các dòng máy có jack 3.5mm//2019-7-14//12//gomhang.vn/images/stories/virtuemart/product/Akg-n28a.jpg",
//   "extension//hiep13//Tai nghe Bluetooth Remax TWS-5//Remax//NULL//890//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-2-28//12//gomhang.vn/images/stories/virtuemart/product/tai-nghe-bluetooth-remax-tws-5.jpg",
//   "extension//hiep14//Tai nghe Bluetooth Bluedio TN//Bluedio//nhựa//589//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-05-02//12//gomhang.vn/images/stories/virtuemart/product/!bluedio-ava75.jpg",
//   "extension//hiep15//Tai nghe Bluetooth Awei G30BL//AWEI//NULL//369//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-02-16//12//gomhang.vn/images/stories/virtuemart/product/awei-g30-bl1.jpg",
//   "extension//hiep16//Tai nghe Bluetooth Dacom L06//DACOM//NULL//549//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-03-02//12//gomhang.vn/images/stories/virtuemart/product/dacom-l06-1.jpg",
//   "extension//hiep17//Tai nghe Bluetooth Awei G10BL//AWEI//Nhựa dẻo//399//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-06-09//12//gomhang.vn/images/stories/virtuemart/product/!ava-g10bl.png",
//   "extension//hiep18//Tai nghe Bluetooth Huawei FreeBuds ( white )//Huawei//nhựa dẻo//599//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-03-08//12//gomhang.vn/images/stories/virtuemart/product/!avahuawei865.jpg",
//   "extension//hiep19//Tai nghe Bluetooth Sony SP600N//Sony//nhựa dẻo//3490//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-06-08//24//gomhang.vn/images/stories/virtuemart/product/!sony.824.jpg",
//   "extension//hiep20//Tai Nghe Bluetooth Thể Thao Sony WI-C300//Sony//nhựa dẻo//815//Các dòng máy hỗ trợ Bluetooth 3.0 trở lên//2019-08-07//12//salt.tikicdn.com/cache/w1200/ts/product/5f/0d/6f/08f861903952fa6b69509cd357127b69.jpg",
//   "extension//hiep21//Sạc dự phòng Yoobao mini 10000mAh P10W//Yoobao//NULL//299//Tất cả các dòng máy//2019-06-07//12//gomhang.vn/images/stories/virtuemart/product/yoobao-p10w.jpg",
//   "extension//hiep22//Sạc dự phòng Yoobao PL12 Pro 12000 mAh//Yoobao//NULL//399//Tất cả các dòng máy//2019-02-14//12//gomhang.vn/images/stories/virtuemart/product/avatar61.jpg",
//   "extension//hiep23//Sạc dự phòng Remax 10000mAh RPP 153//Remax//NULL//249//Tất cả các dòng máy//2019-01-15//12//gomhang.vn/images/stories/virtuemart/product/sac-du-phong-remax-rp-15.jpg",
//   "extension//hiep24//Sạc dự phòng Yoobao P6W 6000mAh//Yoobao//NULL//199//Tất cả các dòng máy//2019-03-14//12//gomhang.vn/images/stories/virtuemart/product/sac-du-phong-Yoobao-P6w-6000mAh-den.jpg",
//   "extension//hiep25//Sạc dự phòng nhanh Yoobao PD20 20000mAh//Yoobao//NULL//479//Tất cả các dòng máy//2019-01-17//12//gomhang.vn/images/stories/virtuemart/product/S%E1%BA%A1c-d%E1%BB%B1-ph%C3%B2ng-Yoobao-PD20-20000mah.jpg",
//   "extension//hiep26//Sạc dự phòng Yoobao P10T 10000mAh//Yoobao//NULL//259//Tất cả các dòng máy//2019-04-13//12//gomhang.vn/images/stories/virtuemart/product/yoobao-p10t-10000.jpg",
//   "extension//hiep27//Sạc dự phòng Pisen Led 10000mAh//Pisen//NULL//449//Tất cả các dòng máy//2019-06-20//12//gomhang.vn/images/stories/virtuemart/product/S%E1%BA%A1c-d%E1%BB%B1-ph%C3%B2ng-Pisen-Led-10000-mAh.jpg",
//   "extension//hiep28//Sạc dự phòng REMAX Jane Series 10000mah RPP-119//Remax//NULL//299//Tất cả các dòng máy//2019-08-19//12//gomhang.vn/images/stories/virtuemart/product/REMAX-Jane-Series-10000mah.jpg",
//   "extension//hiep29//Sạc dự phòng vỏ kim loại Yoobao A1 10000 mAh//Yoobao//NULL//369//Tất cả các dòng máy//2019-01-20//12//gomhang.vn/images/stories/virtuemart/product/avatar2.jpg",
//   "extension//hiep30//Sạc không dây Libtech BricksPower//NULL//NULL//849//Tất cả các dòng máy//2019-05-26//12//gomhang.vn/images/stories/virtuemart/product/sac-khong-day-libtech-brickpower.jpg",
//   "extension//hiep31//Sạc dự phòng Finger Pow//NULL//NULL//1199//Tất cả các dòng máy//2019-07-24//12//gomhang.vn/images/stories/virtuemart/product/sac-du-phong-Fighter-Pow1.jpg",
//   "extension//hiep32//Sạc dự phòng Remax 10000 mAh RPP-79//Remax//NULL//519//Tất cả các dòng máy//2019-2-26//12//gomhang.vn/images/stories/virtuemart/product/ava-remax-1000099.jpg",
//   "extension//hiep33//Sạc dự phòng nhanh Yoobao 30W-PD 30000mAh//Yoobao//NULL//649//Tất cả các dòng máy//2019-8-21//12//gomhang.vn/images/stories/virtuemart/product/Yoobao%2030W-PD.jpg",
//   "extension//hiep34//Sac dự phòng kiêm không dây Totu 10000mah//Totu//NULL//799//Tất cả các dòng máy//2019-10-2//12//gomhang.vn/images/stories/virtuemart/product/ava4318.jpg",
//   "extension//hiep35//Sạc dự phòng Sinoele 10000 mAh//sinoele//NULL//349//Tất cả các dòng máy//2019-02-22//12//gomhang.vn/images/stories/virtuemart/product/ava-sinoele-10000.jpg",
//   "extension//hiep36//Sạc dự phòng Baseus M10//baseus//NULL//399//Tất cả các dòng máy//2019-07-08//12//gomhang.vn/images/stories/virtuemart/product/17431.jpg",
//   "extension//hiep37//Sạc dự phòng Samsung 5000 mAh chính hãng//SAMSUNG//NULL//599//Điện thoại android và ios//2019-03-19//12//gomhang.vn/images/stories/virtuemart/product/ava394.jpg",
//   "extension//olnak//Ốp Lưng iPhone 7 Plus / 8 Plus Anker Karapax Touch//Wolverine//Nhựa cứng//180//Iphone 7-8-Plus//2019-03-31//12//salt.tikicdn.com/cache/w1200/ts/product/c0/96/75/a38c54ab78088b9ec9d840c3eec42b61.jpg",
//   "extension//olasd//Ốp lưng dẻo iPhone XS Max Nillkin (trong suốt) //OEM//silicon//39//Iphone 6-7-8-X-Plus//2019-06-20//12//salt.tikicdn.com/cache/w1200/ts/product/b9/40/8c/3f1b0d4c017b3d47f101a79f96e2912f.jpg",
//   "extension//olsm//Ốp Chống Sốc Viền Màu Nắp Lưng Mờ //NULL//nhựa mềm//79//Iphone 6-7-8-X-Plus//2019-06-06//12//salt.tikicdn.com/cache/w1200/ts/product/91/d3/21/291149a3deadbe6dc0d1a12db59c080f.jpg",
//   "extension//olsxc//Ốp Lưng Cường Lực Trong Suốt cho IPhone 11 Pro Max//NULL//glass//200//Iphone 11-Pro-max//2019-05-19//12//salt.tikicdn.com/cache/w1200/ts/product/df/d7/2f/3e34b1da8502d4ab17dbb6db0b2448d5.jpg",
//   "extension//olfvb//Ốp lưng chống sốc phát sáng cho điện thoại iPhone 11/ iPhone 11 Pro/ iPhone 11 Pro Max//NULL//glass//129//Iphone 6-7-8-X-Plus//2910-5-09//12//salt.tikicdn.com/cache/w1200/ts/product/38/dc/64/9c52fa77ca57150d343157bd0a670fb4.jpg",
//   "extension//ojkl//Ốp lưng Memumi cho iPhone 11 Pro Max 6.5 siêu mỏng 0.3 mm (xanh rêu)//NULL//glass//59//Iphone 6-7-8-X-Plus//2019-5-30//12//salt.tikicdn.com/cache/w1200/ts/product/1a/46/fe/7d7aad58c13a032811ed896591a52c65.jpg",
//   "extension//ollmk//Ốp lưng da cao cấp dành cho iPhone X và iPhone XS//NULL//da//60//Iphone 6-7-8-X-Plus//2019-06-08//12//salt.tikicdn.com/cache/w1200/ts/product/a6/e8/11/07215f28c4a67112f3f26b938ccbf710.jpg",
//   "extension//oljkv//Ốp lưng Memumi siêu mỏng 0.3 mm cho iPhone XS Max//NULL//silicon//99//Iphone 6-7-8-X-Plus//2019-05-01//12//salt.tikicdn.com/cache/w1200/ts/product/80/8b/8f/cb681debd613c1157e609263a830163c.jpg",
//   "extension//oldeo//ỐP LƯNG DẺO TRONG SUỐT CHO IPHONE X//NULL//nhựa//159//Iphone X-Plus//2019-03-02//12//salt.tikicdn.com/cache/w1200/ts/product/b8/47/57/18123de57a3306f2606e996727d02305.jpg",
//   "extension//olcsc//Ốp lưng chống sốc cho Iphone 6 Plus / 6s Plus//NULL//nhựa mềm//79//Iphone 6-Plus//20189-07-12//12//salt.tikicdn.com/cache/w1200/ts/product/9b/0c/35/65fdc092dc15c43643e7d007fc67db7d.jpg",
//   "extension//ducanh22//Loa Bluetooth W-King X3//W-King X3//Nhựa cứng//650//smart phone//2019-08-01//2//i.imgur.com/6g7aLXd.png",
//   "extension//ducanh23//Ốp lưng iPad Air 2019 Nắp gập Stand Flip MEEKER Navy//Apple//Da//210//iPad//2019-09-15//1//i.imgur.com/2RuqFZX.jpg",
//   "extension//ducanh24//Củ sạc nhanh Remax RP-U46//Remax//Nhựa cứng//300//smart phone//2019-08-30//1//i.imgur.com/fyPmKHM.png",
//   "extension//ducanh25//Miếng dán màn hình Oppo A5//Oppo//Nhựa cứng//50//Oppo A5//2019-03-19//1//i.imgur.com/PZ2ckMG.jpg",
//   "extension//ducanh26//Miếng dán lưng iPhone 11//Apple//Nhựa cứng//50//Iphone 11//2019-08-15//1//i.imgur.com/uS9fbLd.jpg",
//   "extension//ducanh27//Loa Bluetooth chống nước Vidvie SP901//Vidvie//Nhựa cứng//630//Smart phone//2020-01-03//3//i.imgur.com/gcpPG2y.jpg",
//   "extension//ducanh28//Miếng dán màn hình Galaxy Note 10//Galaxy//Nhựa cứng//50//Galaxy Note 10//2019-10-13//1//i.imgur.com/glbNkO7.jpg",
//   "extension//ducanh29//Củ sạc 4 cổng USB Remax RP-U43//Remax//Nhựa cứng//250//Smart phone//2019-11-20//2//i.imgur.com/eOkP17b.jpg",
//   "extension//ducanh30//Tai nghe Bluetooth Mozard S205A Xanh//Mozard//Nhựa dẻo//229//Smart phone//2019-10-16//2//i.imgur.com/5VoOpBG.jpg",
//   "extension//ducanh31//Cáp 3 đầu Lightning Type C Micro 1m eValu Spanker B Xanh Biển//NULL//Nhựa dẻo//200//Smart phone//2019-11-15//2//i.imgur.com/uqu1nbM.jpg"
// ];

// (async () => {
//   for (let [index, element] of listProductsRawData.entries()) {
//     element = element.split("//");
//     await timeout(100);
//     con.query(
//       `insert into phukien values(
//         NULL,
//         N'${isNull(element[2])}',
//         N'${isNull(element[3])}',
//         N'${isNull(element[4])}',
//         '${isNull(element[5])}',
//         N'${isNull(element[6])}',
//         '${isNull(element[7])}',
//         '${isNull(element[8])}',
//         '${"https://" + isNull(element[9])}')`,
//       (err, result) => {
//         if (err) throw err;
//         console.log(index);
//       }
//     );
//   }
// })();
