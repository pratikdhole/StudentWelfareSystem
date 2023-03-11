export default class User {
	constructor(fullName, contact, email, password, userRole, service, token, id) {
		this.fullName = fullName;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.userRole = userRole;
		this.service = service;
		this.token = token;
		this.id = id;
	}
}