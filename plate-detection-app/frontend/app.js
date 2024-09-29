document.getElementById('uploadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const fileInput = document.getElementById('fileUpload');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  
  const fileType = fileInput.files[0].type.startsWith('image') ? 'image' : 'video';
  const url = `/detect-${fileType}/`;  // Adjust endpoint dynamically

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const resultDiv = document.getElementById('result');
    
    if (fileType === 'image') {
      resultDiv.innerHTML = `<img src="${objectURL}" alt="Processed Image" />`;
    } else {
      resultDiv.innerHTML = `<video controls src="${objectURL}"></video>`;
    }
  } else {
    const errorData = await response.json();
    alert(`Error: ${errorData.error}`);
  }
});
