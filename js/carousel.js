let carouselArr = [];

class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                
                Carousel.Render();

                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Render() {
        const carouselDiv = document.getElementById("carousel")
        const titleDiv = document.getElementById("carousel-title");

        const currentSlide = Carousel._arr[Carousel._sequence];

        carouselDiv.innerHTML = `
            <a href="${currentSlide.link}">
                <img src="img/${currentSlide.image}" alt="${currentSlide.title}" style="width: 100%; height: auto; max-width: 1500px;">
            </a>
        `;

        titleDiv.innerHTML = `<p>${currentSlide.title}</p>`;
    }

    static Next(){
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Render();
    }

    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Render();
    }

    static ResetTimer() {
        clearInterval(Carousel._interval);

        Carousel._interval = setInterval(function() {
            Carousel.Next();
        }, 5000);
    }
};

function changeSlideManually(direction) {
    if (direction === 1) {
        Carousel.Next();
    } else if (direction === -1) {
        Carousel.Prev();
    }
    Carousel.ResetTimer();
}