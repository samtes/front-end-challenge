
function Domobj () {
  var self = this;
  self.products = [];

  self.getproducts = function (url, cb) {
    $.getJSON(url, function (response) {
      var counter = response.sales.length;

      for(i = 0; i < response.sales.length; i++) {
        self.products.push(new Productobj(response.sales[i], i));
      }
      cb();
    });
  }

  self.updateproducthtml = function () {
    var counter = self.products.length;

    for(i = 0; i < self.products.length; i++) {
      self.products[i].updatehtml();
    }
    setTimeout(function () {
      self.updatedom();
    }, 5000)
  }

  self.updatedom = function () {
    var thishtml = "";

    $("#content").empty();

    for (i = 0; i < self.products.length; i++) {
      if (i % 3 == 0) {
        thishtml += "<div class='row'>";
      }

      thishtml += self.products[i].htmlview;

      if ((i % 3 == 2) || i == (self.products.length -1) ) {
        thishtml += "</div>";
        $("#content").append(thishtml);
        thishtml = "";
      }
    }
  }
}

function Productobj (product, i) {
  var self = this;
  self.photo = product.photos.medium_half;
  self.title = product.name;
  self.tagline = product.tagline;
  self.description = product.description;
  self.url = product.url;
  self.htmlview = "";
  self.index = i;
  self.custom_class = "col" + ((i % 3) + 1);

  self.updatehtml = function () {
    $.get("product-template.html", function (template) {
      self.htmlview = template.replace("{image}", self.photo)
      .replace("{title}", self.title)
      .replace("{description}", self.description)
      .replace("{tagline}", self.tagline)
      .replace("{url}", self.url)
      .replace("{custom_class}", self.custom_class);
    });
  }
}

var page = new Domobj();
page.getproducts("data.json", function () {
  page.updateproducthtml();
})

// ==== Modification on this file ====
// Fixed code by folowwing jshint style guide
// Capitalizes class name domobj => Domobj
// Capitalizes class name productobj => Productobj
// made page.getproducts asynch function with a callback
// which ten calls page.updateproducthtml() after the callback
// page.updateproducthtml() calls page.updatedom()
// page.updatedom() appends content every row instead of appending everything at once
