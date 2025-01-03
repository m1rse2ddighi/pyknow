document.getElementById('searchButton').addEventListener('click', () => {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // بارگذاری فایل JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const found = data.find(item => item.term === term);
            if (found) {
                resultDiv.innerHTML = `
                    <p><strong>توضیح:</strong> ${found.description}</p>
                    <p><strong>مثال:</strong></p>
                    <pre>${found.example}</pre>
                `;
            } else {
                resultDiv.innerHTML = "<p style='color: red;'>مفهوم وارد شده یافت نشد.</p>";
            }
        })
        .catch(error => {
            console.error('Error loading data:', error);
            resultDiv.innerHTML = "<p style='color: red;'>خطا در بارگذاری داده‌ها.</p>";
        });
});
