export function useModel() {
    interface Item {
        make: number;
    }

    const makes: number[] = [];
    let makes2: number[] = [];
    const cars: Item[] = [{ make: 1 }, { make: 2 }];

    /**
     * 命令式代码
     */
    for (let i = 0; i < cars.length; i++) {
        makes.push(cars[i].make);
    }
    /**
     * 声明式代码
     */
    makes2 = cars.map(item => item.make);

    console.log('命令式', makes);
    console.log('声明式', makes2);

    return {};
}
