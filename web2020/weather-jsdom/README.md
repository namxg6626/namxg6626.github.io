### Note
- API Key mọi người tự đăng ký nhá, dùng chung là nó sẽ bị limit đấy
- [OpenWeather](https://openweathermap.org/)
- [Unix time](https://vi.wikipedia.org/wiki/Th%E1%BB%9Di_gian_Unix) là gì
- [App mẫu](http://first-bed.surge.sh/)
- Video hướng dẫn: [here](https://drive.google.com/file/d/1FH4RuBfmXW6x5cjezeMmUNFUazzCWbtN/view?usp=sharing)
- làm bằng JS DOM hoặc bất cứ gì mọi người thích

### Config
```js
const _API_KEY_ = "3a52c53579e9e60d4e060982eb255fc2";
const cityName = "aaa";
```

### API


1. Lấy thông tin dự báo mỗi 3h
```js
/** 
 * @doc https://openweathermap.org/current
*/
const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`
```

2. Lấy thông tin thời tiết hiện tại
```js
/** 
 * @doc https://openweathermap.org/forecast5
*/
const current = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`;
```