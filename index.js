// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }

    set diameter(dia) {
        return this.radius = dia / 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    set circumference(cir) {
        return this.diameter = cir / Math.PI
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set area(a) {
        return this.radius = Math.sqrt(a / Math.PI)
    }
}