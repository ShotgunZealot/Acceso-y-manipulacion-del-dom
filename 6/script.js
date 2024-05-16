document.addEventListener('DOMContentLoaded', function () {
    const countDisplay = document.getElementById('count');
    let count = 0;

    function updateCounter() {
        countDisplay.textContent = count;
    }

    function increaseCount() {
        count++;
        updateCounter();
    }

    function decreaseCount() {
        count--;
        updateCounter();
    }

    function resetCount() {
        count = 0;
        updateCounter();
    }

    document.getElementById('increase').addEventListener('click', increaseCount);
    document.getElementById('decrease').addEventListener('click', decreaseCount);
    document.getElementById('reset').addEventListener('click', resetCount);

    updateCounter();
});