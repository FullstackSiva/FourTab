$(document).ready(function () {
  let tabImages = {
    1: { active: "images/tab1-active.png", inactive: "images/tab1-inactive.png" },
    2: { active: "images/tab2-active.png", inactive: "images/tab2-inactive.png" },
    3: { active: "images/tab3-active.png", inactive: "images/tab3-inactive.png" },
    4: { active: "images/tab4-active.png", inactive: "images/tab4-inactive.png" }
  };

  $(".tab").click(function () {
    let selectedTab = $(this).data("tab");

    // Reset all images
    $(".tab").each(function () {
      let tab = $(this).data("tab");
      $(this).find("img").attr("src", tabImages[tab].inactive);
    });

    // Activate clicked tab
    $(this).find("img").attr("src", tabImages[selectedTab].active);

    // Show content
    $(".tab-content-container").fadeIn();
    $(".tab-content").hide();
    $("#content-" + selectedTab).fadeIn();
  });

  $(".close-btn").click(function () {
    $(".tab-content-container").fadeOut();
    $(".tab img").each(function () {
      let tab = $(this).closest(".tab").data("tab");
      $(this).attr("src", tabImages[tab].inactive);
    });
  });
});