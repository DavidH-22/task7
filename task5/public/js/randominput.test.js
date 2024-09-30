/**
 * @jest-environment jsdom
 */

const { faker } = require('@faker-js/faker');

document.body.innerHTML = `
    <form id="form">
        <input type="text" id="namaD" />
        <input type="text" id="namaB" />
        <input type="text" id="notelp" />
        <select id="provinsi">
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
            <option value="Jawa Barat">Jawa Barat</option>
        </select>
        <textarea id="pesan"></textarea>
        <div id="message"></div>
    </form>
`;

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for testing purposes

    const messageElement = document.getElementById("message");
    messageElement.textContent = "";
    messageElement.className = "";

    const nameD = document.getElementById("namaD").value.trim();
    const namaB = document.getElementById("namaB").value.trim();
    const notelp = document.getElementById("notelp").value.trim();
    const Provinsi = document.getElementById("provinsi").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nameD === "" || namaB === "" || notelp === "" ) {
        messageElement.textContent = "Please fill in all fields.";
        messageElement.className = "error";
    } //else if (!validatePhone(notelp)) {
        //messageElement.textContent = "Please enter a valid phone number.";
        //messageElement.className = "error";
    //}
     else {
        messageElement.textContent = "Thank you, your data have been submitted successfully.";
        messageElement.className = "success";
    }
});

//const validatePhone = (phone) => {
    //const phonePattern = /^[0-9]{10,15}$/;
    //return phonePattern.test(phone);
//};

describe("Form submission tests with random data", () => {
    test("Should display success message for valid data", () => {
        const randomFirstName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomPhoneNumber = faker.phone.number('628#########'); 
        const randomProvinsi = faker.helpers.arrayElement(['Jawa Tengah', 'Jawa Timur', 'Jawa Barat']);
        const randomPesan = faker.lorem.sentence();

        document.getElementById("namaD").value = randomFirstName;
        document.getElementById("namaB").value = randomLastName;
        document.getElementById("notelp").value = randomPhoneNumber;
        document.getElementById("provinsi").value = randomProvinsi;
        document.getElementById("pesan").value = randomPesan;
        

        


        document.getElementById("form").dispatchEvent(new Event("submit"));

        expect(document.getElementById("message").textContent).toBe("Thank you, your data have been submitted successfully.");
        expect(document.getElementById("message").className).toBe("success");
    });
});