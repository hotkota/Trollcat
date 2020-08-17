module.exports={
    name:'время',
    execute(message){
        function Time(){
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var date = d.getDate();
            var day = d.getDay();
            var hour = d.getHours();
            var minuts = d.getMinutes();
            var second = d.getSeconds();
            var milisecond = d.getMilliseconds();

            month++;

            switch(day){
                case 1:
                    day = 'Понедельник';
                    break;
                case 2:
                    day = 'Вторник';
                    break;
                case 3:
                    day = 'Среда';
                    break;
                case 4:
                    day = 'Четверг';
                    break;
                case 5:
                    day = 'Пятница';
                    break;
                case 6:
                    day = 'Суббота';
                    break;
                case 0:
                    day = 'Воскресенье';
                    break;
                default:
                    break;
            };

            switch (month) {
                case 1:
                    month = 'Январь';
                    break;
                case 2:
                    month = 'Февраль';
                    break;
                case 3:
                    month = 'Март';
                    break;
                case 4:
                    month = 'Апрель';
                    break;
                case 5:
                    month = 'Май';
                    break;
                case 6:
                    month = 'Июнь';
                    break;
                case 7:
                    month = 'Июль';
                    break;
                case 8:
                    month = 'Август';
                    break;
                case 9:
                    month = 'Сентябрь';
                    break;
                case 10:
                    month = 'Октябрь';
                    break;
                case 11:
                    month = 'Ноябрь';
                    break;
                case 12:
                    month = 'Декабрь';
                    break;
            };

            message.channel.send(`Время на данный момент:\nГод: **${year}**\nМесяц: **${month}**\nДата: **${date}**\nДень недели: **${day}**\nЧас: **${hour-4}**\nМинут: **${minuts}**\nСекунд: **${second}**\nМилисекунд: **${milisecond}**`);
        };
        Time();
    },
};