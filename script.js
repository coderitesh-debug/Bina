document.addEventListener("DOMContentLoaded", function () {
    // Handle main dropdown menus
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector('.dropdown-toggle'); // Find the dropdown toggle button

        // Separate click handler for the dropdown toggle button
        if (toggle) {
            toggle.addEventListener('click', function (event) {
                event.stopPropagation(); // Stop event from bubbling up

                const dropdownContent = dropdown.querySelector('.dropdown-content');

                // Close all other dropdowns
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    if (content !== dropdownContent) {
                        content.style.display = 'none';
                    }
                });

                // Toggle the clicked dropdown
                dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
            });
        }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    });

    // Prevent dropdown content from closing when clicking inside it
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    // Handle nested dropdown menus
    var nestedDropdowns = document.querySelectorAll('.nested-dropdown');

    nestedDropdowns.forEach(function (nestedDropdown) {
        nestedDropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // Stop event from bubbling up

            const nestedDropdownContent = this.querySelector('.nested-dropdown-content');

            // Close all other nested dropdowns
            document.querySelectorAll('.nested-dropdown-content').forEach(content => {
                if (content !== nestedDropdownContent) {
                    content.style.display = 'none';
                }
            });

            // Toggle the current nested dropdown
            nestedDropdownContent.style.display = (nestedDropdownContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Close nested dropdowns if clicked outside
    document.addEventListener('click', function () {
        document.querySelectorAll('.nested-dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    });
});
