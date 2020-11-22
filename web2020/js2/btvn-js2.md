### Note:
- các bạn sẽ code theo mẫu anh cho ở từng bài nha
- tải extension prettier, copy đề bài, xong rồi tổ hợp phím shilft + alt + f để format code cho đẹp

---

### Bài 0
```js
const listAccounts = [
  { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
  { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
  { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
  { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
  { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
  { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
  { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
  { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
  { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
  { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
  { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
  { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
  { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
  { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
  { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
  { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
]

const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
]

// nghèo thì loại (balance <= 500000)
const listBalance = listAccounts.filter(...);

// loại id ra khỏi tài khoản, nếu chưa có thuộc tính active thì đặt isActive = null
// nếu đã có thì isActive = true
const newListAccount = listAccounts.map(...);

// tính tổng balance
const totalBalance = listAccounts.reduce((...) => {
    //...
})

// thống kê theo tuổi
const statisticsByAge = listPersons.reduce(
    (...) => {
        //...
    }, {
        treCon: 0,
        thanhNien: 0,
        nguoiGia: 0
    }
)
/*
output dạng: 
{
    treCon: 5,
    thanhNien: 2,
    nguoiGia: 3
}
*/
```

---

### Bài 1
- cho một dãy các số nguyên, hãy đếm số lần xuất hiện của các phần tử số nguyên đó
```js
/* ví dụ
input: [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7]
output: 
{ 
    '1': 2, 
    '2': 2, 
    '3': 2, 
    '4': 1, 
    '5': 2, 
    '6': 2, 
    '7': 2, 
    '8': 1 
}
*/

const arr = [...];

const countElement = arr.reduce(...);

console.log(countElement);
```

---

### Bài 2
- cho các comment, mỗi comment có thể có hoặc không có các comment con
- hãy liệt kê ra tất cả các comment theo trình tự từ trên xuống dưới
```js
// output:
[
    '5 điều Bác Hồ dạy',
    '1. Yêu tổ quốc, yêu đồng bào',    
    '2. Học tập tốt, lao động tốt',    
    '3. Đoàn kết tốt, kỷ luật tốt',    
    '4. Giữ gìn vệ sinh thật tốt',     
    '5. Khiêm tốt, thật thà, dũng cảm',
    'Ơ mây dình, gút chóp em',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 3.1',
    'Anh rất chào em'
]

const comments = [
    {
        body: "5 điều Bác Hồ dạy",
        child: [
            {
                body: "1. Yêu tổ quốc, yêu đồng bào",
                child: []
            },
            {
                body: "2. Học tập tốt, lao động tốt",
                child: []
            },
            {
                body: "3. Đoàn kết tốt, kỷ luật tốt",
                child: []
            },
            {
                body: "4. Giữ gìn vệ sinh thật tốt",
                child: []
            },
            {
                body: "5. Khiêm tốt, thật thà, dũng cảm",
                child: []
            }
        ]
    },
    {
        body: "Ơ mây dình, gút chóp em",
        child: [
            {
                body: "Level 2",
                child: [
                    {
                        body: "Level 3",
                        child: [
                            {
                                body: "Level 4",
                                child: []
                            },
                        ]
                    },
                    {
                        body: "Level 3.1",
                        child: []
                    }
                ]
            }
        ]
    },
    {
        body: "Anh rất chào em",
        child: []
    }
]

function flattenComments(comments) {
    const flattenedComments = comments.reduce((accumulator, currentVal) => {
        //...
        // gợi ý: triển khai đệ quy flattenComments trong callback này
    }, []);

    return flattenedComments;
}

const flattenedComments = flattenComments(comments);
console.log(flattenedComments);
```