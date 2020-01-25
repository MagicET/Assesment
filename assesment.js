const userNameInput = document.getElementById("userName");
const assesmentButton = document.getElementById("assesment");
const resultDivited = document.getElementById("resultArea");
const tweetDivited = document.getElementById("tweetArea");

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

assesmentButton.onclick = function() {
    const userName = userNameInput.value;
    if(userName.length === 0) {
        return;
    }

    removeAllChildren(resultDivited);
    removeAllChildren(tweetDivited);

    const header = document.createElement("h3");
    header.innerText = "診断結果";
    resultDivited.appendChild(header);
    const paragraph = document.createElement("p");
    const result = assesment(userName);
    paragraph.innerText = result;
    resultDivited.appendChild(paragraph);
    const anchor = document.createElement("a");
    const hrefValue = "https://twitter.com/intent/tweet?button_hashtag="
        + encodeURIComponent("あなたの良いところ")
        + "&ref_src=twsrc%5Etfw";
    anchor.setAttribute("href", hrefValue);
    anchor.className = "twitter-hashtag-button";
    anchor.setAttribute("data-text", result);
    anchor.innerText = "Tweet #あなたの良いところ";
    tweetDivited.appendChild(anchor);

    twttr.widgets.load();
};
var answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'   
];
// @param {String} userName
// @return {String}

function assesment(userName) {
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }

    let index = sumOfcharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);

    return result;
}