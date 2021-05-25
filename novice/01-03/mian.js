console.log("halo");

var data = { a: 1}
var vm = new Vue({
    el: '#example',
    data: {
        Hallo: "okeee",
        num: 6,
        input:''
    },
    methods: {
        incrementNum() {
            let number = parseInt (this.input);
            this.num += number;
            console.log(typeof (this.num));
            },
            decrementNum() {
                this.num -= 3;
            }
        }
})