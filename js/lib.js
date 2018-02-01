function setAnswerOnClick() {
    $('a.toggle_answer').map(
        function() {
            let anchor = this;
            let spanQuery = 'span#' + this.id + 'a';
            let span = $(spanQuery);
            this.innerHTML = '(Show answer)';
            span.hide()

            $('#' + this.id).click(
                function() { 
                    if (this.innerHTML == '(Show answer)') {
                        span.show();
                        this.innerHTML = '(Hide answer)';
                    } else {
                        span.hide();
                        this.innerHTML =  '(Show answer)';
                    }
                } 
            );
        }
    );
}

$(document).ready(
    setAnswerOnClick
);
