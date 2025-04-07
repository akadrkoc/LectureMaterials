document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('food-type').addEventListener('change', function () {
        const curseStrength = document.getElementById('curse-strength-container');
        const spicyRadioButton = document.getElementById('curse-removal');
        if (spicyRadioButton.checked) {
            curseStrength.classList.remove("hidden");
        } else {
            curseStrength.classList.add("hidden");
        }
    });


    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        event.target.reset();

        document.getElementById('curse-strength-container').classList.add("hidden");
    });
});
