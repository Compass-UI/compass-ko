// $(function(){
//   $.get('https://restcountries.eu/rest/v2/all', function(data){
//       console.log(data)
//   })  
// })

/** Cache REST call data */
var localCache = {
    data: {},
    remove: function (url) {
        delete localCache.data[url];
    },
    exist: function (url) {
        return localCache.data.hasOwnProperty(url) && localCache.data[url] !== null;
    },
    get: function (url) {
        console.log('Getting in cache for url' + url);
        return localCache.data[url];
    },
    set: function (url, cachedData, callback) {
        localCache.remove(url);
        localCache.data[url] = cachedData;
        if ($.isFunction(callback)) callback(cachedData);
    }
};

$(function () {
    // var url = '/echo/jsonp/';
    var url = 'https://restcountries.eu/rest/v2/all';
    $('#ajaxButton').click(function (e) {
        $.ajax({
            url: url,
            data: {
                test: 'value'
            },
            cache: true,
            /** The meat of caching here: */
            beforeSend: function () {
                if (localCache.exist(url)) {
                    doSomething(localCache.get(url));
                    return false;
                }
                return true;
            },
            complete: function (jqXHR, textStatus) {
                localCache.set(url, jqXHR, doSomething);
            }
        });
    });
});

function doSomething(data) {
    /** Full response */
    console.log(data);
    /** just response data */
    console.log(data.responseJSON);
}
