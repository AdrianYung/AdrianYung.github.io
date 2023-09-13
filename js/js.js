
    function showSizes(productName) {
        const sizesDiv = document.getElementById(`sizes-${productName}`);
        if (sizesDiv.style.display === 'none' || sizesDiv.style.display === '') {
            sizesDiv.style.display = 'block';
        } else {
            sizesDiv.style.display = 'none';
        }
    }

