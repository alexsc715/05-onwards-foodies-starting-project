"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}

/*
How It Works

- useFormStatus() returns { pending } scoped to the closest 
ancestor <form> that has an action tied to a server action.
- When the form is submitted, pending becomes true until 
the server action resolves, preventing duplicate submissions 
and giving user feedback.
*/
