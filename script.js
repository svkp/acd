$(window).on('load',function(){
        n = Math.floor(Math.random() * 5) + 1;
        console.log(n);
        n_dict = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
        }
        $('#modal-container').removeAttr('class').addClass(n_dict[n]);
        $('body').addClass('modal-active');
    });
