import { useState, useCallback } from 'react';

/**
 * Custom hook for form state management with validation
 * @param {Object} initialValues - Initial form field values
 * @param {Object} validationRules - Validation rules for each field
 * @returns {Object} Form state and handlers
 */
export function useFormState(initialValues = {}, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = useCallback(() => {
    const newErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const rules = validationRules[field];
      const value = values[field];

      if (rules.required && (!value || !value.toString().trim())) {
        newErrors[field] = rules.message || `${field} is required`;
      } else if (rules.email && value && !validateEmail(value)) {
        newErrors[field] = 'Please enter a valid email';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => {
      if (prev[name]) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, []);

  const handleSubmit = useCallback(async (onSubmit) => {
    if (!validate()) return false;

    setIsSubmitting(true);

    try {
      // Mock submission with 1s delay
      console.log('Form submission:', values);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (onSubmit) {
        await onSubmit(values);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      return true;
    } catch (error) {
      setIsSubmitting(false);
      console.error('Form submission error:', error);
      return false;
    }
  }, [values, validate]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    validate,
    reset,
    setValues,
    setErrors,
  };
}

export default useFormState;
