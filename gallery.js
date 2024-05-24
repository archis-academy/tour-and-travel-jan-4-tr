document.getElementById('galleryLink').addEventListener('click', function() {
    showSection('gallery');
 });
    document.getElementById('default-open').addEventListener('click', function() {
        showSection('information');
});

function showSection(sectionId) {
       
    document.getElementById('gallery').classList.add('hidden');
    document.getElementById('information').classList.add('hidden'); 
    document.getElementById(sectionId).classList.remove('hidden');
}


