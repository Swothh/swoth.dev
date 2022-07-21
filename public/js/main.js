window.onscroll = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        $('#toUp')
            .removeClass('hidden')
            .addClass('block');
    } else {
        $('#toUp')
            .removeClass('block')
            .addClass('hidden');
    };
};
