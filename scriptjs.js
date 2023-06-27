
    const slider = document.getElementsByClassName(".slider");
    
    
    const nextbtn = document.getElementsByClassName(".next-btn");
    const prevbtn = document.getElementsByClassName(".prev-btn");
    const slides = document.getElementsByClassName(".slide");
    const numberofslides = slides.length;
    var slidenumber = 0;
    


        //image slider next button//
nextbtn.addeventlistener("click", changes) {
    function changes{
        slides.foreach((slide) => {
            slide.classlist.remove("active");
        })

        slidenumber++;

        if (slidenumber > (numberofslides - 1)) {
            slidenumber = 0;
        }

        slides[slidenumber].classlist.add("active");
    };
}     
        //image slider previous button
        prevbtn.addeventlistener("click", () => {
        slides.foreach((slide) => {
            slide.classlist.remove("active");
        })

            slidenumber--;

    if (slidenumber < 0) {
        slidenumber = numberofslides - 1;
            }

    slides[slidenumber].classlist.add("active");
        });

    var playslider;
        var repeater = () => {
        playslider = setinterval(function () {

            slides.foreach((slide) => {
                slide.classlist.remove("active");
            });

            slidenumber++;

            if (slidenumber > (numberofslides - 1)) {
                slidenumber = 0;
            }

            slides[slidenumber].classlist.add("active");
        }, 1000);


        }
    repeater();


        //stop the image slider autoplay on mouseover
        slider.addeventlistener("mouseover", () => {
        clearinterval(playslider);
        });
        //start the image slider autoplay again mouseout
        slider.addeventlistener("mouseover", () => {
        repeater();
        });

        
