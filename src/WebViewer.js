// src/WebViewer.js
import React from 'react';

const WebViewer = () => {
  return (
    <div>
      <iframe 
        src="/ciudadfutura.html" 
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Web Viewer"
      />
    </div>
  );
};

export default WebViewer; // Asegúrate de exportar el componente correctamente
