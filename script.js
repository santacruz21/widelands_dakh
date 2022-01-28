const videoElement = document.querySelector('.video')
        const videoButton = document.querySelector('.video_btn')

        

        videoButton.addEventListener('click', function () {

            if (videoElement.paused) {
                videoElement.play()
            } else {
                videoElement.pause()
            }

        })