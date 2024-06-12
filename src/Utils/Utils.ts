export default class Utils {
    static zeroPad(num: number, places: number) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
}