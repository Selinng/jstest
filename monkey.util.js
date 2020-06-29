// 显示一个Toast，提示消息
export const toast = (content,time) => {
  	return new Promise((resolve,reject) => {
        let elAlertMsg = document.querySelector("#fehelper_alertmsg");
        if (!elAlertMsg) {
            let elWrapper = document.createElement('div');
            elWrapper.innerHTML = '<div id="fehelper_alertmsg" style="position:fixed;top:5px;left:0;right:0;z-index:100">' +
                '<p style="background:#000;display:inline-block;color:#fff;text-align:center;' +
                'padding:10px 10px;margin:0 auto;font-size:14px;border-radius:4px;">' + content + '</p></div>';
            elAlertMsg = elWrapper.childNodes[0];
            document.body.appendChild(elAlertMsg);
        } else {
            elAlertMsg.querySelector('p').innerHTML = content;
            elAlertMsg.style.display = 'block';
        }

      	window.setTimeout(function () {
            elAlertMsg.style.display = 'none';
          	resolve && resolve();
        }, time || 1000);
    });
};

// 简单的sleep实现
export const sleep = ms => new Promise((resolve,reject) => setTimeout(resolve,ms));