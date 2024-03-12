export abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }
    abstract toResponseObject(): { message: string }[];
}

export class NotAuthorizedError extends CustomError {
    statusCode = 401;
    constructor() {
        super("Not authorized");
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
        this.toResponseObject = this.toResponseObject.bind(this);
    }
    toResponseObject(): { message: string }[] {
        return [{ message: "Non autorisé" }];
    }
}

export class ForbiddenError extends CustomError {
    statusCode = 403;
    constructor() {
        super("Forbidden");
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.toResponseObject = this.toResponseObject.bind(this);
    }
    toResponseObject(): { message: string }[] {
        return [{ message: "Vous n'avez pas le droit d'accèes" }];
    }
}

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor(message?: string) {
        super(`404 Not Found: ${message ?? ""}`);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    toResponseObject(): { message: string }[] {
        return [{ message: `${this.message}` }];
    }
}

export class BadRequestError extends CustomError {
    statusCode = 400;
    public message: string;

    constructor(message: string) {
        super("Bad request error");
        this.message = message;

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    toResponseObject() {
        return [{ message: this.message }];
    }
}
