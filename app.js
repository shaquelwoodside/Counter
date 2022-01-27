let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        // currentTarget gets the element whose event listeners triggered a specific event:
        // classList returns classes of that specific element

        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;


    });
});