const images = [
    { url: 'https://i.pinimg.com/736x/0d/38/f4/0d38f41b5627a87a816d1a17f84e625c.jpg' },
    { url: 'https://i.pinimg.com/564x/ce/fe/58/cefe589308c6c1ad0368236fb75004dc.jpg' },
    { url: 'https://i.pinimg.com/564x/ce/a1/05/cea1058603cc256d62f29a756165e78e.jpg' },
    { url: 'https://i.pinimg.com/564x/7f/89/ae/7f89ae0a920d866303089dbe2e4b16cf.jpg' },
    { url: 'https://i.pinimg.com/736x/f9/d6/62/f9d66208c91e29b1b0624ae6727901da.jpg' },
    { url: 'https://i.pinimg.com/736x/19/d3/d5/19d3d55b55c4f6b88bf60e9ff764afeb.jpg' },
    { url: 'https://i.pinimg.com/736x/e0/fd/94/e0fd9408966477cf4209f49fe12fede9.jpg' }
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex].url;
}

// Throttle function to limit the rate of function calls
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};


document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {

        var div = document.createElement("div");
        div.classList.add("imagediv");
        // div.style.position = 'absolute';
        div.style.left = dets.clientX + 'px';
        div.style.top = dets.clientY + 'px';

        var img = document.createElement("img");
        img.src = getRandomImage();
        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        })

        gsap.to(img, {
            y: "100%",
            ease: Power2,
            delay: .6
        })



        setTimeout(function () {
            div.remove();
        }, 1000);

    }, 500)
);
