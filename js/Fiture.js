
// noakhali Donation
document.getElementById('donation-btn-1').addEventListener('click',function (event) {
    event.preventDefault();
    // total money
    const totalBalance = document.getElementById('total-balance').innerText;
    const totalBalanceNum =parseFloat(totalBalance);
    // noakhali add money and input
    const noakhliDonationInput = commonInputIdGet('donation-money-1');
    const noakhliDonationMoney = commonBalanceIdGet('total-balance-noakhali')
    const noakhliFoundAdd =noakhliDonationInput+noakhliDonationMoney;
    const minusFromTotal =totalBalanceNum-noakhliDonationInput;
    //  show add and total money 
    
    if (noakhliDonationInput>0 && typeof noakhliDonationInput === 'number') {
        document.getElementById('total-balance-noakhali').innerText =noakhliFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
        // console.log(noakhliDonationInput)
        // history added 1
        const record1 =document.createElement('p');
        record1.innerText=`${noakhliDonationInput} Taka is Donated for Flood Relief in Noakhali,Bangladesh`;
        const historyGet = document.getElementById('history-addrd').appendChild(record1);
        historyGet.classList.add('history-card')
    }
    else{
       alert('Invalid Amount!');
    }
})
// Feni Donation
document.getElementById('donation-btn-2').addEventListener('click',function (event) {
    event.preventDefault();
    // total balance
    const totalBalance = document.getElementById('total-balance').innerText;
    const totalBalanceNum =parseFloat(totalBalance);
    // input and money add
    const feniDonationInput = commonInputIdGet('donation-money-2');
    const feniDonationMoney = commonBalanceIdGet('total-balance-feni')
    const feniFoundAdd =feniDonationInput+feniDonationMoney;
    const minusFromTotal =totalBalanceNum-feniDonationInput;
    //  show add and total money 
    if (feniDonationInput>0 && typeof feniDonationInput === 'number') {
        document.getElementById('total-balance-feni').innerText =feniFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
        // history added 2
        const time =date();
        const record2 =document.createElement('p');
        record2.innerText=`${feniDonationInput} Taka is Donated for Flood Relief in Feni,Bangladesh ${time}`;
        const historyGet2 = document.getElementById('history-addrd').appendChild(record2);
        historyGet2.classList.add('history-card');
    }
    else{
       alert('Invalid Amount!');
    }
});
// Quta Donation
document.getElementById('donation-btn-3').addEventListener('click',function (event) {
    event.preventDefault();
    // total balance
    const totalBalance = document.getElementById('total-balance').innerText;
    const totalBalanceNum =parseFloat(totalBalance);
    // input and money add
    const quotaDonationInput = commonInputIdGet('donation-money-3');
    const quotaDonationMoney = commonBalanceIdGet('total-balance-quota')
    const quotaFoundAdd =quotaDonationInput+quotaDonationMoney;
    const minusFromTotal =totalBalanceNum-quotaDonationInput;
     //  show add and total money 
     if (quotaDonationInput>0 && typeof quotaDonationInput === 'number') {
        document.getElementById('total-balance-quota').innerText =quotaFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
        // history added 3
        const record3 =document.createElement('p');
        record3.innerText=`${quotaDonationInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
         const historyGet3 = document.getElementById('history-addrd').appendChild(record3);
        historyGet3.classList.add('history-card')
        const time = date()
         console.log(time);
    }
    else{
       alert('Invalid Amount!');
    } 
});

document.getElementById('blog-btn').addEventListener('click',function () {
    window.location.href='./blog.html';
    // window.location.href='./blog.html';
})
document.getElementById('back-home').addEventListener('click',function () {
    window.location.href='./index.html';
    // window.location.href='./index.html';
    console.log('get');
})


