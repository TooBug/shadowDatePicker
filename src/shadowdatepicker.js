~function(window){

	'use strict';

	// 获取datePicker下拉部分HTML
	function getDatePickerHTML(){

		return '<div class="calendar_table"><table>'+
					'<caption>'+
						'<a href="#" class="premonth">上一月</a><span class="year">2012</span>-<span class="month">06</span><a href="#" class="nextmonth">下一月</a>'+
					'</caption>'+
					'<colgroup>'+
						'<col>'+
						'<col>'+
						'<col>'+
						'<col>'+
						'<col>'+
						'<col>'+
						'<col>'+
					'</colgroup>'+
					'<thead>'+
						'<tr>'+
							'<th scope="col">一</th>'+
							'<th scope="col">二</th>'+
							'<th scope="col">三</th>'+
							'<th scope="col">四</th>'+
							'<th scope="col">五</th>'+
							'<th scope="col">六</th>'+
							'<th scope="col">日</th>'+
						'</tr>'+
					'</thead>'+
					'<tbody>'+
					'</tbody></table></div>';

	}

	// 获取datepicker样式
	function getScopedStyle(){

		var style = document.createElement('style');
		style.setAttribute('scoped','scoped');

		style.innerHTML = '*{color:#00c;}';

		return style;

	}

	// 绑定事件
	function bindEvent(shadowRoot){

		var allA = shadowRoot.querySelectorAll('a');

		Array.prototype.forEach.call(allA,function(a){

			a.addEventListener('click',function(){

				alert(this.innerText);

			},false);

		});

	}

	// 主函数
	function shadowDatePicker(input){

		// 隐藏原输入框
		input.style.display = 'none';

		// 创建shadowRoot
		var shadowRootDiv = document.createElement('div');
		var shadowRoot = shadowRootDiv.webkitCreateShadowRoot();

		shadowRoot.innerHTML = getDatePickerHTML();
		shadowRoot.appendChild(getScopedStyle());

		// 绑定事件
		bindEvent(shadowRoot);


		// shadowRoot.webkitPseudo = 'shadowdatepicker';


		// 写入DOM
		var inputParent = input.parentNode;
		var inputNext = input.nextSibling;

		if(inputNext){
			inputParent.insertBefore(shadowRootDiv,inputNext);
		}else{
			inputParent.appendChild(shadowRootDiv);
		}

	}

	window.shadowDatePicker = shadowDatePicker;

}(window);