document.addEventListener('DOMContentLoaded', () => {
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');

    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');

    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');

    //a----------------------------------------------------------------------------
    a1.addEventListener('change', function() {
        if (a1.checked) {
            a2.checked = false;
            a3.checked = false;
        }
    });
    a2.addEventListener('change', function() {
        if (a2.checked) {
            a1.checked = false;
            a3.checked = false;
        }
    });
    a3.addEventListener('change', function() {
        if (a3.checked) {
            a1.checked = false;
            a2.checked = false;
        }
    });
    //b----------------------------------------------------------------------------
    b1.addEventListener('change', function() {
        if (b1.checked) {
            b2.checked = false;
            b3.checked = false;
        }
    });
    b2.addEventListener('change', function() {
        if (b2.checked) {
            b1.checked = false;
            b3.checked = false;
        }
    });
    b3.addEventListener('change', function() {
        if (b3.checked) {
            b1.checked = false;
            b2.checked = false;
        }
    });
    //c----------------------------------------------------------------------------
    c1.addEventListener('change', function() {
        if (c1.checked) {
            c2.checked = false;
            c3.checked = false;
        }
    });
    c2.addEventListener('change', function() {
        if (c2.checked) {
            c1.checked = false;
            c3.checked = false;
        }
    });
    c3.addEventListener('change', function() {
        if (c3.checked) {
            c1.checked = false;
            c2.checked = false;
        }
    });
});