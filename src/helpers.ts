export function get_random(list: any[]) {
    return list[Math.floor((Math.random() * list.length))];
}