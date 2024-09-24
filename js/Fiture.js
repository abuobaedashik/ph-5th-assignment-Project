
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
        // modal
        document.getElementById('my-modal').showModal();
        // history added 1
        const record1 =document.createElement('p');
        record1.innerText=`${noakhliDonationInput} Taka is Donated for Flood Relief in Noakhali,Bangladesh`;
        
        // time and date now
        const date = new Date().toLocaleDateString('BD'); 
        const time = new Date().toLocaleTimeString('BD');
        record1.innerText += `\n Date: ${date} ${time} GMT +0600 (Bangladesh Standard Time)`;

        //  history and modal funtionality
        const historyGet = document.getElementById('history-addrd').appendChild(record1);
        historyGet.classList.add('history-card')
        document.getElementById('my-modal').showModal();
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
        // modal
        document.getElementById('my-modal').showModal();
        // history added 2
        const record2 =document.createElement('p');
        record2.innerHTML=`${feniDonationInput} Taka is Donated for Flood Relief in Feni,Bangladesh`;
        
        // time and date now
        const date = new Date().toLocaleDateString('BD'); 
        const time = new Date().toLocaleTimeString('BD');
        record2.innerText += `\n Date: ${date} ${time} GMT +0600 (Bangladesh Standard Time)`;

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
        // modal
        document.getElementById('my-modal').showModal();
        // history added 3
        const record3 =document.createElement('p');
        record3.innerText=`${quotaDonationInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        record3.classList.add('block')
         // time and date now
        const date = new Date().toLocaleDateString('BD'); 
        const time = new Date().toLocaleTimeString('BD');
        record3.innerText += `\n Date: ${date} ${time} GMT +0600 (Bangladesh Standard Time)`;
         const historyGet3 = document.getElementById('history-addrd').appendChild(record3);
        historyGet3.classList.add('history-card')
        
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


