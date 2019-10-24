import { Promise } from "core-js";

//async function getJsonByURL(url){
//    return await fetch(url).json();     
//}
function getJsonByURL(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
}

function getJsonByTextFile(file)
{
    if (file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
        
            reader.onload = () => {
              resolve(reader.result);
            };
        
            reader.onerror = reject;
        
            reader.readAsText(file);
          });
    }
}

export default {getJsonByURL, getJsonByTextFile}