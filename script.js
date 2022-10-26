const scenesImages = [
    {
        id: 1,
        src: "/images/scene_four.png"
    },
    {
        id: 2,
        src: "/images/scene_seven.jpg"
    },
    {
        id: 3,
        src: "/images/scene_ten.jpg"
    },
    {
        id: 4,
        src: "/images/scene_two.png"
    },
    {
        id: 5,
        src: "/images/six.png"
    },
    {
        id: 6,
        src: "/images/eight.png"
    },
]

const loader = document.querySelector(".loader");
const sceneImg = document.querySelector(".scene-img");
const generateBtn = document.querySelector(".generate-btn");

const scenesGenerator = () => {
    loader.hidden = false
    sceneImg.hidden = true

    setTimeout(() => {
        loader.hidden = true
        sceneImg.hidden = false
        let randomNum = Math.floor(Math.random() * scenesImages.length);
        sceneImg.src = scenesImages[randomNum].src;
    }, 2500);
}

generateBtn.addEventListener("click", scenesGenerator);