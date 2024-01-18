$(document).ready(function() {
    $('.click').on('click', count);

    let age = parseInt($('.age').text());
    let age2 = parseInt($('.age2').text());
    let age3 = parseInt($('.age3').text());

    function count() {
        age += 1;
        age2 += 1;
        age3 += 1;
        $('.age').text(age);
        $('.age2').text(age2);
        $('.age3').text(age3);
    }
});