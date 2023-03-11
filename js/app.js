const audio = (() => {
    let instance;

    let getInstance = function () {
        if (!instance) {
            let url = document.getElementById('btn-music').getAttribute('data-url').toString();
            instance = new Audio(url);
        }

        return instance;
    };

    return {
        play: function () {
            getInstance().play();
        },
        pause: function () {
            getInstance().pause();
        }
    };
})();

let eventTime = '2023-04-29 11:00:00'

const timer = () => {
    let countDownDate = new Date(eventTime).getTime();
    let time = null;

    time = setInterval(() => {
        let distance = countDownDate - (new Date().getTime());

        if (distance < 0) {
            clearInterval(time);
            return false;
        }

        document.getElementById('hari').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('jam').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('menit').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('detik').innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
};

const buka = async () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('btn-music').style.display = 'block';
    AOS.init();
    timer();
    audio.play();
};

const play = (btn) => {
    let isPlay = btn.getAttribute('data-status').toString() == 'true';

    if (!isPlay) {
        btn.setAttribute('data-status', 'true');
        audio.play();
        btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    } else {
        btn.setAttribute('data-status', 'false');
        audio.pause();
        btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    }
};


document.addEventListener('DOMContentLoaded', () => {
    let modal = new bootstrap.Modal('#exampleModal');
    let timeOption = (new URLSearchParams(window.location.search)).get('t') ?? '';

    if (timeOption == 'j') {
        eventTime = '2023-04-28 13:30:00';
        document.getElementById('txt-date-title').innerText = 'Jumat, 28 April 2023';
        document.getElementById('txt-event-name').innerText = 'Akad Nikah';
        document.getElementById('txt-event-date').innerText = 'Jumat, 28 April 2023';
        document.getElementById('txt-event-time').innerText = '13.30 WIB - selesai';
        document.getElementById('btn-map').setAttribute("href", "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad%20Nikah%20Zulfi%20dan%20Thoriq&details=Akad%20Nikah%20Zulfi%20dan%20Thoriq%20%0AKoripan%20RT%2002%20RW%2018%2C%20Sindumartani%2C%20Ngemplak%2C%20Sleman%0A13.30%20WIB%20-%20selesai&dates=20230428T133000/20230428T150000&location=https://goo.gl/maps/M2c73YZTjZhzJd5g7");
    } else if (timeOption == 's9') {
        eventTime = '2023-04-29 09:00:00';
        document.getElementById('txt-event-time').innerText = '09.00 - 10.00 WIB';
        document.getElementById('btn-map').setAttribute("href", "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi%20Pernikahan%20Zulfi%20dan%20Thoriq&details=Resepsi%20Pernikahan%20Zulfi%20dan%20Thoriq%20%0AKoripan%20RT%2002%20RW%2018%2C%20Sindumartani%2C%20Ngemplak%2C%20Sleman%0A09.00%20-%2010.00%20WIB&dates=20230429T090000/20230429T100000&location=https://goo.gl/maps/M2c73YZTjZhzJd5g7");
    } else if (timeOption == 's10') {
        eventTime = '2023-04-29 10:00:00';
        document.getElementById('txt-event-time').innerText = '10.00 - 11.00 WIB';
        document.getElementById('btn-map').setAttribute("href", "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi%20Pernikahan%20Zulfi%20dan%20Thoriq&details=Resepsi%20Pernikahan%20Zulfi%20dan%20Thoriq%20%0AKoripan%20RT%2002%20RW%2018%2C%20Sindumartani%2C%20Ngemplak%2C%20Sleman%0A10.00%20-%2011.00%20WIB&dates=20230429T100000/20230429T110000&location=https://goo.gl/maps/M2c73YZTjZhzJd5g7");
    }

    modal.show();
});
