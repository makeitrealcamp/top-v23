import { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleChange = (evt) => {
    setFile(evt.target.files[0]);
  };

  const handleUploadFile = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('filename', file.name);

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch('http://localhost:8080/api/upload/file', payload);
      const data = await response.json();
      console.log(data);
      setImg(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="../img/logo.png" alt="Logo" />
          <h1>Upload</h1>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            accept="image/*"
          />
          <button type="button" onClick={handleUploadFile}>
            Subir la imagen pues
          </button>

          <img src={img} alt="" />
        </div>
      </main>
    </div>
  );
};

export default UploadPage;
