// ==UserScript==
// @name           vkbutton
// @description    vkontakte link for artist search on last.fm page
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @include        http://www.lastfm.ru/music/*
// ==/UserScript==


var vkButton = {
    artistName:   "",
    getAppendedTextTitle: function (name) {
                        var result = "";
                        result += " <a href=\"http://vk.com/search?c[q]=";
                        result += name;
                        result += "&c[section]=audio\" ";
                        result += "class=\"ontour\"";
                        result += "style=\"background: #4E729A; border: 3px solid #4E729A\"";
						result += ">BK</a>";
                        return result;
                    },
    go: function () {
						this.artistName = $("h1[itemprop='name']").text();
						$("h1[itemprop='name']").append(this.getAppendedTextTitle(this.artistName));
                    }
};

vkButton.go();