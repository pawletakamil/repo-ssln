function processImgs(content,path){return processSVGs(content,path);}
function processSVGs(content,path){const rgxSvgExt=/\.svg$/;const rgxSvgId=/.*[\\\/](.*[\\\/].*)\.svg$/;if(rgxSvgExt.test(path)&&!/flags/.test(path)){let contentStr=content.toString();const match=rgxSvgId.exec(path);if(match&&match[1]){const svgID=match[1].replace('\\','-').replace('\/','-');contentStr=contentStr.replace('<svg',`<svg id="${svgID}"`);return contentStr;}}
return content;}
module.exports=processImgs;