var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
print(text.replace(/(^|\W)'|'(\W|$)/g, '$1\"$2'));
// → "I'm the cook," he said, "it's my job."