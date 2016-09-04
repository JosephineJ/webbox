function byTagName(node, tagName){
  var els = [];
  function countTags(node, tagName){
    if (node.nodeType == document.ELEMENT_NODE){
      if (node.tagName == tagName.toUpperCase()){
        els.push(node);
      }
      for (var i = 0; i < node.childNodes.length; i += 1){
        countTags(node.childNodes[i], tagName);
      }
    }
  }

  countTags(node, tagName);
  return els;
}