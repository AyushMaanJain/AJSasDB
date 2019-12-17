var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.whole = [
        {
            Name: "Do you want to visit GoogleGoogle?",
            URL: "https://www.google.co.in/",
            logo: "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
            content:"google by google search engine"

        },
	{
	Name:"Do you want to visit Bing?",
	URL:"https://www.bing.com/",
    logo: "http://www.stickpng.com/assets/images/5847ea5ccef1014c0b5e4838.png",
    content: "bing by microsoft search engine"
	},
	{
	Name:"Do you want to visit Yahoo?",
	URL:"https://in.yahoo.com/",
    logo: "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/yahoo-logo-png-transparent-background.png",
    content: "yahoo by verizon search engine"
	},
        {
            Name: "Do you want to visit Facebook?",
            URL: "https://www.facebook.com",
            logo: "https://cdn.worldvectorlogo.com/logos/facebook-1.svg",
            content: "facebook by facebook social media"
        },
        {
            Name: "Do you want to visit Instagram?",
            URL: "https://www.instagram.com/?hl=en",
            logo: "https://i0.wp.com/mobileocta.com/wp-content/uploads/2018/01/logo-instragram.jpg?resize=700%2C352",
            content: "instagram by facebook social media"
        },
        
        {
            Name: "Do you want to visit Twitter?",
            URL: "https://twitter.com/",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfTFmvCnFxeXtEZ8Jpdg0YSvQ2BVTtuQByva4m6O52C-VjbsNCA",
            content: "tweater by twitter social media"
        },
        {
            Name: "Do you want to visit Gmail?",
            URL: "https://www.google.com/gmail/",
            logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEhUSEhMTFRAXFRYYFxgSFhYWFRgaFRUXGBgYFhkYHyggGBolGxUVLTEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4mICUvLS0vKystMC0tKy8tLS0tLS0tLy8uLTUtLSstLS0tLS0tLS0rLS0tLS0tLS8tLSstLf/AABEIAJABXgMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgECAwj/xABKEAABAwEDBggJCwMCBwEAAAABAAIDEQQFIQYSMUFRcQciYXKBkaGyExQyMzRSc7HRFSMkQlOSk7PB0vAlYsI1ohdEVKPh4vEW/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQf/xAA3EQEAAQICBwQJBAIDAQAAAAAAAQIDBBEFEiExQVFxEzIzgSJhkaGxwdHh8BQ0QlIVkgYk8SP/2gAMAwEAAhEDEQA/ALxQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAlBC3hlVY4cHShztkfH7RgOkqVbwV65up9uxqqvUU8UHaOEizjyYpDzi1vuqpdOirnGqGqcVTwhjf8AExv/AE//AHf/AEWf+Jn+/u+7z9X6mVZ+EWE+VE8c1zXe+iwq0VXG6qHsYqnklrHlhY5Prlh2SNI7RUDrUavAXqeGfRsi/RKbgnY8ZzHNc3a0gjrCi1UzTOUxk2xMTueixeiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgh7/AMoorKKHjSUwYD2uP1QpWHwtd6dm7m13LsUK1vPKK122TwTM51dDI8G9I17zVXEWrGEp1p3+9Dmqu7OUJ25+DouAdapDX1I/1KgXtJ3KtlvZHvb6MNTHe2tosuSFhjGEDDyuxPaoNV+7Vvqn2t8UUxuhkPycsZwNni+6FjFyuN0z7XurHJEXjkBY5BxA6J22M4fdOCk28dfo/ln12/drqsUTwaRf2S1qsdX+chH12DRzm6t+hW2Hx9F70atkolyxVRtjcjbFer4znMe5jtrSR17RyKXXaprjKqM2qKpjc3bJrhAz3thtDaucQ1sjBrPrtGjeOoaVUYvR9NFM10Ts5T8pS7V+ZnKqG/qpShAQEBAQEBAQEBAQEBAQEBAQEBAQeFttccLDJI7NYKVJqdJAGjlIXlVUUxnLGuumiNarcjP/ANXYageHbUkAYO0nDYtfb2+bT+rs55ayVtNobG0vcSGjSQCaDbgDgtqQ8Y7yic4MDuOTmhpDgahmeQQRhxTr3aUGWgICAgICAgICCCypv4WZlG0Mzhxf7R6x/Tb0FS8JhpvVZzuhqu3NSPWqWeWW1TCJlXSPdpOJJOklXtyujD28+X5khUxNypbmS2TkVjjDWgGUjjvOkn4LnL16q7VrVLCiiKYyhNrUyEBAQcOAOBxHKgpvLm7IWWzwNkBL3AFzG6GudiGt2YUNNVR0X+Fv1xY17s7OE8ZQbtETcypbtkTkc2ytEstHWgjoZyDl5VVYnE1Xp9XJKt24oj1tvUVsEBAQEBAQEBAQEBAQEBAQEBBg31eIs8LpSK0pQbSTQDrK22LU3a4ohjXVq05q/my7tLHZ1WOHqZtG7gdI6yrqNG2pjLb1Q/1FUSsO6re2eFkzPJe0OAOkbQeUGqo7lE0VzTPBNpq1oiURl+6lhlPLH+axRcR4c/nFEx85WJ8vjCm5JyZGc9veCradtUdYUVrbdp6w+gJ4A9hY7yXNLTTYRQq5dS8BdcQk8LQ59a1rzv3HqGxBmoCAgICAgICDytVobGx0jjRrQSdwHvWVFM1VRTHF5M5RnKmMo71dK9z3eU46Ng1AcgC6exai3RERwVtdU1Tm2jgouYBr7W8cZxLWV1AaT0lU+kb2tc1OEfFLw9GVOaxFXJAgICAgIMWO7oWvMjY2CQmpdQVqdJqvZmZ3mTKXgICAgICAgICAgICAgICAgICAgjMo7s8Zs8kIOa4gFp2OaQRXkw7Vvw97sbkVsLlGvTkqN+R94ukzPAuGNM6ozN9diua9I2cs4nyyQ4w9ea3sn7t8Ws8cNaljaE7TpPaVRXK5rqmqeKdTGrGSN4QvQJd8X5rFFxPhz+cUPSH7efL4wpc+dZz294Kto70dYUVjxI6w+im6Arl1TlAQEBAQEBAQEGqcIduzIWxDTI6p5rKHvFvUrHRtvWuTVy+aPiKsqclS3hJUlX07IQV6ZO2MQ2aGMfVjb1kVPaVyVdWvVNXNaxGUZJFYvRAQEBAQEBAQec87GDOe5rW7XEAdZXlVUUxnMsqKKq5ypjOfU8I7ygdg2WMn+1wPuWEXaJ3TDZVh7tO2aZjyevjcfrDrWWvTzYdnXyPG4/Wb1pr08zs6+TjxyP129aa9PM7Kvk6+PReu3rCa9PN72VfJx8ow/aM6wmvTzOyr5HylD9oz7wTXp5nZV8nV962doJMsYaBUkuAAA0knUE16eb2LNyZyimSwXtZ56iGaKUtpXwb2vIrormnBKaqat0l2xdteJTMdYyZiyahBjS3hE3S8dGPuUS5jsPb71cfH4N1OHuVboePyxD6x+6fgtH+Wwv8Ab3T9Gz9Hd5e97wW2N+DXgnZoPUcVJs4yxenKiqJnlx9jVXZuUd6GQpLUIOssgaC5xAaBUkmgAGkkr2ImZygmcmC6/LINNohG+RnxW2MNen+M+xh2lHOGe1wIqDUHEELSza7whegS74vzWLRifDn84oWkP28+XxhS586znt7wVbR3o6worHiR1h9FN0BXLqnKAgICAgICAgIK34Spz4wxupsQPS5zq9gCvNF0/wDzmfWhYmfSyaDJi4bx71ZXe7PRHp3voOIcUbh7lyK1d0BAQEBAQEBAQarl2cIRqq/sDfietQcbupXGiN9fl82qRSuaQ5pIcNBGBUCJmJzhc1UxVGVUZw2u5spQ6jJqNdqdoad/qns3KdaxMTsqUmK0bNPpWtscuP3+LYS5S1U8nOXg8nFHrxcViIq+78hsrayO4xHFY3F7tw1DlOCwruRRvSsLg7uJqyojZxnhH5yVflLlNPazRxzIa4RtOGGt5+uezYAoVd2qvo6vBaPtYaM421c5+XL82vfgwkIvKKhpVsgPKM2tD0gdS24XxGrTUf8AUnrC91ZONa1lZanRltScxwwGqoOO/SFzmmu37SmmiZmmqN0c4+PBZ4Hs9WZnfHFBQwWuXFkTs3a7ijtUK3obFXIzq2dZ+mbfVjrVO7ayPka2jHMB3ObVbatAXojZVHv+jGNI0cYl4B72nNe0tcNRwKqL9m7h69S5GU/m2Ey3XRcpzpbHcN7Fx8E81d9UnSaajyrotD6Squz2F2c54Tz9U+uPfHvrcbhYo/8ApRu4p5dArUdlGfos/sn90rfhvGp6wwudyVKXhaToXUUxltVkzmu+5PR4fZM7oXJV96VrG5E8IXoEu+L81ijYnw5/OKHpD9vPl8YUufOs57e8FW0d6OsKKx4kdYfRTdAVy6pygICAgICAgICCsOEkUtQ5YmH/AHPH6K/0Z4PnPyQMT3/Jo8w61ZTGaPC/rtnEkUbxocxrutoK4+qnVmYngtonPayV49EBAQEBAQEBBqeXowh3v/xUHG/x81zojfX5fNp7Zcc04O7Dyg61AXWXF2c5eCQunKJ8FGuq+LZrbzT+mjcpFq/VRsnbCFitH0XvSjZVz59fq3Cx26OZufG4OHaDsI1FT6a4qjOHP3bNdqrVrjJ3keBicANuhetcRm0vKHLMNqyzUc7XIcWjmD6x5ThvUW5iOFPtXmD0RNXpX9kcuPny+PRX1snc9xe9xc8mpLjUnpUSZz2y6OiimimKaYyiEdPIB/P5tXsQ2bmxcGB/qUO6TuFSML4it01+znrC+1ZOMecsDHUzmg5pqKitDtCD0QEEVlFZA+POpxm4g8lcR/NiqdM4eLuGmrjTtj5+5MwNyaLsRwlqLpjG5rhpaQeorksLc7K9TXymPuubtOvRNPOFgsdUAjQRXrX0NzSPyk9En9jJ3St+G8ajrDC53J6KOt66ngrF7XJ6PD7JndC5GvvStY3InhC9Al3xfmsUbE+HP5xQ9Ift58vjClz51nPb3gq2jvR1hRWPEjrD6KboCuXVOUBAQEBAQEBAQV7wpWajoZdRa5hO4hzfe7qV1omvZVT5/nuQ8VG6VfSBXKItrg4vDwtjawnjREsO7S3/AGkDoXM6Qtal+Z4Tt+vvWNirWo6NpUJuEBAQcE03IImTKaxtJBnZUbKkdYFCpMYO/MZ6stfa0cwZTWP7ZvU74J+jvf1O1o5uHZUWIaZ29TvgkYO/P8TtqObLu29oLQCYZA8NwNAcK7wtV2zXanKuMmVNcVbYa9l+6gh3v/wVbjf4+a70Rvr8vm1q6KOnjBFRnf4lRLPfhZY3Zh6+nzSd73CcXRfd+Gz3blvu4fjSrsJpLL0bvt+v5m1WYkEgggjSDgQosxkvaZiqM43OtlvCSF2fG4td2EbHDWF7TVNM5w8u2KLtOrXGcO9+ZQzWjiuIbHhxGVAJ2u1nHq7Vsru1V72rC4C1h9tO2ectfletSwiGxZOZGSWgh81Y4cCBoe79o7d2lSLdiatsqnG6Woteha21c+EfWfd8Hjwo2KOF9nZG0NaIn0AFB5YWWIpinKIe6DrquU3K65zmZjb5I/guP9Th3SdwphfESNN/tJ6wv1WTi3V7wBUkADWVjVVTTGtVOUPYiZnKEXar9Y3yQXcpwHxVPiNNWqNlEZ+6E23ga6u9OSLmymdqzB0fEqtr07fnuxEeX3S6dH243saW/XvBaXAg6RQfBRLulsRcpmmqdk+qG2jB2qZziERbXKuic5zSpWFd5+aj5je6F9Hhy7Fyk9En9jJ3SpGG8ajrDC53J6KOt66ngrF7XJ6PD7JndC5GvvStY3InhC9Al3xfmsUbE+HP5xQ9Ift58vjClz51nPb3gq2jvR1hRWPEjrD6KboCuXVOUBAQEBAQEBAQQeWd1m0WV7WisjeOze3UOUguHSpWCvdleiqd26fz3tV6jWomFMVquqVjYch76FltAzzSGSjX7BjxXdBPUSoGPw3bW843xtj5w32LmpVt3SuJc0sRAQEGsX9k7aLU4h1qLYdTGNoOnHjHfVS7OKiz3aIz5y1V2tffKJZwas12mQ7mtW+dK3uUeyfqw/TUetreU12CxzCJrnOb4Nrqu01JcNW5WeDu1X7etVvzRr1MUVZQ1+ecuIbtIHWaKTXOpTMw1xtledz3bHZ4mxxtAAArtJ1krk6q6q51qpzmVpEREZQ1nhIdQQb5P8FX43+PmvNDRtr8vm1jJ+T6TFzj3SotnvwssdH/AF6+nzWAFYuURV83DHOK+S/U4fzEcnuWq5aitMwuNuYedm2OX5uV9e1gkgdmvGGpw8l247eRQa6Jpna6fDYm3fpzonrHGGBDC+VwZG0uedAHvOwcpXkRMzlCRcuUW6deucob7kxkfHGRJNR8wph9Vh5K6TynoppUy1YiNs73NY3Sld70Leyn3z+cva3BraaFKVKrOGQ/PWf2T++FDxO+HUf8f8OvrHwQvBWf6nFuf3CvMN4iVpz9pPWH0ArJxbU76vPOJx4g0D9d647SOPqv15U93hHzXeGw8W6du/iirtu2a1kkHMiBoXH3Aayt2j9E9tHaXZ2e+fpDDE4zs51aN7YrPklZm+VnvP8Ac4jsFFf29H4aiNlEee34q6rE3at9XyeltuOzMie5sQDg0kGp0gb1rx1m3GGuTFMd2eEcmWHuVzdpzmd8cWo24YLh6YylfysG7vNR8xvdC+jxucvLFyk9En9jJ3SpGG8ajrDC53J6KOt66ngrF7XJ6PD7JndC5GvvStY3InhC9Al3xfmsUbE+HP5xQ9Ift58vjClz51nPb3gq2jvR1hRWPEjrD6KboCuXVOUBAQEBAQEBAQEFS5f5PmzTGZg+YlJOGhjziW8gOJHSNS6HR+K7SjUq3x74+yBiLWrOtG6WrNKskZY2QmVQIbZp3UIoInnWNTHHbsOvRp00mPwWUzdtx1j5/n/k2xe/jU31U6WICAgIKx4SPSh7Jneer/Rng+c/JBxPf8mks843nt7wU6/3Kuk/Boo70PoNuhcktWjcKDqCz75PcxQcbupXuhI21+Xzapk0+tqh5x7pUWz34WePj/rV9PnCywrFyLjytHk7du74oOlssEcrCx7QWnUQvKqYqjKWdu5Vbq1qJyl4XNccNmbSNuJ0k4k7ydK8otxRubcRirt+rO5P0SD49Ywd7+QrOYR3eN1d+sbF7Aqnhq89Z/Zv76iYnfDqP+PeHX1j4Ibgo/1KLc/uFY4bxEvTn7SesL5vF1Inkacx3uUjG1TTh7kx/Wfg4+xGdymPXDQrfiFwU1ek6KI2N3uOIMs8QGjMB6SKntK+h2YiLdMU7so+Dm7metOfNnLYwYd7yBsT66xQbz/OxQdJXIow1efGMvakYWmarsZdWh3guG/kv+CwLu81HzG90L6NG5zEsXKT0Sf2MndKkYbxqOsMLncnoo63rqeCsXtcno8Psmd0Lka+9K1jcieEL0CXfF+axRsT4c/nFD0h+3ny+MKXPnWc9veCraO9HWFFY8SOsPopugK5dU5QEBAQEBAQEBAQY9uscc0bopGhzHChB/mB5VlRXNFUVUzth5MRMZSqLKnJKaxuL2gyWfU8DFvI8DRv0blf4XH03fRq2VfHp9EG7YmnbG5ARThWGeaO3XJvLeSIBktZYhgDX5xo5CfKHIetVuJ0dTX6VGyfd9km3iJp2S367b8s89PByNLvVPFf904qnu4e5a70fRLpuU1bpSK0MxBw5wAqTQcqbxVPCHeET7TWN7XgRtBLSCKguqKjeF0WjrdVFr0oy2/RAxFUTVsabFNWRnPb3gpN6rOirpLVRG2H0Q3QuUWjQOFl1BZ98vuYoWM3Qv8AQe+vy+bUMlJPpkPOPccotnvwtNIR/wBWvp84WrSu73/+FYOOegXo7BB2C9HYBALNY0+/egqfhr89Z/Zv76iYnfDqP+PdyvrHwQ3BR/qUO5/cKxw3iJenP2k9YX9NGHNLToII6xRT7lEV0zRVumMva4ymqaZiY4NBtTSxxY7Ag0K+e38PXYuTbr3x+Z+bpLdymumKo4py5b5axgY+tBoI2bCFe6O0xTbtxavcN0xy9fT1K/FYKaqtejjwSMt+wgYVPRT3qxuaaw1MZxnPl9UanA3Znbsa9eF7umeGgVP1Wtx/+71R3b+I0hc1aI8uEeufzon0W7eGpzmUPapQQqqmJTJWJdhrDH7NndC+j0znEOYnexspT9EtHsZO6VIwvjUdYa7ncnooy3PC6mdkKxfFx+jw+yZ3QuRr70rWNyI4Qz9Al3xfmsUbE+HPl8UPSH7ery+MKWDwZWc9veCraO9HWFHY8SOsPoxugK5dS5QEBAQEBAQEBAQEHDgDgcRyoNSvvg/ss5Lo6wyH1PJO9ujqUuzjrtvZnnHraq7NNTT7dwe26M/NlkreQ5p6j8VYW9KUfyiY96PVhp4SjH3DeDMDZpegAjsKkxpCxPH3Sw7CvkzLM69mYMZagNgLqdVaLXVfwVW/L2fZ7FF6N2ftScLb8fo8MOc4NWmb2BjdTn5fVnFF+eL1dkhec/nphT++Rz6bgsf8jZo8O38I+r39PXPeqZ1k4MotM0z38jeKOvSo9zSV6rdlDZTh6IbBd+R1hhoWwtLhrfxj2qJXfuV96qW2KKY3Qn1qZITKrJ1ttja0uzXsJLXUqMRQgjYcOoLVdtRcjKUvB4yvDVTNO3PfDXLDkDLFI2Rk0We01FYzTQRt5VppwkUznEpt3S9V2iaKqNk+v7Jz5Mt329n/AAn/AL1u7OefuV/aWv6T/t9j5Nt/29n/AAX/AL01J5vNe1/Sf9vs5+Trf9vZ/wAF/wC9e6k8zXtf0n/b7HyfeH29m/Bf+9NSeZr2v6T/ALfZz4heH29m/Bf+9NSeZr2v6T/t9jxG8ft7N+C/96ak8zXtf1n/AG+yFv8AyJtFsc1080BLAQM2IjAmutxWu5h9ffKbhdJfpomLdO/nP2d8leD9tknE7pA5zQQ0MbmirhQk7cF7aw9Nuc3mM0pdxNHZzGUb27rerEZfNystAqTmyDQ4e4jWFExeCtYmMq428Jje3Wb9dqfR9jWZcmbW08UscNodTsKpa9AVZ+jXHnH/AKn06RjjDmHJe1v8t7GDfnHqHxWdrQEROddXsj5z9GNekZ/jHtbJc9xxWcVbxnnS52ncNgV5Yw9uxTq24yQLl2q5OdUoCXIyQnCVtNVQa0VT/grf959yZ/kKv6tru+AxxMYTUtaBUa6CiuqKdWmKeSBVOczLretj8NDJFXN8IxzK7M4EV7VttV9nXFccJzYVU60TCvH8Frz/AMyPuH4qxnSlc/xho/TRzWNYLP4OJkda5rGtrtzQAqyZznNJYWU10+N2Z8GdmZ2bxqVpmvDv0Wq5biunVlqv2ou0TRPFosfBU4Oa7xkYEHydhqtMYWI4olGjqKZiYmVmgKUsHKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6vdQE7BVB43fahLEyUAgPaHUOkVCDIQYt520QxPldiGitNp0AdJIQYd3WASRtktAEsrwHEPFWMriGsacG0GvSdZQejLmjZK2SImICucyPisfXRnN0YY6Agy57WxhoTxqVzWgudTbmtBNOVAslrjlGdG4OFaGmojURpB5Cg8pr0hbXOfgDQuo4sBrSjngZrTXaUGQ6dobnlzQzA5xIpjox6Qgx4ryhe4sa8F40gA1G/DBBF5LgZ9rOoWh7RyBp0cgxQSjLzhLmtzxV3k1BDX8xxFHdBKDMQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQec/ku3H3INQZZI47DDaI/SB4LNcHEuJL2tLNOLaEjN0IMq8nuiNos7TQzljot8zhHLTccelBK35d3hLK+FgxzG5o25hBA6c2iDpkzebZoWivzrAGvacHAtwrTYafpqQL0vOWGSJmYwtlkDAc41FSMThy6EGPcEx8YtbX+d8ICK6THQhlOQCn3uVBh26ORtqtRgrU2XOdm/aYhuj61ASN5QS2TpZJZIgACzwYa4aiQM1wPTXrQa7dcUwhgkAdJDFaHnNbi4s8kPA+tQ59ANoQTMAbNaxPETmMY6OQ0Lau0hlDQ1FanZgNwQ0ud4teGbWvjL609XPbndGbWvJVBskVmjtLWSOdnx1D2NHFa0itDQY5wqQQTTkCCTQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcOFcNSCPhuOzMc1zYmgtpm6aAjQc2tM7lpVB5vsEkloZLJ4MMiz/BhpJc4vwq+oAFANArjrQSqDBtNzwSO8I5lJPWYXMd0uYQSg7su2IEEtLnNxaZHOkLTtaXkkHcg5tN3xSOD3N44wDmlzHU2ZzSDTkQetns7GAhopU1JxJJ2uJxccBidiDH+SYauIaRnGrg1z2scTpzmNIaa68MUGHa7YRaY7MHCKMx5wIDauIOaI2VFBgKnCtKUogx33f4C0xugc7517vCxk1BFC4yclDTHa4DXiEvZ7viYXFjaF5JdiSHE6SQTQnlQeNnuSzxuLmMzamtA5+ZXmVzexBIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPG1WWOQZsjGvbse0OHag4s1kjjr4NjGV05rQK76aUHugICAgICAgICD//2Q==",
            content: "gmail by google email"
        },
        {
            Name: "Do you want to visit Rediff mail?",
            URL: "https://mail.rediff.com",
            logo: "data:image/png;base64,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",
            content: "reddiffmail by rediff email"
        },
        {
            Name: "Do you want to visit youTube?",
            URL: "https://www.youtube.com/",
            logo: "https://www1-lw.xda-cdn.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo.png",
            content: "youtube by google online videos entertainment"
        },
        {
            Name: "Do you want to visit Miniclip?",
            URL: "https://www.miniclip.com/games/en/",
            logo: "https://mxnitro.game/img/logos/miniclip_logo.png",
            content: "mini clip by miniclip play games online gaming entertainment"
        },
        {
            Name: "Do you want to visit Ocean of games?",
            URL: "http://oceanofgames.com/",
            logo: "http://oceanofgames.com/wp-content/uploads/2013/08/coollogo_com-236847847.png",
            content: "ocean of games by oceanofgames download games downloader"
        }, {
            Name:"Do you want to visit get into pc?",
            URL: "http://getintopc.com/",
            logo: "https://2.bp.blogspot.com/-Qwer3vQ-MMc/WJc4jfZzTPI/AAAAAAAAAJQ/k2tj2NyK-KIxAakRhSaAEPZP-a-WS2WKACLcB/s1600/Snapshot_2016-07-29_234822.jpg",
            content: "get into pc by getintopc download software downloader"
        },
        {
            Name: "Do you want to visit GitHub?",
            URL: "https://github.com/",
            logo: "http://www.dataversity.net/wp-content/uploads/2014/09/GitHub_LogoMark304x200.png",
            content: "git hub by github developer website"
        },
        {
            Name: "Do you want to visit Oracle?",
            URL: "https://www.oracle.com/index.html",
            logo: "data:image/png;base64,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",
            content: "oracle by orcle developer website java"
        },
        {
            Name: "Do you want to visit Android developer?",
            URL: "https://developer.android.com/",
            logo: "https://developer.android.com/_static/d76582608b/images/android/lockup.svg",
            content: "android by google jetbrains developer android"
        },
        {
            Name: "Do you want to visit W3School?",
            URL: "https://www.w3schools.com/",
            logo: "https://nathanberg.net/images/w3schools.png",
            content: "w3school by refsnes data developer website tutorial"
        }
    ];


});
