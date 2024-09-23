
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
    
    if (noakhliDonationInput>=0 && typeof noakhliDonationInput === 'number') {
        document.getElementById('total-balance-noakhali').innerText =noakhliFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
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
    if (feniDonationInput>=0 && typeof feniDonationInput === 'number') {
        document.getElementById('total-balance-feni').innerText =feniFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
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
     if (quotaDonationInput>=0 && typeof quotaDonationInput === 'number') {
        document.getElementById('total-balance-quota').innerText =quotaFoundAdd;
        document.getElementById('total-balance').innerText =minusFromTotal;
    }
    else{
       alert('Invalid Amount!');
    } 
});