export class Product {
    private name: string;
    private image: string;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }

    setName(name: string) {
        this.name = name;
    }

    setImage(image: string) {
        this.image = image;
    }

    getName(): string {
        return this.name;
    }

    getImage(): string {
        return this.image;
    }
}