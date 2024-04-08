document.addEventListener("submit", async function fetchComicData() {
  const comic = document.getElementById("comic")
  const comicValue = comic.value
  console.log(comicValue)

  const requestUrl = `https://xkcd.com/${comicValue}/info.0.json`

  const data = await fetch(requestUrl)
    .then(response => response.json())
  const imgUrl = data.img
  const title = data.title

  const comicTitleEl = document.getElementById("comicTitle")
  comicTitleEl.innerText = title
  const comicImageEl = document.getElementsByTagName("img")[0]
  comicImageEl.src = imgUrl

})