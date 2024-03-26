const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
  Promise.all(images.map(imageObj => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageObj.url}`));
      img.src = imageObj.url;
    });
  }))
  .then(images => {
    output.innerHTML = "";
    images.forEach(img => {
      output.appendChild(img);
    });
  })
  .catch(error => {
    console.error(error);
  });
});
