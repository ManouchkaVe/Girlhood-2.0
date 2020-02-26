function changePoem(origin_page) {
    pages = [
        'poem-01.html',
        'poem-02.html',
        'poem-03.html',
        'poem-04.html',
        'poem-05.html',
        'poem-06.html',
        'poem-07.html',
        'poem-08.html',
        'poem-09.html',
        'poem-10.html',
        'poem-11.html',
        'poem-12.html',
        'poem-13.html',
        'poem-14.html',
        'poem-15.html',
        'poem-16.html',
        'poem-17.html',
        'poem-18.html',
        'poem-19.html',
        'poem-20.html',
    ]

    page_nb = Math.floor((Math.random() * 20) + 1);

    page_nb = page_nb == origin_page ? page_nb + 1 : page_nb;

    document.location.href = pages[page_nb%20];
}