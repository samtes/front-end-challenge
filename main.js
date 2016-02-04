(function () {
  $(document).ready(initialize);

  function initialize () {
    $("#content").on("click", ".close", removeProduct);
    $("#content").on("mouseenter", ".product-container .description", showOverlay)
    .on("mouseleave", ".product-container .description", hideOverlay);
  }

  function removeProduct () {
    $(this).parent(".product-container").fadeOut();
  }

  function showOverlay () {
    $(this).find(".overlay").fadeIn();
  }

  function hideOverlay () {
    $(this).find(".overlay").fadeOut();
  }

})();

// ====== comments ======
// Created this file to handle the front-end functionalities
// Hnadles mouseover overlay display
// Handles remove product from display
