// object

let name, phone;
let info = {
    name,
    phone,
    printInfo(){
        console.log(`name : ${this.name} , phone number: ${this.phone}`);
    }
}

info.name = 'john';
info.phone = 123456789;

info.printInfo();