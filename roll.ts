export interface Gen {
    roll(): number;
}

export class Number implements Gen {
    protected constructor(value: number) {
        this.value = value;
    }
    value: number;
    roll(): number {
        return this.value;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

export class D6 implements Gen{
    roll(): number {
        return getRandomInt(6);
    }
}

export class D10 implements Gen{
    roll(): number {
        return getRandomInt(10);
    }
}