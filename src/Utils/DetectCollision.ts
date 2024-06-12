export class DetectCollision {
    static isCircleCollision(circle1: Circle, circle2: Circle): boolean {
        let distance = Math.sqrt(Math.pow(circle1.centerX - circle2.centerX, 2) + Math.pow(circle1.centerY - circle2.centerY, 2));
        if (distance < circle1.radius + circle2.radius) {
            return true;
        }
        return false;
    }
  
    static isCirclesCollision(circles1: Array<Circle>, circles2: Array<Circle>): boolean {
        let result = false;
        circles1.forEach(circle1 => {
            circles2.forEach(circle2 => {
                if (this.isCircleCollision(circle1, circle2)) {
                    result = true;
                    return;
                }
            });
        });
        return result;
    }
  
    static isRectangleCircleCollision(rectangle: Rectangle, circle: Circle): boolean {
        let closestPoint = { x: 0, y: 0 };
        if (circle.centerX < rectangle.centerX - rectangle.width * 0.5) {
            closestPoint.x = rectangle.centerX - rectangle.width * 0.5;
        }
        else if (circle.centerX > rectangle.centerX + rectangle.width * 0.5) {
            closestPoint.x = rectangle.centerX + rectangle.width * 0.5;
        }
        else {
            closestPoint.x = circle.centerX;
        }

        if (circle.centerY < rectangle.centerY - rectangle.height * 0.5) {
            closestPoint.y = rectangle.centerY - rectangle.height * 0.5;
        }
        else if (circle.centerY > rectangle.centerY + rectangle.height * 0.5) {
            closestPoint.y = rectangle.centerY + rectangle.height * 0.5;
        } 
        else {
            closestPoint.y = circle.centerY;
        }

        let distance = Math.sqrt(Math.pow(closestPoint.x - circle.centerX, 2) + Math.pow(closestPoint.y - circle.centerY, 2));
        if (distance < circle.radius) {
            return true;
        }
        return false;
    }
  
    static isRectangleCirclesCollision(rectangle: Rectangle, circles: Array<Circle>): boolean {
        let result = false;
        circles.forEach(circle => {
            if (this.isRectangleCircleCollision(rectangle, circle)) {
                result = true;
            }
        });
        return result;
    }
}
  
export class Rectangle {
    public centerX: number;
    public centerY: number;
    public width: number;
    public height: number;

    constructor(centerX: number, centerY: number, width: number, height: number) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.width = width;
        this.height = height;
    }
}

export class Circle {
    public centerX: number;
    public centerY: number;
    public radius: number;

    constructor(centerX: number, centerY: number, radius: number) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
}
  