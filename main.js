(function () {
  $(document).ready(initialize);

  function initialize () {
    $("#content").on("click", ".close", removeProduct);
    $("#content").on("mouseenter", ".product-container .description", showOverlay)
    .on("mouseleave", ".product-container .description", hideOverlay);
  }

  function removeProduct () {
    console.log("removing ...");
    $(this).parent(".product-container").hide();
  }

  function showOverlay () {
    console.log("displaying overlay ....");
    $(this).find(".overlay").fadeIn();
  }

  function hideOverlay () {
    console.log("hiding overlay ....");
    $(this).find(".overlay").fadeOut();
  }

})();
