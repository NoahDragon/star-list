async function getJsonByURL(url){
    return await fetch(url).json();     
}

function getJsonByTextFile(file)
{
    if (file) {
        var reader = new FileReader();
        return reader.readAsText(file);
    }
}

export default {getJsonByURL, getJsonByTextFile}