fetch('http://localhost:2004/workers')
  .then(response => response.json())
  .then(data => {
    const workerList = document.getElementById('workerList');
    data.forEach(worker => {
      const item = document.createElement('li');
      item.textContent = `${worker.name} - ${worker.experience} (${worker.address})`;
      workerList.appendChild(item);
    });
  });
