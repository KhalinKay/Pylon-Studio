const cardLinks = document.querySelectorAll('.card');

cardLinks.forEach(link => {
    const titleUrl = link.dataset.titleUrl;

    fetch(titleUrl)
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const titleElement = tempDiv.querySelector('title');

            if (titleElement) {
                const titleText = titleElement.textContent;

                // Create a title element directly
                const titleDiv = document.createElement('div');
                titleDiv.textContent = titleText;
                titleDiv.style.position = 'absolute';
                titleDiv.style.top = '50%';
                titleDiv.style.left = '50%';
                titleDiv.style.transform = 'translate(-50%, -50%)';
                titleDiv.style.color = 'white';
                titleDiv.style.fontSize = '1.5em';
                titleDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                titleDiv.style.padding = '10px';
                titleDiv.style.borderRadius = '5px';
                titleDiv.style.zIndex = '1';
                titleDiv.style.display = 'none'; // Initially hidden

                link.appendChild(titleDiv); // Add title div to card

                link.addEventListener('mouseover', () => {
                    titleDiv.style.display = 'block'; // Show title on hover
                });

                link.addEventListener('mouseout', () => {
                    titleDiv.style.display = 'none'; // Hide title on mouseout
                });
            }
        });
});