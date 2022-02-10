// ==UserScript==
// @name JUT.SU Flipping
// @description Мой самый первый юзерскрипт для пролистывания опенинга
// @author ArtiST
// @license MIT
// @version 4.0
// @include https://jut.su/*
// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)
(function (window, undefined) {  // [2] нормализуем window
	
	if (window.self != window.top) {
        return;
    }
    if (/https:\/\/jut.su/.test(window.location.href)) {
        //Ниже идёт непосредственно код скрипта
		// функция нажатия кнопки "пропустить опенинг"

	function ClickClack(){	
		var btn = document.getElementsByClassName("vjs-overlay vjs-overlay-bottom-left vjs-overlay-skip-intro vjs-overlay-background");
		var btnclass = btn[0].className;
		if(btnclass !== "vjs-overlay vjs-overlay-bottom-left vjs-overlay-skip-intro vjs-overlay-background vjs-hidden"){
			btn[0].click();
			clck = true;
			clearInterval(clock);
		}	
	}
		var clock = setInterval(ClickClack,3000);

	}
})(window);


