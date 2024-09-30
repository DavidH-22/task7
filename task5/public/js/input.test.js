/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <form id="form">
        <input type="text" id="namaD" />
        <input type="text" id="namaB" />
        <input type="text" id="notelp" />
        <div id="message"></div>
    </form>
`;

async function submitForm(data) {
    try {
        const response = await mockApiCall(data);
        if (response.status === 200) {
            document.getElementById("message").textContent = "Thank you, your data have been submitted successfully.";
            document.getElementById("message").className = "success";
        }
    } catch (error) {
        document.getElementById("message").textContent = "Error submitting data.";
        document.getElementById("message").className = "error";
    }
}

// Mocked API call to simulate database interaction
function mockApiCall(data) {
    return new Promise((resolve, reject) => {
        // Simulate success response if valid data
        if (data.namaD && data.namaB && validatePhone(data.notelp)) {
            resolve({ status: 200, message: "Data submitted successfully" });
        } else {
            reject({ status: 400, message: "Invalid data" });
        }
    });
}

document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent form submission for testing purposes

    const messageElement = document.getElementById("message");
    messageElement.textContent = "";
    messageElement.className = "";

    const namaD = document.getElementById("namaD").value.trim();
    const namaB = document.getElementById("namaB").value.trim();
    const notelp = document.getElementById("notelp").value.trim();

    if (namaD === "" || namaB === "" || notelp === "") {
        messageElement.textContent = "Please fill in all fields.";
        messageElement.className = "error";
    } else if (!validatePhone(notelp)) {
        messageElement.textContent = "Please enter a valid phone number.";
        messageElement.className = "error";
    } else {
        // Simulate form submission (mock API call)
        await submitForm({ namaD, namaB, notelp });
    }
});

describe("Form submission tests", () => {
    test("Should display error if fields are empty", () => {
        document.getElementById("namaD").value = "";
        document.getElementById("namaB").value = "";
        document.getElementById("notelp").value = "";

        document.getElementById("form").dispatchEvent(new Event("submit"));

        expect(document.getElementById("message").textContent).toBe("Please fill in all fields.");
        expect(document.getElementById("message").className).toBe("error");
    });

    test("Should display error for invalid phone number", () => {
        document.getElementById("namaD").value = "John";
        document.getElementById("namaB").value = "Doe";
        document.getElementById("notelp").value = "123";

        document.getElementById("form").dispatchEvent(new Event("submit"));

        expect(document.getElementById("message").textContent).toBe("Please enter a valid phone number.");
        expect(document.getElementById("message").className).toBe("error");
    });

    test("Should display success message for valid data and mock database insert", async () => {
        document.getElementById("namaD").value = "John";
        document.getElementById("namaB").value = "Doe";
        document.getElementById("notelp").value = "1234567890";

        // Dispatch submit event
        await document.getElementById("form").dispatchEvent(new Event("submit"));

        // Check if success message is shown
        expect(document.getElementById("message").textContent).toBe("Thank you, your data have been submitted successfully.");
        expect(document.getElementById("message").className).toBe("success");
    });
});

// Simple phone validation mockup (use your real validation function here)
const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10,15}$/;
    return phonePattern.test(phone);
};
