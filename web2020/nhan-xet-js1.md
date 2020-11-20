### Mai Hường
- bài 1
    - đã dùng `let` hoặc `const` rồi thì không dùng `var` nữa nha, `var` rởm :3
    - em nên dùng `for...of` để lặp qua các phần tử trong mảng, nếu em không nhớ thì em có thể xem tại [ĐÂY](https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements-in-jav#:~:text=Difference%20for..in%20and%20for,values%20of%20an%20iterable%20object.)
- bài 2
    - em có thể `console.log` biến mảng luôn, không cần dùng hàm `Show()`. Ví dụ:
        ```js
        const arr = [{ a: "1", b: "2" }, { a: "1", b: "2" }]
        console.log(arr)
        /**
        0: {a: "1", b: "2"}
        1: {a: "1", b: "2"}
        */
        ```
    - vẫn là chỗ `for...in`, `for...of`
    - để cho chặt chẽ hơn thì ở dòng 55 em nên viết kiểu này, so sánh `bool` với `string` là không nên
        ```js
        if (listAccounts[i].isActive === false) listAccounts[i].isActive = true;
        ```
    

---

### Trần Dương
- bài 1
    - em thử dùng `for...of` thay vì vòng for truyền thống xem =)), mình đang học JS, không phải C++
    - biết cách áp dụng template string rồi này
    - 
- bài 2
    - bài 2 làm ok rồi nhá

---

### Huy Lê
- bài 1
    - tuyên dương tinh thần tự tìm hiểu, đã biết sử dụng array method, callback
    - tại sao em không dùng thẳng `obj.abc` mà lại dùng `obj['abc']`? hình như em chưa hiểu lắm về sự khác nhau của 2 cái đúng không
    - biết sử dụng `for...of` rồi này
- bài 2
    - câu b làm sai nhá, em đọc kỹ lại đề bài
    - còn lại ổn rồi

---

### Huân
- đề bài đi liền với câu trả lời, được đó nha =))
- bài 1
    - thử dùng `for...of` xem lào -.-
    - hàm `statisticsByAge` em có thể `console.log({ child, middle, older })` cho ngắn
- bài 2
    - không cần viết hàm show mảng vì em có thể log trực tiếp luôn, xem ví dụ chỗ nhận xét bạn Hường nhá
    - không sủ dụng `for...in` để lặp qua các phần tử mảng, dùng `for...of`

---

### Vũ Tuấn
- bài 1
    - dùng `let/const` thì không dùng `var` nữa
    - dùng `for...of` để lặp qua các phần tử mảng
- bài 2
    - ổn rồi nha, tạm chấp nhận cách lặp `for...in`

---

### Lê Văn Hà
- dùng `let/const` thì không dùng `var` nữa

---

### Thanh Tình
- dùng `let/const` thì không dùng `var` nữa
- biết cách sử dụng template string rồi
- hàm `show` trông quen lắm, xem lại cái anh nhận xét Mai Hường

---

### Khắc Huy
- bài 1 ok, em thử sử dụng các vòng lặp khác của js thử xem
- hàm `khuyenMai` làm thiếu điều kiện nhá
- hàm `changeActive` em làm thiếu điều kiện `isActive === false` nữa
    ```js
    // cách đơn giản hơn
    if (!listAccounts[i].isActive) listAccounts[i].isActive = true;
    ```