document.getElementById('scrollButton').addEventListener('click', function() {
    document.querySelector('section:nth-of-type(2)').scrollIntoView({
        behavior: 'smooth'
    });
});