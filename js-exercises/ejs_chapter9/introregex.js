var notMyFavoriteNums = /[^15abac]/;
print("Test 51151515115151: " + notMyFavoriteNums.test("51151515115151"));
print("Test 511515151151519: " + notMyFavoriteNums.test("511515151151519"));
print("Test d* on 123: " + /\d*/.test("123"));
print("Test d* on : " + /\d*/.test(""));
print("Test d* on abc12dasd: " + /\d*/.test("abc12dasd"));