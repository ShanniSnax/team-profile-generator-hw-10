// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager {

    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = this.officeNumber;
    }

    getofficeNumber() {}

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;