export default class Address {
    constructor(roomID, addressLine1, addressLine2, cityName, stateName, contact, pinCode, contact){
        this.roomID = roomID;
        this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.cityName = cityName;
		this.stateName = stateName;
		this.pinCode = pinCode;
        this.contact = contact;
    }
}