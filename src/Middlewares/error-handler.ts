import { Request, Response, NextFunction } from "express";
import { CustomError } from "../Utils/errors";

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (error instanceof CustomError) {
            return res
                .status(error.statusCode)
                .json({ errors: error.toResponseObject() });
        }

        return res.status(500).json({ errors: [{ message: error.message }] });
    } catch (err) {
        next(err);
    }

    return res
        .status(500)
        .json({ errors: [{ message: "Internal Server Error" }] });
};
