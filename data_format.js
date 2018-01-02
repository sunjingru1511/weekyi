
function date () {
        var data = new Date();
        var year = data.getFullYear(); // 年
        var yue = data.getMonth()+1; // 月
        var ri = data.getDate();  // 日
        document.write(year + '-' + yue + '-' + ri);
}
date();