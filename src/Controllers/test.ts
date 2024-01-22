import { Request, Response } from "express";

export const TEST = (req: Request, res: Response) => {
    res.send("Hi");
};
