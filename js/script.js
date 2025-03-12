document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`تم اختيار: ${button.innerText}`);
    });
});