$(function () {
    const searchWord = function(){
    var searchText = $(this).val(),targetText;

    // 検索ボックスに値が入ってる場合
        $('#key1').each(function() {
        	targetText = $(this).text();
        	// 検索対象となるリストに入力された文字列が存在するかどうかを判断
        	if (targetText.includes(searchText)) {
        		// 存在する場合はそのリストのテキストを用意した配列に格納
        		$(this).removeClass('hidden');
        		$(this).parents('.image-content').show('hidden');
        	}
        	else {
        		$(this).addClass('hidden');
        		$(this).parents('.image-content').hide('hidden');
        	}
        });
        
        $('#key2').each(function() {
        	targetText = $(this).text();
        	// 検索対象となるリストに入力された文字列が存在するかどうかを判断
        	if (targetText.includes(searchText)) {
        		// 存在する場合はそのリストのテキストを用意した配列に格納
        		$(this).removeClass('hidden');
        		$(this).parents('.image-content').show('hidden');
        	}
        	else {
        		$(this).addClass('hidden');
        		$(this).parents('.image-content').hide('hidden');
        	}
        }); 
        
        $('#key3').each(function() {
        	targetText = $(this).text();
        	// 検索対象となるリストに入力された文字列が存在するかどうかを判断
        	if (targetText.includes(searchText)) {
        		// 存在する場合はそのリストのテキストを用意した配列に格納
        		$(this).removeClass('hidden');
        		$(this).parents('.image-content').show('hidden');
        	}
        	else {
        		$(this).addClass('hidden');
        		$(this).parents('.image-content').hide('hidden');
        	}
        }); 
        
        $('#key4').each(function() {
        	targetText = $(this).text();
        	// 検索対象となるリストに入力された文字列が存在するかどうかを判断
        	if (targetText.includes(searchText)) {
        		// 存在する場合はそのリストのテキストを用意した配列に格納
        		$(this).removeClass('hidden');
        		$(this).parents('.image-content').show('hidden');
        	}
        	else {
        		$(this).addClass('hidden');
        		$(this).parents('.image-content').hide('hidden');
        	}
        }); 
  	
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});


