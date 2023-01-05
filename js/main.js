$(document).ready(function() {
    $.get("https://api.sen.cat/api/fortune")
        .done(function(json_data) {
            $("#fortune-text").text(json_data.fortune);
        }).fail(function() {
            $("#fortune-card").hide();
        });
    fetch("https://radio.sen.cat").then(function(response) {
        console.log(response.status);
        if (response.status != 200) {
            $("#radio-pill").removeClass("bg-success").addClass("bg-danger").text("offline");
        }
    });
    fetch("https://api.sen.cat/api/fortune").then(function(response) {
        console.log(response.status);
        if (response.status != 200) {
            $("#api-pill").removeClass("bg-success").addClass("bg-danger").text("offline");
        }
    });
    fetch("https://archive.sen.cat").then(function(response) {
        console.log(response.status);
        if (response.status != 200) {
            $("#archive-pill").removeClass("bg-success").addClass("bg-danger").text("offline");
        }
    });
    fetch("https://box.sen.cat").then(function(response) {
        console.log(response.status);
        if (response.status != 200) {
            $("#filehost-pill").removeClass("bg-success").addClass("bg-danger").text("offline");
        }
    });
});