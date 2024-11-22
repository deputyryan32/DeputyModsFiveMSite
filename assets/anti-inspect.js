// Prevent basic inspect element shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert('Inspect element is disabled.');
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled.');
});
