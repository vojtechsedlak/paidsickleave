$(document).ready(function() {
	console.log("yeehaaa");
	$('#dots').show();
    $.ajax({url: "https://spreadsheets.google.com/feeds/list/1f5MsqVo264-wDyptNJt9j_jEP9dwWXkRuJbukicIqW4/default/public/values?alt=json", success: function(result){
        console.log(result);
        var data = result.feed.entry;
        for (var i=0;i<data.length;i++) {
            var name = data[i].gsx$company.$t;
            var employees = data[i].gsx$employees.$t;
        	var logo = data[i].gsx$image.$t;
        	var handle = encodeURI(data[i].gsx$twitter.$t);
        	var tweet = encodeURI('.'+handle+': It\'s time put people over profit and gurantee paid sick leave for all your employees. https://paidsickleave.org')
        	$('#board').append('<div class="entity col-3"><div class="entity-image"><img src="img/logos/'+logo+'"></div><p><strong>'+name+'</strong></p><a target="_new" onClick="gtag(\'event\', \'Tweet Click\')" class="btn" href="https://twitter.com/intent/tweet?text='+tweet+'&hashtags=COVID19"><img src="img/twitter_white.svg" style="width:20px;"> Tweet</a></div>');
        }
        $('#dots').hide();
    }});
})
