(function (doc, win) {
  "use strict";

  if (doc.getElementById('links')) {
    blueimp.Gallery(
      doc.getElementById('links').getElementsByTagName('a'),
      {
        container: '#blueimp-gallery-carousel',
        carousel: true
      }
    );
  }

}(document, window));
