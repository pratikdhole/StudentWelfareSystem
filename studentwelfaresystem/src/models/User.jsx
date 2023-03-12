export default class User {
	constructor(fullName, user_contact, email, password, userRole, token, id) {
		this.fullName = fullName;
		this.user_contact = user_contact;
		this.email = email;
		this.password = password;
		this.userRole = userRole;
		this.token = token;
		this.id = id;
	}
}