var speed = document.querySelector('.speed');
        var bar = speed.querySelector('.speed-bar');
        var video = document.querySelector('.flex');

        speed.addEventListener('mousemove', function(e) {
            var y = e.pageY - this.offsetTop;
            var percent = (y / this.offsetHeight);
            var min = 0.5;
            var max = 4;
            var height = Math.round(percent * 100) + '%';
            var playbackRate = percent * (max - min) + min;
            bar.textContent = playbackRate.toFixed(1) + 'X';
            bar.style.height = height;
            video.playbackRate = playbackRate;
            console.log(percent);
        });