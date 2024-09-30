/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <button id="dark-mode-toggle">Toggle Dark Mode</button>
    <div class="navbar">
        <ul>
            <li><a href="#">Home</a></li>
        </ul>
    </div>
    <div class="highlight-item"></div>
    <div class="feature-item"></div>
    <p>Some text</p>
    <div class="container"></div>
    <div class="contact-info"></div>
    <div class="about-section"></div>
    <form id="form">
        <input type="text" id="name" />
        <textarea type="pesan"></textarea>
        <select id="provinsi">
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Barat">Jawa Barat</option>
        </select>
        <input type="submit" />
        <div id="message-info"></div>
    </form>
`;

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.navbar ul li a').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
    document.querySelector('.highlight-item').classList.toggle('dark-mode');
    document.querySelector('.feature-item').classList.toggle('dark-mode');
    document.querySelector('p').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.contact-info').classList.toggle('dark-mode');
    document.querySelector('.about-section').classList.toggle('dark-mode');
    document.querySelectorAll('input[type="text"], textarea[type="pesan"], .message-box, select[id="provinsi"]').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });

    document.querySelector('input[type="submit"]').classList.toggle('dark-mode');
    document.getElementById('message-info').classList.toggle('dark-mode');
});

describe("Dark Mode Toggle", () => {
    test("should toggle dark mode classes when clicked", () => {
        const toggleButton = document.getElementById('dark-mode-toggle');

        // Initially, dark mode should not be enabled
        expect(document.body.classList.contains('dark-mode')).toBe(false);

        // Simulate a click on the dark mode toggle button
        toggleButton.dispatchEvent(new Event('click'));

        // After the click, dark mode should be enabled
        expect(document.body.classList.contains('dark-mode')).toBe(true);

        // Simulate another click to turn dark mode off
        toggleButton.dispatchEvent(new Event('click'));

        // Dark mode should now be disabled
        expect(document.body.classList.contains('dark-mode')).toBe(false);
    });
});
