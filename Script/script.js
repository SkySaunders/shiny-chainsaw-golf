$(function () {
    const games = [
        {
            title: "improved-octo-chainsaw-charlie, verbose-guacamole-delta ",
            link: "https://devan4264.github.io/improved-octo-chainsaw-charlie/",
            link2: "https://devan4264.github.io/verbose-guacamole-delta/",
            author: "devan4264",
        },
        {
            title: "legendary-goggles-charlie, delta-jubilant-doodle",
            link: "https://mackenzie24t.github.io/legendary-goggles-charlie/",
            link2: "https://mackenzie24t.github.io/delta-jubilant-doodle/",
            author: "mackenzie24t",
        },
        {
            title: "crispy-charlie, decatur-delta",
            link: "https://johnallenb.github.io/crispy-charlie-lab03-blaxton/",
            link2: "https://johnallenb.github.io/decatur-delta-lab04-blaxton/",
            author: "JohnAllenB",
        },
        {
            title: "turbo-pancake-charlie, fluffy-pancake-charlie",
            link: "https://jacob-vance.github.io/turbo-pancake-charlie/",
            link2: "https://jacob-vance.github.io/fluffy-pancake-delta/",
            author: "Jacob-Vance",
        },
        {
            title: "delta-jubilant-octo-winner, fictional-broccoli-charlie",
            link: "https://jaydengreen23.github.io/delta-jubilant-octo-winner/",
            link2: "https://jaydengreen23.github.io/fictional-broccoli-charlie/",
            author: "Jayden Green",
        },
        {
            title: "Hot or Cold, Name Game",
            link: "https://smaldonado1326.github.io/cuddly-invention--charlie/",
            link2: "https://smaldonado1326.github.io/glowing-adventure-delta/",
            author: "Sam Maldonado",
        },
        {
            title: "Charlie Meme, Delta Names",
            link: "https://nrobinson4.github.io/bug-free-potato-charlie/",
            link2: "https://nrobinson4.github.io/cool-animal-delta/",
            author: "Nolen Robinson",
        },
        {
            title: "Llama Game, Doge Game",
            link: "https://michaelhaydenduran.github.io/chica-bonita-delta/",
            link2: "https://michaelhaydenduran.github.io/silly-dino-charlie/",
            author: "Michael Hayden Duran",
        },
        {
            title: "charlie-project-alex, delta-project-alex",
            link: "https://pglenn1.github.io/charlie-project-alex/",
            link2: "https://pglenn1.github.io/delta-project-alex/",
            author: "Alex Glenn",
        },
        {
            title: "BravoSuMuchWow, Animal Name Game",
            link: "https://hkevin555.github.io/lab-charlie/",
            link2: "https://hkevin555.github.io/DeltaLab/",
            author: "Kevin Hernandez",
        },
        {
            title: "Delta Lab Spirit Animal",
            link: "https://marvin-2056.github.io/Delta-CIS-367/",
            link2: "#",
            author: "Marvin De La Cruz",
        },
        {
            title: "nesia-charlie-lab, currentDeltaLab",
            link: "https://nesiagoodloe.github.io/nesia-charlie-lab/",
            link2: "https://nesiagoodloe.github.io/currentDeltaLab/",
            author: "Rodnesia Goodloe",
        },
        {
            title: "Charlie, Delta",
            link: "https://cm1803.github.io/charlie/",
            link2: "https://cm1803.github.io/delta/",
            author: "Claire Mitchell",
        },
        {
            title: "Hopping Zone Charlie, Spirit Animal Delta",
            link: "https://mmandelyn.github.io/silver-seal-charlie/",
            link2: "https://mmandelyn.github.io/pink-panda-delta/",
            author: "Mandy McGinnis",
        },
        {
            title: "super-adventure-charlie, animated-sniffle-foxtrot",
            link: "https://skysaunders.github.io/animated-sniffle-foxtrot/",
            link2: "https://skysaunders.github.io/super-adventure-charlie/",
            author: "Skyler Saunders",
        },
        {
            title: "Glowing Meme Foxtrot, Glowing Gigle Echo Lab",
            link: "https://cbuf0rd.github.io/glowing-meme-foxtrot/",
            link2: "https://cbuf0rd.github.io/glowing-giggle-echo-lab/",
            author: "Candice Buford",
        },
        {
            title: "charlie, delta",
            link: "https://hrantgartley.github.io/didactic-waffle-delta/",
            link2: "https://hrantgartley.github.io/jubilant-bassoon-echo/",
            author: "Grant Hartley",
        },
        {
            title: "probable-charlie, turbo-delta",
            link: "https://quantumcoder-242.github.io/probable-charlie/",
            link2: "https://quantumcoder-242.github.io/turbo-delta/",
            author: "Navraj_Singh",
        },
        {
            title: "psychic-delta, charlie-lab",
            link: "https://akashdeepsingh0047.github.io/psychic-delta/",
            link2: "https://akashdeepsingh0047.github.io/Chrlie-lab-By-Akashdeep/",
            author: "AkashdeepSingh0047",
        },
    ]
    // iterate over the JSON array
    $.each(games, function (index, item) {
        console.log("Game Title: " + item.title)
        console.log("Game URL1: " + item.link)
        console.log("Game URL1: " + item.link2)
        console.log("Game Author: " + item.author)

        // create a brand new HTML element JUST with code

        var el = `<div class='card text-center mx-auto bg-dark blue' > \
      <button class='cardOpen2 btn btn-outline-info'>Games: ${item.title} </button> \
       <div class='cardHide'> \
           <br> \
           <a href="${item.link}" target="_blank" class="link-info" >GAME LINK1</a> \
           <a href="${item.link2}" target="_blank" class="link-info" >GAME LINK2</a> \
           <p class="text-white">Created by: ${item.author} </p> \
           <br> \
       </div>
     </div>`

        console.log(el)

        $("#firstCard").append(el)

        $(".nav-dropdown").append(
            $(`<li><a href="#!"> ${item.author} </a></li>`),
        )
    })
})
