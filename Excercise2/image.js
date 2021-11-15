
document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementById("img");
    let filepaths = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let count = 0;
    document.getElementById("prev").addEventListener("click", () => {
        count--;
        if (count < 0)
            count = 4;
        img.src = "img/" + filepaths[count];
    });
    document.getElementById("next").addEventListener("click", () => {
        count++;
        if (count > 4)
            count = 0;
        img.src = "img/" + filepaths[count];
    });
});