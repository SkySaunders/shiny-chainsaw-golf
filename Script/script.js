$(() => {
    $.ajax({
        url: "https://raw.githubusercontent.com/hrantgartley/376-labs/main/golf/data/games.json",
        type: "GET",
        dataType: "json",
        success: function (games) {
            console.log("JSON Data:", games); // Check if JSON data is loaded correctly

            // Iterate over the JSON array
            $.each(games, function (index, item) {
                console.log("Item:", item); // Check each item in the iteration

                // Iterate over the array of objects within the item array
                $.each(item, function (innerIndex, gameData) {
                    // Create HTML elements for each JSON object
                    const el = `<div class="card text-center mx-auto bg-dark text-blue" style="width: 18rem;">
                      <button class="cardOpen2 btn btn-outline-info">Games: ${gameData.title}</button>
                      <div class="cardHide">
                          <br>
                          <a href="${gameData.link1}" target="_blank" class="link-info btn btn-primary">GAME LINK1</a>
                          <a href="${gameData.link2}" target="_blank" class="link-info btn btn-primary">GAME LINK2</a>
                          <p class="text-white">Created by: ${gameData.author}</p>
                          <br>
                      </div>
                  </div>`;

                    console.log("Generated HTML:", el); // Check generated HTML

                    // Append the HTML element to the container
                    $("#firstCard").append(el);

                    // Append the author to the navigation dropdown
                    $(".nav-dropdown").append(
                        $(
                            `<li><a href="#!" class="dropdown-item">${gameData.author}</a></li>`,
                        ),
                    );
                });
            });
        },
        error: (xhr, status, error) => {
            console.log("An error occurred:", status, error);
        },
    });
});
