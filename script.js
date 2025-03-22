// Descarga el CV cuando se haga clic en el botón
document.getElementById('download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'cv.pdf'; // Cambia 'cv.pdf' por el nombre de tu archivo
    link.download = 'Curriculum_Analista_de_Datos.pdf';
    link.click();
});