$(function () {
    // Fetch the JSON data asynchronously
    $.getJSON("../data/games.json", function (games) {
        console.log("JSON Data:", games); // Check if JSON data is loaded correctly

        // Iterate over the JSON array
        $.each(games, function (index, item) {
            console.log("Item:", item); // Check each item in the iteration

            // Iterate over the array of objects within the item array
            $.each(item, function (innerIndex, innerItem) {
                // Create HTML elements for each JSON object
                const el = `<div class="card text-center mx-auto bg-dark text-blue" style="width: 18rem;">
                    <button class="cardOpen2 btn btn-outline-info">Games: ${innerItem.title}</button>
                    <div class="cardHide">
                        <br>
                        <a href="${innerItem.link1}" target="_blank" class="link-info btn btn-primary">GAME LINK1</a>
                        <a href="${innerItem.link2}" target="_blank" class="link-info btn btn-primary">GAME LINK2</a>
                        <p class="text-white">Created by: ${innerItem.author}</p>
                        <br>
                    </div>
                </div>`;

                console.log("Generated HTML:", el); // Check generated HTML

                // Append the HTML element to the container
                $("#firstCard").append(el);

                // Append the author to the navigation dropdown
                $(".nav-dropdown").append(
                    $(`<li><a href="#!" class="dropdown-item">${innerItem.author}</a></li>`)
                );
            });
        });
    });
});
