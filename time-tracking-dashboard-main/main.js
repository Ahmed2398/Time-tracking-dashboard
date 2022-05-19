// 1-Declare Const Varible
const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');


function dailyData(){
    fetch('/time-tracking-dashboard-main/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData() {
    fetch('/time-tracking-dashboard-main/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
                lastTime[i].innerHTML = 'Last Day - ' + data[i].timeframes.weekly.previous + 'hrs';
            })
        })
}


function monthlyData() {
    fetch('/time-tracking-dashboard-main/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
                lastTime[i].innerHTML = 'Last Day - ' + data[i].timeframes.monthly.previous + 'hrs';
            })
        })
}



dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('text-muted')
    weeklyBtn.classList.add('text-muted')
    mothlyBtn.classList.add('text-muted')
    dailyData()
})


weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('text-muted')
    dailyBtn.classList.add('text-muted')
    mothlyBtn.classList.add('text-muted')
    weeklyData()
})


mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.remove('text-muted')
    dailyBtn.classList.add('text-muted')
    weeklyBtn.classList.add('text-muted')
    monthlyData()
})
