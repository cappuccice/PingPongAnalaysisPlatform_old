function nextBall(){

}

function nextService(){

}

function movieChange(){
  //inputフィールドのテキスト内容を文字列として取得
  var str = document.getElementById("url").value

  //下の関数が起動
  //str ->上の文字列(埋め込みリンク)
  //"\"" ->"で文字列を分割する
  var youtube_url = splitString(str,"\"");

  console.log(youtube_url);

  //埋め込みリンクをidがmovieのsrc(ソース)に適応
  document.getElementById("movie").src = youtube_url;
}

//渡された文字列を分割する関数
function splitString (stringToSplit,separator) {
  //splitを使うと、指定した文字で分割できる
  //今回の場合は"
  var arrayOfStrings = stringToSplit.split(separator);

  //分割した文字列は配列に入る
  //それを表示している
  for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log(i + arrayOfStrings[i]);;
  }
  //分割した文字列の配列5番目にurlが入っているのでリターン
  return arrayOfStrings[5];
}
