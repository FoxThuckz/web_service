$("#fileRequest").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = '_download/tcc.pdf';
});


function mudaFoto(foto)
    {
    document.getElementById("icone").src = foto;
    }


