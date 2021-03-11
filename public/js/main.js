// -----------------
// variable
// -----------------

// -----------------
// event
// -----------------

// -----------------
// init
// -----------------

// -----------------
// function
// -----------------
function getQueryString() {
    let a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    let b = {};
    for (let i = 0; i < a.length; ++i) {
        let p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

async function customizeLogger( logData ){
    let QS = getQueryString();
    let tarCd = QS.t === undefined ? '' : QS.t;
    let tarTy = '';


    if(QS.cm.includes('KAO')) logData['tsndCd'] = 'FT'
    else if(QS.cm.includes('EMR_D')) logData['tsndCd'] = 'EXC_EMR_D'
    else if(QS.cm.includes('EMR')) logData['tsndCd'] = 'EXC_EMR'
    else if(QS.cm.includes('ADO')) logData['tsndCd'] = 'EXC_ADO'
    else if(QS.cm.includes('RTE')) logData['tsndCd'] = 'EXC_RTE'
    else if(QS.cm.includes('PREVIEW')) logData['tsndCd'] = 'PREVIEW'

    if(tarCd.includes('WKRM')) tarTy = 'HCP'
    else if(tarCd.includes('MR')) tarTy = 'EMP'
    else if(tarCd.includes('MKT')) tarTy = 'EMP'
    else if(tarCd.includes('TEST')) tarTy = 'TEST'

    logData['msgIdx'] = QS.m
    logData['tarCd']   = tarCd;
    logData['tarTy']   = tarTy;
    logData['logType'] = 'CUS'
    logData['varPre'] = logData['varPre'] === undefined ? '' : logData['varPre'];
    logData['varBtn'] = logData['varBtn'] === undefined ? '' : logData['varBtn'];

    await $.post('/c/logger', { logData : logData }, x => {
        console.log(x)
    })

}


let setCookie = function(name, value, day) {
    let date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};
let getCookie = function(name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};
let deleteCookie = function(name) {
    let date = new Date();
    document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
}

