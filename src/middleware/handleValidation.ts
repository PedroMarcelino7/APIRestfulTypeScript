import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";

const isFieldValidationError = (err: any): err is { param: string, msg: string } => {
    return typeof err.param === 'string' && typeof err.msg === 'string';
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors: { [key: string]: string }[] = [];

    errors.array().forEach((err) => {
        if (isFieldValidationError(err)) {
            extractedErrors.push({ [err.param]: err.msg });
        }
    });

    return res.status(422).json({
        errors: extractedErrors
    });
};
