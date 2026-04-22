'use client';

import React, { useState, useCallback } from 'react';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseAsyncOptions<T = unknown> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

/**
 * Custom hook for async operations
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true,
  options?: UseAsyncOptions<T>
) {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await asyncFunction();
      setState({ data: response, loading: false, error: null });
      options?.onSuccess?.(response);
      return response;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, loading: false, error: err });
      options?.onError?.(err);
      throw err;
    }
  }, [asyncFunction, options]);

  // Execute immediately if requested
  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}

/**
 * Custom hook to check if user is premium
 */
export function usePremium() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const checkPremium = async () => {
      try {
        const response = await fetch('/api/users/premium');
        const data = await response.json();
        setIsPremium(data.isPremium || false);
      } catch (error) {
        console.error('Error checking premium status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkPremium();
  }, []);

  return { isPremium, loading };
}

/**
 * Custom hook for user progress
 */
export function useUserProgress(lessonId: string) {
  const [progress, setProgress] = React.useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchProgress = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/progress/${lessonId}`);
      const data = await response.json() as Record<string, unknown>;
      if (data.success) {
        setProgress(data.data as Record<string, unknown>);
      }
    } catch (err) {
      const err2 = err instanceof Error ? err : new Error(String(err));
      setError(err2);
    } finally {
      setLoading(false);
    }
  }, [lessonId]);

  React.useEffect(() => {
    void fetchProgress();
  }, [fetchProgress]);

  return { progress, loading, error, refetch: fetchProgress };
}

/**
 * Custom hook for managing form state
 */
export function useForm<T extends Record<string, string | boolean | number>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void> | void
) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      setValues((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    },
    []
  );

  const handleSubmit = React.useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setErrors({ submit: err.message });
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, onSubmit]
  );

  const resetForm = React.useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
  };
}
