document.getElementById('history-btn').addEventListener('click',function () {
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('mainSec').classList.add('hidden');
    document.getElementById('history-btn').classList.add('common-bg');
    document.getElementById('donationBtn').classList.remove('common-bg');

})
document.getElementById('donationBtn').addEventListener('click',function () {
    document.getElementById('mainSec').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donationBtn').classList.add('common-bg');
    document.getElementById('history-btn').classList.remove('common-bg');
})