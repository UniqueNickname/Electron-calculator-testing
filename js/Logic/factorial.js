function factorial(num)
{
    if(!(num >= 0)) {
        return "введите число больше 0";
    }

    if(!((num - Math.floor(num)) == 0)) {
        return "введите целое число";
    }

    if (num == 0)
        return 1;
    else
        return num * factorial(num - 1);
}
module.exports = factorial;