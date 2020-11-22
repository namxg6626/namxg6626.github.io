#### Note:
- các bạn sẽ code theo mẫu anh cho ở từng bài nha
- tải extension prettier, copy đề bài, xong rồi tổ hợp phím shilft + alt + f để format code cho đẹp

---

#### Bài 1
- cho một dãy các số nguyên, hãy đếm số lần xuất hiện của các phần tử số nguyên đó
```js
/*
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

const arr = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7];

const countElement = arr.reduce(...);

console.log(countElement);
```
---

#### Bài 2
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