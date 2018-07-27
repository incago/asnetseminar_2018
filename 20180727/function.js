// ⌘D : Quick Add Next
// ⌘K, ⌘D : Quick Skip Next
// ⌘U : Soft Undo

function createThumbnail(comic) {
  var img = document.createElement("img");
  var url = "http://cdn.lezhin.com/comic";
  img.src = url + comic.comicId;
  document.body.appendChild(img);
}
