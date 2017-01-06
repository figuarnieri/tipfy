/*IBARO*/
;
var d = document
, screenWidth = window.innerWidth
, pc = (screenWidth >= 997) ? true : false
, tablet = (screenWidth <= 996 && screenWidth > 600) ? true : false
, mobile = (screenWidth < 600) ? true : false
;
function add(e,f){
	return window.addEventListener(e,f);
};
(function(){
	if(-[1,]){
		var url = location.host.replace(/^www\.|\.(com|co|es|edu|gov|info|org|net|uol\.com)(|\.(br|))$/gi,'')
		;
		add('load',function(){
			var i = 0
			, js = d.querySelectorAll('[data-js]')
			, css = d.querySelectorAll('[data-css]')
			;
			if(css.length>0){
				console.info('CSS - Ueeeepa! Chama os programadores e designers pq já tem '+css.length+' css/ibaro nessa página');
			}
			if(js.length>0){
				console.info('JS - Ueeeepa! Chama os programadores e designers pq já tem '+js.length+' js/ibaro nessa página');
			}
			if(d.querySelector('[data-error-close]')){
				d.querySelector('[data-error-close]').addEventListener('click',function(e){
					var io_error = d.querySelector('.error-box');
					e.preventDefault();
					io_error.style.opacity=1;
					setInterval(function(){
						(io_error.style.opacity<=0) ? io_error.style.display='none' : io_error.style.opacity-=.05;
					},30);
				});
			}
		});
		add('keyup',function(e){
			if(e.keyCode===13&&e.ctrlKey===true){
				window.open('http://adm.ibaro.com.br/'+url,'_blank');
			}
		});
		for(var i=0;i<d.images.length;i++){
			var img = d.images[i];
			img.onerror = function(){
				img.className+=' img-error';
			}
		}
	}
})();