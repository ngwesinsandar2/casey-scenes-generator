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

const sceneImg = document.querySelector(".scene-img");
const generateBtn = document.querySelector(".generate-btn");

const scenesGenerator = () => {
    let randomNum = Math.floor(Math.random() * scenesImages.length)
    sceneImg.src = scenesImages[randomNum].src
}

generateBtn.addEventListener("click", scenesGenerator)