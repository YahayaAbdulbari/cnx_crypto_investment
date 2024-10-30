// get all necessary containers
let frame = document.querySelector('.frame');
let text = document.querySelector('.text');
let bnts = document.querySelectorAll('.fa-regular');
let frame_image = document.querySelectorAll('.frame-image');
let infos = document.querySelectorAll('.info');

infos.forEach(info => {
    info.classList.remove('slide');
});

// set an event listener to each btn
bnts.forEach(btn => {
    let frame_counter = 0;
    btn.addEventListener('click', () =>{

        // create an intersection observer
        const observer = new IntersectionObserver( entries =>{
            entries.forEach(entry =>{
                entry.target.classList.toggle('slide', entry.isIntersecting);
            });
        });

         infos.forEach(info => {
            observer.observe(info);
        });

        if(btn == bnts[0]){

            frame_counter =0;
            frame.style.transform = `translateX(-${frame_counter}vw)`;
            text.style.transform = `translateX(-${frame_counter}vw)`;

        }

        if(btn == bnts [1]){

            frame_counter = 100;
            frame.style.transform = `translateX(-${frame_counter}vw)`;
            text.style.transform = `translateX(-${frame_counter}vw)`;

        }

        if(btn == bnts [2]){

            frame_counter = 200;
            frame.style.transform = `translateX(-${frame_counter}vw)`;
            text.style.transform = `translateX(-${frame_counter}vw)`;

        }
        
    });
});