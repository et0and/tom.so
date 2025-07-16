import { ServiceError, ServiceResponse } from "@/lib/types/service-responses";

/**
 * Error handling utilities for services
 */

export class ServiceException extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number,
  ) {
    super(message);
    this.name = 'ServiceException';
  }
}

export function createServiceError(
  message: string,
  code?: string,
  statusCode?: number,
): ServiceError {
  return {
    message,
    code,
    statusCode,
  };
}

export function createSuccessResponse<T>(data: T): ServiceResponse<T> {
  return {
    data,
    success: true,
  };
}

export function createErrorResponse<T>(error: ServiceError): ServiceResponse<T> {
  return {
    error,
    success: false,
  };
}

export function handleServiceError(error: unknown): ServiceError {
  if (error instanceof ServiceException) {
    return createServiceError(error.message, error.code, error.statusCode);
  }
  
  if (error instanceof Error) {
    return createServiceError(error.message);
  }
  
  return createServiceError('An unknown error occurred');
}