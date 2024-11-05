'use strict';

let bitcoin_traded = document.getElementById('bitcoin-traded');
let active_wallets = document.getElementById('active-wallets');
let successfull_withdrawal = document.getElementById('successfull-withdrawal');
let active_trading_profile = document.getElementById('active-trading-profile');

    bitcoin_traded.innerHTML = 0;
    active_wallets.innerHTML = 0;
    successfull_withdrawal.innerHTML = 0;
    active_trading_profile.innerHTML = 0;

    let btc_traded = 0;
    let active_wllt = 0;
    let successfull_wtd = 0;
    let active_trd_pfl = 0;

    let timer1 = null;
    let timer2 = null;
    let timer3 = null;
    let timer4 = null;

function counter1(){
    btc_traded ++;
    bitcoin_traded.innerHTML = btc_traded;
    if(btc_traded == 26006){
        stop1();
    }

}

// these functions increament values by 1 and stop when needed
function counter2(){
    active_wllt ++;
    active_wallets.innerHTML = active_wllt;
    if(active_wllt == 40589){
        stop2();
    }
}
function counter3(){
    successfull_wtd ++;
    successfull_withdrawal.innerHTML = successfull_wtd;
    if(successfull_wtd == 3769){
        stop3();
    }
}
function counter4(){
    active_trd_pfl ++;
    active_trading_profile.innerHTML = active_trd_pfl;
    if(active_trd_pfl == 98765){
        stop4();
    }
}


// these functions set interval for each counter above
function start_counting1(){
    timer1 = setInterval(counter1, 1);
}
function start_counting2(){
    timer2 = setInterval(counter2, 1);
}
function start_counting3(){
    timer3 = setInterval(counter3, 1);
}
function start_counting4(){
    timer4 = setInterval(counter4, 1);
}
// invoking of the counting fx
start_counting1();
start_counting2();
start_counting3();
start_counting4();


// these funtions stop the counting when needed
function stop1(){
   clearInterval(timer1);
}
function stop2(){
   clearInterval(timer2);
}
function stop3(){
   clearInterval(timer3);
}
function stop4(){
   clearInterval(timer4);
}