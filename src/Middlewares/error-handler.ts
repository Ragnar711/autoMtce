import { Request, Response, NextFunction } from "express";
import { CustomError } from "../Utils/errors";

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line
    next: NextFunction,
) => {
    // eslint-disable-next-line
    console.error(error);
    if (error instanceof CustomError) {
        return res
            .status(error.statusCode)
            .json({ errors: error.toResponseObject() });
    }

    return res.status(500).json({ errors: [{ message: error }] });
};
