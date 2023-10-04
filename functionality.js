document.addEventListener("DOMContentLoaded", main);

const subtitle = document.getElementById('randomCarousel');

const textData = [
    {
        "text": "Lorem ipsum dolor sit amet"
    },
    {
        "text": "Vestibulum dignissim tellus eget"
    },
    {
        "text": "Pellentesque ut tortor tristique"
    }
];

function startTextChangeInterval(data) {
    let index = 0;

    setInterval(() => {
        const text = data[index].text;
        subtitle.textContent = text;
        index = (index + 1) % 3;
    }, 2000);
}

function main() {
    startTextChangeInterval(textData);
}