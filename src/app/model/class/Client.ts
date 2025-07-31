export class Client {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    employeeStrength: number;
    gstNumber: string;
    contactNumber: string;
    registrationNo: string;

    constructor() {
        this.clientId = 0;
        this.contactPersonName = "";
        this.companyName = "";
        this.address = "";
        this.pincode = "";
        this.city = "";
        this.state = "";
        this.employeeStrength = 0;
        this.gstNumber = "";
        this.contactNumber = "";
        this.registrationNo = "";
    }
}