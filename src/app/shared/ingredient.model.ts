export class Ingredient {
    private name: string;
    private amount: number;
    private icon: string;
    private measurementUnit: string;

    constructor(name: string, amount: number, icon: string, measurementUnit: string) {
        this.name = name;
        this.amount = amount;
        this.icon = icon;
        this.measurementUnit = measurementUnit;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number) {
        this.amount = amount;
    }

    getIcon(): string {
        return this.icon;
    }

    setIcon(icon: string) {
        this.icon = icon;
    }

    getMeasurementUnit() {
        return this.measurementUnit;
    }

    setMeasurementUnit(measurementUnit: string) {
        this.measurementUnit = measurementUnit;
    }
}
