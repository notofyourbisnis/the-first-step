$(document).ready(function () {
    $("#add product form").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        const fileInput = document.getElementById("image");
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (fileEvent) {
                // Create the Product object with the Base64 URL for the image
                let Product = {
                    name: $("#name").val(),
                    price: $("#price").val(),
                    description: $("#description").val(),
                    stock: $("#stock").val(),
                    imageUrl: fileEvent.target.result // Use Base64 URL from the FileReader
                };

                // Send the Product object to the backend
                $.ajax({
                    type: "POST",
                    url: "/products/addProduct", // Adjust endpoint as needed
                    contentType: "application/json",
                    data: JSON.stringify(Product),
                    success: function () {
                        window.location.href = "login.html"; // Redirect on success
                    },
                    error: function (error) {
                        console.error("Error adding product:", error);
                    }
                });
            };

            reader.readAsDataURL(file); // Convert file to Base64
        } else {
            alert("Please select an image!");
        }
    });
});
