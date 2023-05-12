/**
 * Download data using the browser
 * Usage: Download(JSON.stringify(data), 'data.json', 'text/json'); 
 */
export const Download = (content, fileName, contentType) => {
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}